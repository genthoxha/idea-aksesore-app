import React, { Dispatch, SetStateAction, useState } from "react";
import { Category } from "../pages/admin/CategoriesAdmin";

type Props = {
  children: React.ReactNode;
};

export interface CategoryContextProps {
  categories: Category[];
  setCategories: Dispatch<SetStateAction<Category[]>>;
}

const CategoryContext = React.createContext<CategoryContextProps>({
  categories: [],
  setCategories: () => [],
});

const CategoryProvider = ({ children }: Props): JSX.Element => {
  const [categories, setCategories] = useState<Category[]>([]);

  return (
    <CategoryContext.Provider
      value={{
        categories,
        setCategories,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryContext, CategoryProvider };
