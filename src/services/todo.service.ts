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
import { TodoId } from "src/types/common.type";
import { User } from "src/types/user.type";

import type { Todo, Todos, TodoForm, TodoService } from "../types/todo.type";

import { db } from "./firebase.service";

class TodoServiceImpl implements TodoService {
  async getTodosByCategory({
    categoryId,
    user,
  }: {
    categoryId: string;
    user: User;
  }): Promise<Todos | null> {
    if (!user) return [];

    const { uid } = user;
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
    user,
  }: {
    newTodoText: string;
    categoryId: string;
    user: User;
  }): Promise<string | null> {
    if (!user) return null;
    const result = await addDoc(collection(db, user.uid), {
      text: newTodoText,
      categoryId,
      isCompleted: false,
    });
    return result.id;
  }
  async editTodo({
    todo,
    todoId,
    user,
  }: {
    todoId: string;
    todo: TodoForm;
    user: User;
  }): Promise<void> {
    if (!user) throw new Error("no user has found");
    const { uid } = user;
    const todoRef = doc(db, uid, todoId);
    await setDoc(todoRef, todo);
  }
  async deleteTodo({
    todoId,
    user,
  }: {
    todoId: string;
    user: User;
  }): Promise<void> {
    if (!user) throw new Error("no user has found");
    const { uid } = user;
    const todoRef = doc(db, uid, todoId);
    await deleteDoc(todoRef);
  }
}

export default new TodoServiceImpl();
