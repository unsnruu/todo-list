import categoryService from "@services/category.service";

const getCategories = async () => {
  await categoryService.getCategories();
};
const addCategory = async (newCategory: string) => {
  await categoryService.addCateogry(newCategory);
};
const deleteCategory = async (id: string) => {};

export { getCategories, addCategory, deleteCategory };
