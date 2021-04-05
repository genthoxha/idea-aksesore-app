import React, { useContext } from "react";
import "./Category.css";
import { useHistory } from "react-router";
import { CategoryContext } from "../context/CategoryContext";
import { categories } from "../../utils/DummyData";

export type Category = {
  id: string;
  name: string;
  image: string;
};

const Categories = () => {
  const history = useHistory();
  const categoryContext = useContext(CategoryContext);
  const [allCategories, setAllCategories] = React.useState<Category[]>([]);
  const [search, setSearch] = React.useState<string>("");
  const   handleOnClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    category: Category
  ) => {
    event.preventDefault();
    console.log("Event: ", category);
    history.push(`/products/${category.name}/${category.id}`);
  };

  React.useEffect(() => {
    if (search === "") {
      categoryContext.setCategories(categories);
      setAllCategories(categories);
    } else {
      setAllCategories(
        categoryContext.categories.filter((category) => {
          return category.name === search;
        })
      );
    }
  }, [search]);

  React.useEffect(() => {
    setAllCategories(categoryContext.categories);
  }, [categoryContext]);

  const handleSearch = (word: string) => {
    setSearch(word);
    setAllCategories(
      categoryContext.categories.filter((category) => {
        return category.name === search;
      })
    );
  };

  const CategoriesList = allCategories.map((category, key) => (
    <div className="border col-md-2 border-info m-2 rounded " key={key}>
      <div className="d-flex flex-column flex-wrap ">
        <h4 className="mt-5 card-title text-center">{category.name}</h4>
        <img
          className=" rounded  mx-auto d-block category-img "
          src={category.image}
          alt="Card image cap"
        />

        <button
          type="button"
          className="btn btn-info p-2 mb-4 w-75 align-self-center"
          onClick={(event) => handleOnClick(event, category)}
        >
          Me shume
        </button>
      </div>
    </div>
  ));
  return (
    <div className="main-content" onClick={() => {}}>
      <div className="row search-container  align-items-center justify-content-center">
        <input
          className="form-control col-md-6 col-md-4 col-md-3 mr-sm-2"
          type="search"
          placeholder="Shkruaj kategorine.."
          aria-label="Search"
          onChange={(event) => handleSearch(event.target.value)}
        />
      </div>
      {CategoriesList}
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

export default Categories;
