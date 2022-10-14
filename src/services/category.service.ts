import {
  addDoc,
  arrayUnion,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db, getUserId } from "./firebase.service";

const COLLECTION_CATEGORY = "category";
const categoryService = {
  async getCategories() {
    const uid = getUserId();
    const docRef = doc(db, COLLECTION_CATEGORY, uid);
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
  },
  async addCateogry(newCategory: string) {
    const uid = getUserId();
    const docRef = doc(db, COLLECTION_CATEGORY, uid);

    await setDoc(docRef, {
      /**
       * 기존 카테고리에 새로 받은 카테고리를 추가하기
       * 그러러면 기존 카테고리에 대한 정보를 가지고 있어야하지 않나?
       * arrayUnion이라는 함수를 제공하는 듯 하다.
       *
       * 회원 가입시에 최초의 데이터에 대해서는
       * 만들어내는 작업이 필요할 듯 하다.
       */
      category: arrayUnion(newCategory),
    });
  },
};

export default categoryService;
