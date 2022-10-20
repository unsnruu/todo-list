export type Category = string;
export type Categories = Category[];

export interface CategoryService {
  categories: Categories | null;
  getCategories(): Promise<Categories | null>;
  addCategory(newCategory: Category): Promise<void>;
  editCategory(): Promise<void>;
  deleteCategory(): Promise<void>;
}
