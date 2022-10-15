import { useEffect, createContext, useState } from "react";
import type { PropsWithChildren, Dispatch } from "react";
import { getCategories } from "@api/category";

interface CategoriesContextType {
  setCategories: Dispatch<React.SetStateAction<string[]>>;
  categories: string[];
}
const CategoryContext = createContext<CategoriesContextType>({
  categories: [],
  setCategories: () => {},
});

function CategoryProvider({ children }: PropsWithChildren) {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    (async function () {
      const data = await getCategories();

      if (data) {
        const { categories } = data;
        setCategories(categories);
      }
    })();
  }, []);

  return (
    <CategoryContext.Provider value={{ setCategories, categories }}>
      {children}
    </CategoryContext.Provider>
  );
}

export default CategoryProvider;
export { CategoryContext };
