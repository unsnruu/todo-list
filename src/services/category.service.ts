import { v4 as uuidv4 } from "uuid";
import { arrayRemove, arrayUnion, getDoc, updateDoc } from "firebase/firestore";
import { getDocRefBy } from "@services/firebase.service";

import { COLLECTION_CATEGORY } from "../constant/common";
import type {
  CategoryService,
  Categories,
  CategoryId,
  Category,
} from "../types/category.type";
import type { User } from "../types/user.type";

type DocReturn = { categories: Categories };

class CategoryServiceImpl implements CategoryService {
  async getCategories(user: User): Promise<Categories | null> {
    if (!user) return null;

    const { uid } = user;
    const docSnap = await getDoc(
      getDocRefBy<DocReturn>(COLLECTION_CATEGORY, uid)
    );

    if (!docSnap.exists()) return null;

    const { categories } = docSnap.data();
    if (!categories) return null;

    return categories;
  }
  async addCategory(
    newCategory: string,
    user: User
  ): Promise<CategoryId | null> {
    if (!user) return null;

    const { uid } = user;
    const categoryRef = getDocRefBy(COLLECTION_CATEGORY, uid);

    const newCategoryId = uuidv4();
    await updateDoc(categoryRef, {
      categories: arrayUnion({ id: newCategoryId, title: newCategory }),
    });
    return newCategoryId;
  }
  async editCategory(): Promise<void> {}
  async deleteCategory(category: Category, user: User): Promise<string> {
    if (!user) throw new Error("no user");
    const { uid } = user;
    const categoryRef = getDocRefBy(COLLECTION_CATEGORY, uid);
    await updateDoc(categoryRef, {
      categories: arrayRemove(category),
    });
    return category.id;
  }
}
export default new CategoryServiceImpl();
