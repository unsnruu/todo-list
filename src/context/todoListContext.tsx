import { useState, useEffect, createContext } from "react";
import categoryService from "@services/category.service";
import todoService from "@services/todo.service";
import userService from "@services/user.service";

import type { PropsWithChildren, Dispatch, SetStateAction } from "react";
import type { User } from "../types/user.type";
import type { Todos } from "../types/todo.type";
import type { Categories, Category } from "../types/category.type";
import type { FetchingState } from "../types/common.type";

type SelectedCategory = Category | null;
interface TodosState {
  selectedCategory: SelectedCategory;
  categories: Categories | null;
  todos: Todos;
  user: User;
  setSelectedCategory: Dispatch<SetStateAction<SelectedCategory>>;
  setCategories: Dispatch<SetStateAction<Categories | null>>;
  setTodos: Dispatch<SetStateAction<Todos>>;
  state: FetchingState;
}
export const TodosStateContext = createContext<TodosState>({
  selectedCategory: null,
  categories: null,
  todos: [],
  user: null,
  setSelectedCategory: () => {},
  setCategories: () => {},
  setTodos: () => {},
  state: "idle",
});

function TodosStateProvider({ children }: PropsWithChildren) {
  const [selectedCategory, setSelectedCategory] =
    useState<SelectedCategory>(null);
  const [categories, setCategories] = useState<Categories | null>(null);
  const [todos, setTodos] = useState<Todos>([]);
  const [user, setUser] = useState<User>(null);
  const [state, setState] = useState<FetchingState>("idle");

  useEffect(() => {
    userService.getUser((user) => {
      setUser(user);
    });
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      setState("loading");
      const categories = await categoryService.getCategories(user);
      setCategories(categories);
      setState("idle");
    };
    fetchCategories();
  }, [user]);

  useEffect(() => {
    const fetchTodos = async () => {
      if (!selectedCategory) return;
      setState("loading");
      const todos = await todoService.getTodosByCategory({
        categoryId: selectedCategory.id,
        user,
      });
      if (!todos) return;
      setTodos(todos);
      setState("idle");
    };
    fetchTodos();
  }, [selectedCategory, user]);

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
        state,
      }}
    >
      {children}
    </TodosStateContext.Provider>
  );
}

export default TodosStateProvider;
