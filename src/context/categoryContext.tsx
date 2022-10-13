import { createContext, PropsWithChildren, useState, Dispatch } from "react";

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
  return (
    <CategoryContext.Provider value={{ setCategories, categories }}>
      {children}
    </CategoryContext.Provider>
  );
}

export default CategoryProvider;
export { CategoryContext };
