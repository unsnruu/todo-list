import type { Text, UserId, TodoId } from "../types/common";
import type { Category } from "../types/category.type";

export interface Todo {
  text: Text;
  isCompleted: boolean;
  category: Category;
  id: TodoId;
}
export type Todos = Todo[];
export type TodoForm = Omit<Todo, "id">;

export interface TodoService {
  getTodosByCategory(category: Category): Promise<Todos>;
  addTodo(newTood: TodoForm): Promise<void>;
  editTodo(id: TodoId, todo: TodoForm): Promise<void>;
  deleteTodo(id: TodoId): Promise<void>;
}
