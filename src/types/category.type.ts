import { User } from "./user.type";

export type CategoryTitle = string;
export type CategoryId = string;

export type Category = { id: CategoryId; title: CategoryTitle };
export type Categories = Category[];

export interface CategoryService {
  getCategories(user: User): Promise<Categories | null>;
  addCategory(
    newCategory: CategoryTitle,
    user: User
  ): Promise<CategoryId | null>;
  editCategory(): Promise<void>;
  deleteCategory(category: Category, user: User): Promise<CategoryId>;
}
