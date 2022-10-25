import { Text, TodoId } from "../types/common.type";
import { CategoryTitle } from "../types/category.type";
import { Todo } from "../types/todo.type";

interface Props {
  id: TodoId;
  categoryId: CategoryTitle;
  isCompleted: boolean;
  text: Text;
}
export function createTodo({ id, categoryId, isCompleted, text }: Props): Todo {
  return { id, categoryId, isCompleted, text };
}
