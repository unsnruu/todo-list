import { useContext } from "react";
import { CategoryContext } from "../context/categoryContext";

export default function useCategory() {
  return useContext(CategoryContext);
}
