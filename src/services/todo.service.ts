import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase.service";

const todoService = {
  async addTodo(collectionName: string) {
    try {
      const docRef = await addDoc(collection(db, collectionName), {
        text: "test",
        description: "테스트 투두를 생성합니다.",
      });
      console.log(docRef);
    } catch (err) {
      console.log(err);
    }
  },
};

export default todoService;
