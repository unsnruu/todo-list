import { Text, Category, UserId } from "../constant/common";

export interface Todo {
  text: Text;
  isCompleted: boolean;
  category: Category;
  id: UserId;
}

export type Todos = Todo[];

export type TodoForm = Omit<Todo, "id">;
