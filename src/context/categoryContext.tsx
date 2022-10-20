import { useEffect, createContext, useState } from "react";
import type { PropsWithChildren, Dispatch } from "react";
import categoryService from "@services/category.service";
import type { Categories, Category } from "../types/category.type";

interface CategoriesContextType {
  selected: Category | null;
  setSelected: Dispatch<React.SetStateAction<Category | null>>;
  categories: Categories | null;
  setCategories: Dispatch<React.SetStateAction<Categories | null>>;
}
const CategoryContext = createContext<CategoriesContextType>({
  categories: null,
  setCategories: () => {},
  selected: null,
  setSelected: () => {},
});

function CategoryProvider({ children }: PropsWithChildren) {
  const [selected, setSelected] = useState<Category | null>(null);
  const [categories, setCategories] = useState<Categories | null>(null);
  useEffect(() => {
    (async function () {
      const result = await categoryService.getCategories();
      setCategories(result);
    })();
  }, []);

  return (
    <CategoryContext.Provider
      value={{ selected, setSelected, setCategories, categories }}
    >
      {children}
    </CategoryContext.Provider>
  );
}

export default CategoryProvider;
export { CategoryContext };
