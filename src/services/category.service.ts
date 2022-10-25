import { v4 as uuidv4 } from "uuid";
import { getDoc, updateDoc, deleteField } from "firebase/firestore";
import { getDocRefBy } from "@services/firebase.service";

import { COLLECTION_CATEGORY } from "../constant/common";
import type {
  CategoryService,
  Categories,
  CategoryId,
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
      getDocRefBy<CategoryDocReturn>(COLLECTION_CATEGORY, uid)
    );
    if (!docSnap.exists()) return null;

    const results = docSnap.data();
    const entries = Object.entries(results);
    return entries.map(([id, title]) => ({ id, title }));
  }
  async addCategory(
    newCategoryTitle: string,
    user: User
  ): Promise<CategoryId | null> {
    if (!user) return null;

    const { uid } = user;
    const categoryRef = getDocRefBy(COLLECTION_CATEGORY, uid);

    const newCategoryId = uuidv4();
    await updateDoc(categoryRef, {
      [newCategoryId]: newCategoryTitle,
    });
    return newCategoryId;
  }
  async editCategory(
    category: Category,
    newCategoryTitle: string,
    user: User
  ): Promise<void> {
    if (!user) throw new Error("no user");
    const { uid } = user;
    const categroyRef = getDocRefBy(COLLECTION_CATEGORY, uid);

    await updateDoc(categroyRef, {
      [category.id]: newCategoryTitle,
    });

    const todos = await todoService.getTodosByCategory(category.title, user);
    todos.forEach(async (todo) => {
      await todoService.editTodo(
        todo.id,
        { ...todo, categoryId: category.id },
        user
      );
    });
  }
  async deleteCategory(category: Category, user: User): Promise<string> {
    if (!user) throw new Error("no user");
    const { uid } = user;
    const categoryRef = getDocRefBy(COLLECTION_CATEGORY, uid);
    await updateDoc(categoryRef, {
      [category.id]: deleteField(),
    });
    return category.id;
  }
}
export default new CategoryServiceImpl();
