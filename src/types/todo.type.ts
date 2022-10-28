import type { Auth } from "firebase/auth";
import { CategoryId } from "./category.type";
import type { Text, TodoId } from "./common.type";

export interface Todo {
  text: Text;
  isCompleted: boolean;
  categoryId: CategoryId;
  id: TodoId;
}
export type Todos = Todo[];
export type TodoForm = Omit<Todo, "id">;

//user을 TodoService가 품는 방법은 없을까방
//todo : user객체를 다루는 방식을 변경할 것
export interface TodoService {
  auth: Auth;
  getTodosByCategory({
    categoryId,
  }: {
    categoryId: CategoryId;
  }): Promise<Todos | null>;
  addTodo({
    categoryId,
    newTodoText,
  }: {
    newTodoText: string;
    categoryId: CategoryId;
  }): Promise<TodoId | null>;
  editTodo({ todo, todoId }: { todoId: TodoId; todo: TodoForm }): Promise<void>;
  deleteTodo({ todoId }: { todoId: TodoId }): Promise<void>;
}
