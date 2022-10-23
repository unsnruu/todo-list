import type { Text, TodoId } from "./common.type";
import type { Category } from "../types/category.type";
import { User } from "./user.type";

export interface Todo {
  text: Text;
  isCompleted: boolean;
  category: Category;
  id: TodoId;
}
export type Todos = Todo[];
export type TodoForm = Omit<Todo, "id">;

//user을 TodoService가 품는 방법은 없을까방
export interface TodoService {
  getTodosByCategory(title: string, user: User): Promise<Todos>;
  addTodo(newTodo: string, user: User): Promise<void>;
  editTodo(id: TodoId, todo: TodoForm, user: User): Promise<void>;
  deleteTodo(id: TodoId, user: User): Promise<void>;
}
