import categoryService from "@services/category.service";
import type { User } from "../types/user.type";

const getCategories = async (user: User) => {
  return await categoryService.getCategories(user);
};
const addCategory = async (user: User, newCategory: string) => {
  await categoryService.addCategory(user, newCategory);
};
const deleteCategory = async (id: string) => {};

export { getCategories, addCategory, deleteCategory };
