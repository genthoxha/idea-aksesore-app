import React, { useContext } from "react";
import "./CategoriesAdmin.css";
import { useHistory } from "react-router";
import AddCategoryModal from "../../category/AddCategoryModal";
import { categories } from "../../../utils/DummyData";
import { CategoryContext } from "../../context/CategoryContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export type Category = {
  id: string;
  name: string;
  image: string;
};

const CategoriesAdmin = () => {
  const history = useHistory();
  const categoryContext = useContext(CategoryContext);
  const [allCategories, setAllCategories] = React.useState<Category[]>([]);
  const [search, setSearch] = React.useState<string>("");
  const [isAddCategoryModalVisible, openAddCategory] = React.useState(false);
  const handleOnClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    category: any
  ) => {
    event.preventDefault();
    console.log("Event: ", category);
    history.push("/products");
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

  const handleOnDeleteCategory = (category: Category) => {
    const newCategories: Category[] = categoryContext.categories.filter((p) => {
      return p.id !== category.id;
    });
    categoryContext.setCategories(newCategories);
  };

  const handleSearch = (word: string) => {
    setSearch(word);
    setAllCategories(
      categoryContext.categories.filter((category) => {
        return category.name === search;
      })
    );

    console.log("All categories: ", allCategories);
  };

  const CategoriesList = allCategories.map((category, key) => (
    <div className="border col-md-2 border-info m-2 rounded " key={key}>
      <div className="d-flex flex-column flex-wrap">
        <h4 className="mt-5 card-title text-center">{category.name}</h4>
        <img
          className=" rounded  mx-auto d-block category-img"
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
        <div className={"product-categories-container"}>
          Fshij Kategorin
          <FontAwesomeIcon
            className="fa-trash-icon"
            color="info"
            size={"lg"}
            icon={faTrash}
            onClick={() => handleOnDeleteCategory(category)}
          />
        </div>
      </div>
    </div>
  ));
  return (
    <div className="main-content" onClick={() => {}}>
      <input
        className="form-control col-md-5 col-md-4 col-md-3 mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(event) => handleSearch(event.target.value)}
      />
      <button
        type="button"
        className="btn btn-info col-md-5 col-md-4 col-md-3 m-3 p-10"
        onClick={() => openAddCategory(true)}
      >
        Shto Kategorin
      </button>

      <AddCategoryModal
        isModalVisible={isAddCategoryModalVisible}
        onClose={() => openAddCategory(false)}
        onSave={() => openAddCategory(false)}
      />
      {CategoriesList}
    </div>
  );
};

export default CategoriesAdmin;
