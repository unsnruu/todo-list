import { arrayUnion, getDoc, updateDoc } from "firebase/firestore";
import { getCollectionRef } from "./firebase.service";

const categoryService = {
  async getCategories() {
    const collectionRef = getCollectionRef();
    const docSnap = await getDoc(collectionRef);
    return docSnap.data();
  },
  async addCateogry(newCategory: string) {
    const collectionRef = getCollectionRef();
    await updateDoc(collectionRef, {
      category: arrayUnion(newCategory),
    });
  },
};

export default categoryService;
