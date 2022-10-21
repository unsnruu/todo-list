import { useState, createContext } from "react";
import type { PropsWithChildren, Dispatch } from "react";
import { Todos } from "../types/todo.type";

interface TodoContextType {
  setTodos: Dispatch<React.SetStateAction<Todos>>;
  todos: Todos;
}
const TodoContext = createContext<TodoContextType>({
  todos: [],
  setTodos: () => {},
});

function TodoProvider({ children }: PropsWithChildren) {
  const [todos, setTodos] = useState<Todos>([]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
export { TodoContext };
