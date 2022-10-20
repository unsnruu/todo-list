import { Categories } from "src/constant/common";

export interface CategoryService {
  categories: Categories | null;
  getCategories(): Promise<void>;
  addCategory(): Promise<void>;
  editCategory(): Promise<void>;
  deleteCategory(): Promise<void>;
}
