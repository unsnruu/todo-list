import { arrayUnion, getDoc, updateDoc } from "firebase/firestore";
import { getCollectionRef } from "./firebase.service";
import { CategoryService } from "../types/category.type";
import { Categories } from "src/constant/common";

class CategoryServiceImpl implements CategoryService {
  categories: Categories | null;
  constructor() {
    this.categories = null;
  }
  async getCategories(): Promise<void> {
    const collectionRef = getCollectionRef();
    const docSnap = await getDoc(collectionRef);
    if (docSnap.exists()) {
      const { categories } = docSnap.data();
      if (!categories) {
        throw new Error("서버측으로부터 받은 카테고리가 없습니다");
      }
      this.categories = categories;
    }
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
