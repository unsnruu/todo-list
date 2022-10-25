import { v4 as uuidv4 } from "uuid";
import { getDoc, updateDoc, deleteField } from "firebase/firestore";
import { createDocRefBy } from "@services/firebase.service";

import { COLLECTION_CATEGORY } from "../constant/common";
import type {
  CategoryService,
  Categories,
  Category,
} from "../types/category.type";
import type { User } from "../types/user.type";
import todoService from "./todo.service";

type CategoryDocReturn = { [id: string]: string };

class CategoryServiceImpl implements CategoryService {
  async getCategories(user: User): Promise<Categories | null> {
    if (!user) return null;
    const { uid } = user;
    const docSnap = await getDoc(
      createDocRefBy<CategoryDocReturn>(COLLECTION_CATEGORY, uid)
    );
    if (!docSnap.exists()) return null;

    const results = docSnap.data();
    const entries = Object.entries(results);
    return entries.map(([id, title]) => ({ id, title }));
  }
  async addCategory({
    newCategoryTitle,
    user,
  }: {
    newCategoryTitle: string;
    user: User;
  }): Promise<string | null> {
    if (!user) return null;

    const { uid } = user;
    const categoryRef = createDocRefBy(COLLECTION_CATEGORY, uid);

    const newCategoryId = uuidv4();
    await updateDoc(categoryRef, {
      [newCategoryId]: newCategoryTitle,
    });
    return newCategoryId;
  }
  /**
   * editCategory 로직을 손봐야 할 듯.
   * 너무 복잡해졌다.
   */
  async editCategory({
    category,
    newCategoryTitle,
    user,
  }: {
    category: Category;
    newCategoryTitle: string;
    user: User;
  }): Promise<void> {
    if (!user) throw new Error("no user");
    const { uid } = user;
    const categroyRef = createDocRefBy(COLLECTION_CATEGORY, uid);

    await updateDoc(categroyRef, {
      [category.id]: newCategoryTitle,
    });

    const todos = await todoService.getTodosByCategory({
      categoryId: category.id,
    });
    if (!todos) return;

    todos.forEach(async (todo) => {
      await todoService.editTodo({
        todoId: todo.id,
        todo: { ...todo, categoryId: category.id },
      });
    });
  }
  async deleteCategory({
    category,
    user,
  }: {
    category: Category;
    user: User;
  }): Promise<string> {
    if (!user) throw new Error("no user");
    const { uid } = user;
    const categoryRef = createDocRefBy(COLLECTION_CATEGORY, uid);
    await updateDoc(categoryRef, {
      [category.id]: deleteField(),
    });
    return category.id;
  }
}
export default new CategoryServiceImpl();
