import type { PropsWithChildren } from "react";
import TodoProvider from "./todoContext";
import TodoListProvider from "./todoListContext";

export default function RootProvider({ children }: PropsWithChildren) {
  return (
    <TodoListProvider>
      <TodoProvider>{children}</TodoProvider>
    </TodoListProvider>
  );
}
