import { useState, useEffect, createContext } from "react";
import categoryService from "@services/category.service";
import todoService from "@services/todo.service";
import userService from "@services/user.service";

import type { PropsWithChildren, Dispatch, SetStateAction } from "react";
import type { User } from "../types/user.type";
import type { Todos } from "../types/todo.type";
import type { Categories, Category } from "../types/category.type";

type SelectedCategory = null | Category;
interface TodosState {
  selectedCategory: SelectedCategory;
  categories: Categories;
  todos: Todos;
  user: User;
  setSelectedCategory: Dispatch<SetStateAction<SelectedCategory>>;
  setCategories: Dispatch<SetStateAction<Categories>>;
  setTodos: Dispatch<SetStateAction<Todos>>;
}
export const TodosStateContext = createContext<TodosState>({
  selectedCategory: null,
  categories: null,
  todos: [],
  user: null,
  setSelectedCategory: () => {},
  setCategories: () => {},
  setTodos: () => {},
});

function TodosStateProvider({ children }: PropsWithChildren) {
  const [selectedCategory, setSelectedCategory] =
    useState<SelectedCategory>(null);
  const [categories, setCategories] = useState<Categories>(null);
  const [todos, setTodos] = useState<Todos>([]);
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    userService.getUser((user) => {
      setUser(user);
    });
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await categoryService.getCategories(user);
      setCategories(categories);
    };
    fetchCategories();
  }, [user]);

  useEffect(() => {
    const fetchTodos = async () => {
      if (!selectedCategory) return;
      const todos = await todoService.getTodosByCategory(selectedCategory);
      setTodos(todos);
    };
    fetchTodos();
  }, [selectedCategory]);

  return (
    <TodosStateContext.Provider
      value={{
        selectedCategory,
        categories,
        todos,
        user,
        setSelectedCategory,
        setCategories,
        setTodos,
      }}
    >
      {children}
    </TodosStateContext.Provider>
  );
}

export default TodosStateProvider;
