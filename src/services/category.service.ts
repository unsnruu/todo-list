import { arrayUnion, getDoc, updateDoc } from "firebase/firestore";
import { getCollectionRef } from "./firebase.service";

const categoryService = {
  async getCategories() {
    const collectionRef = getCollectionRef();
    const docSnap = await getDoc(collectionRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
  },
  async addCateogry(newCategory: string) {
    const collectionRef = getCollectionRef();
    await updateDoc(collectionRef, {
      categories: arrayUnion(newCategory),
    });
  },
};

export default categoryService;
