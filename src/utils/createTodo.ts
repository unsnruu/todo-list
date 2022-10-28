import { Text, TodoId } from "../types/common.type";
import { CategoryTitle } from "../types/category.type";
import { Todo } from "../types/todo.type";

interface Props {
  todoId: TodoId;
  categoryId: CategoryTitle;
  isCompleted: boolean;
  text: Text;
}
export function createTodo({
  todoId,
  categoryId,
  isCompleted,
  text,
}: Props): Todo {
  return { id: todoId, categoryId, isCompleted, text };
}
