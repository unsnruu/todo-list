import { useContext } from "react";
import { TodosStateContext } from "@context/todoListContext";

function useTodoList() {
  return useContext(TodosStateContext);
}
export default useTodoList;
