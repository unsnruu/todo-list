import { Text, TodoId } from "../types/common.type";
import { CategoryTitle } from "../types/category.type";
import { Todo } from "../types/todo.type";

interface Props {
  id: TodoId;
  category: CategoryTitle;
  isCompleted: boolean;
  text: Text;
}
export function createTodo({ id, category, isCompleted, text }: Props): Todo {
  return { id, category, isCompleted, text };
}
