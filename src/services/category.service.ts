import { v4 as uuidv4 } from "uuid";
import {
  arrayRemove,
  arrayUnion,
  deleteDoc,
  getDoc,
  updateDoc,
  deleteField,
} from "firebase/firestore";
import { getDocRefBy } from "@services/firebase.service";

import { COLLECTION_CATEGORY } from "../constant/common";
import type {
  CategoryService,
  Categories,
  CategoryId,
  Category,
} from "../types/category.type";
import type { User } from "../types/user.type";
import { Todos } from "src/types/todo.type";
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
    newTitle: string,
    user: User
  ): Promise<void> {
    if (!user) throw new Error("no user");
    const { uid } = user;
    const categroyRef = getDocRefBy(COLLECTION_CATEGORY, uid);
    //기존 카테고리로 변경
    await updateDoc(categroyRef, {
      [category.id]: newTitle,
    });
    // 기존 카테고리에 있었던 모든 Todos를 일괄 수정
    // 1.카테고리에 해당하는 모든 투두를 읽어온다.
    // 2.투두를 업데이트한다.
    // ? 캐쉬를 사용할 수는 없을까
    // 어떻게 하면 효율적으로 작성할 수 있을까
    const todos = await todoService.getTodosByCategory(category.title, user);
    todos.forEach(async (todo) => {
      await todoService.editTodo(
        todo.id,
        { ...todo, category: newTitle },
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
