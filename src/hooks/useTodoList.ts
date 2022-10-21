import { useContext } from "react";
import { TodosStateContext } from "@context/todoListContext";

function useTodosState() {
  return useContext(TodosStateContext);
}
export default useTodosState;
