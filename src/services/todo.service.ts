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
  CollectionReference,
} from "firebase/firestore";
import { Todo } from "../types/common.type";
import { db, getUserId } from "./firebase.service";

const createTodoDoc = (id: string) =>
  doc(db, "todo ", id) as DocumentReference<Todo>;

const todoService = {
  async getTodosByCategory(category: string) {
    const uid = getUserId();
    const userCollection = collection(db, uid) as CollectionReference<Todo>;
    const q = query(userCollection, where("category", "==", category));
    const querySnapshot = await getDocs(q);

    const todos: Todo[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const todo = { ...data, id: doc.id };
      todos.push(todo);
    });

    return todos;
  },
  async addTodo(todo: Todo) {
    const uid = getUserId();
    await addDoc(collection(db, uid), todo);
  },
  async editTodo(id: string, todo: Todo) {
    const uid = getUserId();
    const todoRef = doc(db, uid, id);
    await setDoc(todoRef, todo);
  },
  async deleteTodo(id: string) {
    await deleteDoc(createTodoDoc(id));
  },
};

export default todoService;
