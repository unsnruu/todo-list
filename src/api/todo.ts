import todoService from "@services/todo.service";
import type { TodoForm } from "../types/todo.type";

const getTodosByCategory = async (category: string) => {
  return await todoService.getTodosByCategory(category);
};
const addTodo = async (todoForm: TodoForm) => {
  await todoService.addTodo(todoForm);
};
const editTodo = async (id: string, todoForm: TodoForm) => {
  await todoService.editTodo(id, todoForm);
};
const deleteTodo = async (id: string) => {
  await todoService.deleteTodo(id);
};

export { getTodosByCategory, addTodo, editTodo, deleteTodo };
