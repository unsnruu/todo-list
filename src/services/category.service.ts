import { v4 as uuidv4 } from "uuid";
import { getDoc, updateDoc, deleteField } from "firebase/firestore";
import { auth, createDocRefBy } from "@services/firebase.service";
import todoService from "./todo.service";

import { COLLECTION_CATEGORY } from "../constant/common";
import type {
  CategoryService,
  Categories,
  Category,
} from "../types/category.type";
import type { Auth } from "firebase/auth";

type CategoryDocReturn = { [id: string]: string };

class CategoryServiceImpl implements CategoryService {
  auth: Auth;
  constructor(auth: Auth) {
    this.auth = auth;
  }
  async getCategories(): Promise<Categories | null> {
    if (!this.auth.currentUser) return null;
    const { uid } = this.auth.currentUser;
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
  }: {
    newCategoryTitle: string;
  }): Promise<string | null> {
    if (!this.auth.currentUser) return null;
    const { uid } = this.auth.currentUser;
    const categoryRef = createDocRefBy(COLLECTION_CATEGORY, uid);

    const newCategoryId = uuidv4();
    await updateDoc(categoryRef, {
      [newCategoryId]: newCategoryTitle,
    });
    return newCategoryId;
  }

  async editCategory({
    category,
    newCategoryTitle,
  }: {
    category: Category;
    newCategoryTitle: string;
  }): Promise<void> {
    if (!this.auth.currentUser) return;
    const { uid } = this.auth.currentUser;
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
  async deleteCategory({ category }: { category: Category }): Promise<string> {
    if (!this.auth.currentUser) throw new Error("no user has found");
    const { uid } = this.auth.currentUser;
    const categoryRef = createDocRefBy(COLLECTION_CATEGORY, uid);
    await updateDoc(categoryRef, {
      [category.id]: deleteField(),
    });
    return category.id;
  }
}
export default new CategoryServiceImpl(auth);
