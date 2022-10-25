import { CategoryId } from "./category.type";
import type { Text, TodoId } from "./common.type";
import { User } from "./user.type";

export interface Todo {
  text: Text;
  isCompleted: boolean;
  category: CategoryId;
  id: TodoId;
}
export type Todos = Todo[];
export type TodoForm = Omit<Todo, "id">;

//user을 TodoService가 품는 방법은 없을까방
//todo : user객체를 다루는 방식을 변경할 것
export interface TodoService {
  getTodosByCategory(
    selectedCategory: CategoryId,
    user: User
  ): Promise<Todos | null>;
  addTodo(
    newTodoText: string,
    category: CategoryId,
    user: User
  ): Promise<TodoId | null>;
  editTodo(todoId: TodoId, todo: TodoForm, user: User): Promise<void>;
  deleteTodo(todoId: TodoId, user: User): Promise<void>;
}
