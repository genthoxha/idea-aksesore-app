import React, { useContext, useState } from "react";
import "./CardModal.css";
import { ProductType } from "../product/Product";
import { CardContext } from "../context/CardContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle, faMinusCircle} from "@fortawesome/free-solid-svg-icons";

export const CardModal: React.FC = () => {
  const cardContext = useContext(CardContext);
  const [allProducts, setAllProducts] = useState<ProductType[]>([]);

  const countProductsWithSameId = (product: ProductType) => {
    let count = 0;
    cardContext.products.map((p) => {
      if (p.id === product.id) {
        count++;
      }
    });
    return count;
  };

  React.useEffect(() => {
    /*   const uniqueProducts = cardContext.products.filter((product, i, array) => {
      return array.indexOf(product) === i;
    })*/
    const uniqueProducts = Array.from(new Set(cardContext.products));
    setAllProducts(uniqueProducts);
  }, [cardContext]);

  const decreaseProductSize = (product: ProductType) => {
    cardContext.setProducts(
      cardContext.products.filter((p) => {
        return p.id !== product.id && p.name !== product.name;
      })
    );
    const uniqueProducts = Array.from(new Set(cardContext.products));
    setAllProducts(uniqueProducts);
  };

  const increaseProductSize = (product: ProductType) => {
    cardContext.setProducts([...cardContext.products, product]);
    const uniqueProducts = Array.from(new Set(cardContext.products));
    setAllProducts(uniqueProducts);
    console.log("All products: ", allProducts);
  };

  const removeSameProducts = (product: ProductType) => {
    const newProducts: ProductType[] = cardContext.products.filter((p) => {
      return p.id !== product.id && p.name !== product.name;
    });
    cardContext.setProducts(newProducts);
  };

  const ProductItem: React.FC<ProductType> = (product: ProductType) => (
    <div>
      <div className="row border-top border-bottom">
        <div className="row main align-items-center">
          <div className="col-2">
            <img className="img-fluid" src={product.image} alt={product.id} />
          </div>
          <div className="col">
            <div className="row text-muted">{product.name}</div>
          </div>
          <div className="col">
            <FontAwesomeIcon
                className="fa-icon"
                color="info"
                icon={faPlusCircle}
                onClick={() => decreaseProductSize(product)}
            />
            <a className="border">{countProductsWithSameId(product)}</a>
            <FontAwesomeIcon
                className="fa-icon"
                icon={faMinusCircle}
                onClick={() => decreaseProductSize(product)}
            />
          </div>
          <div className="col">
            &euro; 44.00{" "}
            <span className="close" onClick={() => removeSameProducts(product)}>
              &#10005;
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="card">
      <div className="row">
        <div className="col-md-8 cart">
          <div className="title">
            <div className="row">
              <div className="col">
                <h4>
                  <b>Produktet</b>
                </h4>
              </div>
              <div className="col align-self-center text-right text-muted">
                {allProducts.length} produkte
              </div>
            </div>
          </div>
          {allProducts.map((product: ProductType, key) => (
            <ProductItem
              key={key}
              name={product.name}
              image={product.image}
              price={product.price}
              categoryId={product.categoryId}
              description={product.description}
              id={product.id}
            />
          ))}
        </div>
        <div className="col-md-4 summary">
          <div>
            <h5>
              <b>Detajet</b>
            </h5>
          </div>
          <div className="row">
            <div className="col">Gjithsej produkte</div>
            <div className="col text-right"> 20 </div>
          </div>
          <form>
            <h5 className="mt-0 pt-0 mt-2">Emri Mbiemri </h5>{" "}
            <input
              id="code"
              className="p-d m-0"
              placeholder="Sheno emrin e plote"
            />
            <h5 className="mt-0 pt-0 mt-2">Adresa </h5>{" "}
            <input id="code" className="p-d m-0" placeholder="Sheno adresen" />
            <h5 className="mt-0 pt-0 mt-2">Nr. Tel </h5>{" "}
            <input
              id="code"
              className="p-d m-0"
              placeholder="Sheno numrin e telefonit"
            />
          </form>
          <div
            className="row"
            style={{
              borderTop: 1,
              borderTopWidth: 1,
              borderTopColor: "rgba(0,0,0,.1)",
              padding: 2,
            }}
          >
            <div className="col">Cmimi Total: </div>
            <div className="col text-right">&euro; 137.00</div>
          </div>
          <button className="btn" title={"Checkout"} />
        </div>
      </div>
    </div>
  );
};
