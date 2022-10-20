import { Categories, Category } from "src/constant/common";

export interface CategoryService {
  categories: Categories | null;
  getCategories(): Promise<void>;
  addCategory(newCategory: Category): Promise<void>;
  editCategory(): Promise<void>;
  deleteCategory(): Promise<void>;
}
