import todoService from "@services/todo.service";
import { Todo } from "../types/common.type";

const getTodosByCategory = async (category: string) => {
  return await todoService.getTodosByCategory(category);
};
const addTodo = (todo: Todo) => {
  todoService.addTodo(todo);
};
const editTodo = (id: string, todo: Todo) => {
  todoService.editTodo(id, todo);
};
const deleteTodo = (id: string) => {
  todoService.deleteTodo(id);
};

export { getTodosByCategory, addTodo, editTodo, deleteTodo };
