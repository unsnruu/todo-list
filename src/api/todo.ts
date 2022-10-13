import todoService from "@services/todo.service";
import { Todo } from "../types/common.type";

const getTodosByCategory = (category: string) => {
  return todoService.getTodosByCategory(category);
};
const addTodo = (category: string, todo: Todo) => {
  todoService.addTodo(category, todo);
};
const editTodo = (id: string, todo: Todo) => {
  todoService.editTodo(id, todo);
};
const deleteTodo = (id: string) => {
  todoService.deleteTodo(id);
};

export { getTodosByCategory, addTodo, editTodo, deleteTodo };
