import { Text, Category, UserId, TodoId } from "../constant/common";

export interface Todo {
  text: Text;
  isCompleted: boolean;
  category: Category;
  id: UserId;
}
export type Todos = Todo[];
export type TodoForm = Omit<Todo, "id">;

export interface TodoService {
  todos: Todos | null;
  getTodosByCategory(category: Category): Promise<void>;
  addTodo(newTood: TodoForm): Promise<void>;
  editTodo(id: TodoId, todo: TodoForm): Promise<void>;
  deleteTodo(id: TodoId): Promise<void>;
}
