import { User } from "./user.type";

export type Category = string;
export type Categories = Category[] | null;

export interface CategoryService {
  getCategories(user: User): Promise<Categories | null>;
  addCategory(user: User, newCategory: Category): Promise<void>;
  editCategory(): Promise<void>;
  deleteCategory(): Promise<void>;
}
