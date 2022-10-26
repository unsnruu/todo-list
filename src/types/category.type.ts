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
  }: {
    newCategoryTitle: CategoryTitle;
  }): Promise<CategoryId | null>;
  editCategory({
    category,
    newCategoryTitle,
  }: {
    category: Category;
    newCategoryTitle: CategoryTitle;
  }): Promise<void>;
  deleteCategory({ category }: { category: Category }): Promise<CategoryId>;
}
