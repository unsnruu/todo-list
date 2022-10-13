import {
  query,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  DocumentReference,
  setDoc,
} from "firebase/firestore";
import { Todo } from "../types/common.type";
import { auth, createCollection, db } from "./firebase.service";

const todosCollection = createCollection<{ todos: [{ title: string }] }>(
  "userid"
);
const createTodoDoc = (id: string) =>
  doc(db, "todo ", id) as DocumentReference<Todo>;

/**
 * 컬렉션이 사용자 정보가 되어야 한다.
 */
const todoService = {
  async getTodosByCategory(category: string) {
    const q = query(todosCollection);
    const querySnapshot = await getDocs(q);

    const todos: Todo[] = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });

    return todos;
  },
  async addTodo(category: string, todo: Todo) {
    if (!auth.currentUser) return;

    const { uid } = auth.currentUser;
    await setDoc(doc(db, uid, category), todo);
  },
  async editTodo(id: string, todo: Todo) {
    const todoRef = createTodoDoc(id);
    await updateDoc(todoRef, todo);
  },
  async deleteTodo(id: string) {
    await deleteDoc(createTodoDoc(id));
  },
};

export default todoService;
