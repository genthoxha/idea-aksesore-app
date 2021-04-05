import React, { Dispatch, SetStateAction, useState } from "react";
import { ProductType } from "../product/Product";

type Props = {
  children: React.ReactNode;
};

export interface CardContextProps {
  id: string;
  name: string;
  products: ProductType[];
  totalPrice: string;
  productSize: number;
  setId: Dispatch<SetStateAction<string>>;
  setProductSize: Dispatch<SetStateAction<number>>;
  setName: Dispatch<SetStateAction<string>>;
  setProducts: Dispatch<SetStateAction<ProductType[]>>;
  setTotalPrice: Dispatch<SetStateAction<string>>;
}

const CardContext = React.createContext<CardContextProps>({
  id: "",
  name: "",
  products: [],
  productSize: 0,
  totalPrice: "",
  setId: () => "",
  setName: () => "",
  setProducts: () => [],
  setTotalPrice: () => "",
  setProductSize: () => 0,
});

const CardProvider = ({ children }: Props): JSX.Element => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [products, setProducts] = useState<ProductType[]>([]);
  const [productSize, setProductSize] = useState<number>(0);

  return (
    <CardContext.Provider
      value={{
        id,
        setId,
        name,
        productSize,
        setProductSize,
        setName,
        totalPrice,
        setTotalPrice,
        products,
        setProducts,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export { CardContext, CardProvider };
