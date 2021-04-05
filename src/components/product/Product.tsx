import React, { useContext } from "react";
import { CardContext } from "../context/CardContext";
import { products } from "../../utils/DummyData";

export interface ProductType {
  id: string;
  name: string;
  categoryId: string;
  image: string;
  price: number;
  description: string;
}

const Product = () => {
  const cardContext = useContext(CardContext);
  const handleOnClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    product: ProductType
  ) => {
    event.preventDefault();
    const p: Array<ProductType> = [...cardContext.products, product];
    cardContext.setProducts(p);
    cardContext.setProductSize(cardContext.products.length + 1);
    // history.push("/product/" + category.id);
  };

  React.useEffect(() => {
    console.log("Size: ", cardContext.products);
  }, [cardContext]);

  const listItems = products.map((product, key) => (
    <div className="border border-info m-2 rounded " key={key}>
      <div className=" d-flex flex-column flex-wrap">
        <h4 className="mt-5 card-title text-center">{product.name}</h4>
        <img
          className=" rounded mt-5 rounded w-75 h-75 align-self-center"
          src={product.image}
          alt="Card image cap"
        />
        <p className="mt-2 text-center">{product.description}</p>
        <a
          href="#"
          className="btn btn-info p-2 mb-4 w-75 align-self-center"
          onClick={(event) => handleOnClick(event, product)}
        >
          Shto ne shport
        </a>
        <p className="mt-2 text-center">Cmimi: {product.price} euro</p>
      </div>
    </div>
  ));
  return (
    <div className="main-content" onClick={() => {}}>
      {listItems}

      <nav
        aria-label="Page navigation example"
        className="row col-md-12 justify-content-center align-items-center pagination-container"
      >
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Product;
