import {
  query,
  getDocs,
  deleteDoc,
  doc,
  DocumentReference,
  addDoc,
  collection,
  where,
  setDoc,
} from "firebase/firestore";
import { Todo } from "../types/common.type";
import { auth, db } from "./firebase.service";

const createTodoDoc = (id: string) =>
  doc(db, "todo ", id) as DocumentReference<Todo>;

const todoService = {
  async getTodosByCategory(category: string) {
    if (!auth.currentUser) return;
    const { uid } = auth.currentUser;
    const q = query(collection(db, uid), where("category", "==", category));
    const querySnapshot = await getDocs(q);

    const todos: Todo[] = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });

    return todos;
  },
  async addTodo(todo: Todo) {
    if (!auth.currentUser) return;

    const { uid } = auth.currentUser;
    await addDoc(collection(db, uid), todo);
  },
  async editTodo(id: string, todo: Todo) {
    if (!auth.currentUser) return;
    const { uid } = auth.currentUser;
    const todoRef = doc(db, uid, id);
    await setDoc(todoRef, todo);
  },
  async deleteTodo(id: string) {
    await deleteDoc(createTodoDoc(id));
  },
};

export default todoService;
