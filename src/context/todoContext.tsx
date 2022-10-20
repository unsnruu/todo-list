import { useState, useEffect, createContext } from "react";
import type { PropsWithChildren, Dispatch } from "react";
import { Todos } from "../types/todo.type";
import todoService from "@services/todo.service";
import useCategory from "@hooks/useCategory";

interface TodoContextType {
  setTodos: Dispatch<React.SetStateAction<Todos>>;
  todos: Todos;
}
const TodoContext = createContext<TodoContextType>({
  todos: [],
  setTodos: () => {},
});

function TodoProvider({ children }: PropsWithChildren) {
  const { selected } = useCategory();
  const [todos, setTodos] = useState<Todos>([]);

  useEffect(() => {
    (async function () {
      if (!selected) throw new Error("선택된 카테고리가 존재하지 않습니다.");
      todoService.getTodosByCategory(selected);
    })();
  }, [selected]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
export { TodoContext };
