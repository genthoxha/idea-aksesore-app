import React, { Dispatch, SetStateAction, useState } from "react";
import { ProductType } from "../product/Product";

type Props = {
  children: React.ReactNode;
};

export interface ProductContextProps {
  id: string;
  products: ProductType[];
  setId: Dispatch<SetStateAction<string>>;
  setProducts: Dispatch<SetStateAction<ProductType[]>>;
}

const ProductContext = React.createContext<ProductContextProps>({
  id: "",
  products: [],
  setId: () => "",
  setProducts: () => [],
});

const ProductProvider = ({ children }: Props): JSX.Element => {
  const [id, setId] = useState("");
  const [products, setProducts] = useState<ProductType[]>([]);

  return (
    <ProductContext.Provider
      value={{
        id,
        setId,
        products,
        setProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
