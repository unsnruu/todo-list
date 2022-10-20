import {
  query,
  getDocs,
  deleteDoc,
  doc,
  addDoc,
  collection,
  where,
  setDoc,
  CollectionReference,
} from "firebase/firestore";

import type { Todo, TodoForm } from "../types/todo.type";
import { db, getUserId } from "./firebase.service";

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
  async addTodo(todoForm: TodoForm) {
    const uid = getUserId();
    await addDoc(collection(db, uid), todoForm);
  },
  async editTodo(id: string, todoForm: TodoForm) {
    const uid = getUserId();
    const todoRef = doc(db, uid, id);
    await setDoc(todoRef, todoForm);
  },
  async deleteTodo(id: string) {
    const uid = getUserId();
    const todoRef = doc(db, uid, id);
    await deleteDoc(todoRef);
  },
};

export default todoService;
