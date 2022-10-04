import {
  query,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  DocumentReference,
} from "firebase/firestore";
import { Todo } from "../types/common.type";
import { createCollection, db } from "./firebase.service";

const todosCollection = createCollection<Todo>("todos");
const createTodoDoc = (id: string) =>
  doc(db, "todos", id) as DocumentReference<Todo>;

const todoService = {
  async getTodos() {
    const q = query(todosCollection);
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      console.log(doc.data);
    });
  },
  async addTodo({ isCompleted, text, title }: Todo) {
    await addDoc(todosCollection, { title, text, isCompleted });
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
