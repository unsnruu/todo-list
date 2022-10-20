import { arrayUnion, getDoc, updateDoc } from "firebase/firestore";
import { getCollectionRef } from "@services/firebase.service";

import type { CategoryService, Categories } from "../types/category.type";

class CategoryServiceImpl implements CategoryService {
  categories: Categories | null;
  constructor() {
    this.categories = null;
  }
  async getCategories(): Promise<Categories | null> {
    const collectionRef = getCollectionRef();
    const docSnap = await getDoc(collectionRef);

    if (!docSnap.exists()) return null;

    const { categories } = docSnap.data();
    if (!categories) return null;

    return categories;
  }
  async addCategory(newCategory: string): Promise<void> {
    const collectionRef = getCollectionRef();
    await updateDoc(collectionRef, {
      categories: arrayUnion(newCategory),
    });
  }
  async editCategory(): Promise<void> {}
  async deleteCategory(): Promise<void> {}
}
export default new CategoryServiceImpl();
