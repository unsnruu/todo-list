import type { PropsWithChildren } from "react";

import TodoListProvider from "./todoListContext";

export default function RootProvider({ children }: PropsWithChildren) {
  return <TodoListProvider>{children}</TodoListProvider>;
}
