import { User } from "./user.type";

export type CategoryTitle = string;
export type CategoryId = string;

export type Category = { id: string; title: string };
export type Categories = Category[];

export interface CategoryService {
  getCategories(user: User): Promise<Categories | null>;
  addCategory(
    newCategoryTitle: CategoryTitle,
    user: User
  ): Promise<CategoryId | null>;
  editCategory(
    category: Category,
    newCategoryTitle: CategoryTitle,
    user: User
  ): Promise<void>;
  deleteCategory(category: Category, user: User): Promise<CategoryId>;
}

/**
 * edit에 대해서
 * 1. 수정을 가하기 위해서는 이전 카테고리의 정보와 바꾸려는 카테고리의 정보가 모두 필요하다.
 * 2.
 */
