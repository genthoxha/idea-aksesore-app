import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import AddProductModal from "./AddProductModal";

const AddProduct = () => {
  const [isModalOpen, openModal] = useState(false);

  const handleModal = (isOpened: boolean) => {
      openModal(isOpened);
  }
  return (
    <div className="row flex-row">
      <div
        id="modal"
        className="col-md-3 h-50 product-grid align-self-center"
        onClick={() => openModal(!isModalOpen)}
      >
        <FontAwesomeIcon
          size="5x"
          icon={faPlusSquare}
          color="grey"
          className="w-100"
        />
        Shto Produktin
      </div>
      <AddProductModal isModalVisible={handleModal} />
    </div>
  );
};
export default AddProduct;
