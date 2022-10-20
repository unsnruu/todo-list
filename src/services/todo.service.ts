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

import type { Todo, TodoForm, Todos, TodoService } from "../types/todo.type";
import { db, getUserId } from "./firebase.service";

class TodoServiceImpl implements TodoService {
  todos: Todos | null;
  constructor() {
    this.todos = null;
  }
  async getTodosByCategory(category: string): Promise<void> {
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

    this.todos = todos;
  }
  async addTodo(newTood: TodoForm): Promise<void> {
    const uid = getUserId();
    await addDoc(collection(db, uid), newTood);
  }
  async editTodo(id: string, todo: TodoForm): Promise<void> {
    const uid = getUserId();
    const todoRef = doc(db, uid, id);
    await setDoc(todoRef, todo);
  }
  async deleteTodo(id: string): Promise<void> {
    const uid = getUserId();
    const todoRef = doc(db, uid, id);
    await deleteDoc(todoRef);
  }
}

export default new TodoServiceImpl();
