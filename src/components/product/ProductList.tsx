import React from "react";
import Product from "./Product";
import { CardContext, CardProvider } from "../context/CardContext";
const ProductList = () => {
  return (
    <div>
      <Product />
    </div>
  );
};

export default ProductList;
