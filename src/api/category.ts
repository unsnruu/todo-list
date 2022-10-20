import categoryService from "@services/category.service";

const getCategories = async () => {
  return await categoryService.getCategories();
};
const addCategory = async (newCategory: string) => {
  await categoryService.addCategory(newCategory);
};
const deleteCategory = async (id: string) => {};

export { getCategories, addCategory, deleteCategory };
