import { v4 as uuidv4 } from "uuid";
import { arrayUnion, getDoc, updateDoc } from "firebase/firestore";
import { getDocRefBy } from "@services/firebase.service";

import type { CategoryService, Categories } from "../types/category.type";
import type { User } from "../types/user.type";
import { COLLECTION_CATEGORY } from "../constant/common";

type DocReturn = { categories: Categories };

class CategoryServiceImpl implements CategoryService {
  async getCategories(user: User): Promise<Categories> {
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
  async addCategory(user: User, newCategory: string): Promise<void> {
    if (!user) return;

    const { uid } = user;
    const docRef = getDocRefBy(COLLECTION_CATEGORY, uid);

    await updateDoc(docRef, {
      categories: arrayUnion({ id: uuidv4(), title: newCategory }),
    });
  }
  async editCategory(): Promise<void> {}
  async deleteCategory(): Promise<void> {}
}
export default new CategoryServiceImpl();
