import todoService from "src/services/todo.service";
import { Todo } from "../types/common.type";

const getTodosByCategory = (category: string) => {
  todoService.getTodosByCategory(category);
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
