import type { PropsWithChildren } from "react";
import CategoryProvider from "./categoryContext";
import TodoProvider from "./todoContext";

export default function RootProvider({ children }: PropsWithChildren) {
  return (
    <CategoryProvider>
      <TodoProvider>{children}</TodoProvider>
    </CategoryProvider>
  );
}
