import type { Auth } from "firebase/auth";
import type { User } from "./user.type";

export type CategoryTitle = string;
export type CategoryId = string;

export type Category = { id: CategoryId; title: CategoryTitle };
export type Categories = Category[];

export interface CategoryService {
  auth: Auth;
  getCategories(user: User): Promise<Categories | null>;
  addCategory({
    newCategoryTitle,
    user,
  }: {
    newCategoryTitle: CategoryTitle;
    user: User;
  }): Promise<CategoryId | null>;
  editCategory({
    category,
    newCategoryTitle,
    user,
  }: {
    category: Category;
    newCategoryTitle: CategoryTitle;
    user: User;
  }): Promise<void>;
  deleteCategory({
    category,
    user,
  }: {
    category: Category;
    user: User;
  }): Promise<CategoryId>;
}
