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

import { auth, db } from "./firebase.service";
import type { Todo, Todos, TodoForm, TodoService } from "../types/todo.type";
import { Auth } from "firebase/auth";

class TodoServiceImpl implements TodoService {
  auth: Auth;
  constructor(auth: Auth) {
    this.auth = auth;
  }
  async getTodosByCategory({
    categoryId,
  }: {
    categoryId: string;
  }): Promise<Todos | null> {
    if (!this.auth.currentUser) return null;
    const { uid } = this.auth.currentUser;
    const userCollection = collection(db, uid) as CollectionReference<Todo>;
    const q = query(userCollection, where("category", "==", categoryId));
    const querySnapshot = await getDocs(q);

    const todos: Todo[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const todo = { ...data, id: doc.id };
      todos.push(todo);
    });

    return todos;
  }
  async addTodo({
    categoryId,
    newTodoText,
  }: {
    newTodoText: string;
    categoryId: string;
  }): Promise<string | null> {
    if (!this.auth.currentUser) return null;
    const { uid } = this.auth.currentUser;
    const result = await addDoc(collection(db, uid), {
      text: newTodoText,
      categoryId,
      isCompleted: false,
    });
    return result.id;
  }
  async editTodo({
    todo,
    todoId,
  }: {
    todoId: string;
    todo: TodoForm;
  }): Promise<void> {
    if (!this.auth.currentUser) return;
    const { uid } = this.auth.currentUser;
    const todoRef = doc(db, uid, todoId);
    await setDoc(todoRef, todo);
  }
  async deleteTodo({ todoId }: { todoId: string }): Promise<void> {
    if (!this.auth.currentUser) return;
    const { uid } = this.auth.currentUser;
    const todoRef = doc(db, uid, todoId);
    await deleteDoc(todoRef);
  }
}
export default new TodoServiceImpl(auth);
