import React, { useContext } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import ModalFooter from "react-bootstrap/ModalFooter";
import { CategoryContext } from "../context/CategoryContext";
import { Category } from "../pages/admin/CategoriesAdmin";
import { v4 as uuidv4 } from "uuid";

type AddCategoryModalType = {
  isModalVisible: boolean;
  onClose: () => void;
  onSave: () => void;
};

const AddCategoryModal: React.FC<AddCategoryModalType> = ({
  isModalVisible,
  onClose,
  onSave,
}) => {
  const categoryContext = useContext(CategoryContext);

  const [categoryName, setCategoryName] = React.useState<string>("");
  const [categoryImage, setCategoryImage] = React.useState("");

  React.useEffect(() => {
    console.log("Init phase: ", categoryContext);
  }, []);

  const handleOnSave = () => {
    const newCategory: Category = {
      id: uuidv4(),
      name: categoryName,
      image: categoryImage,
    };
    categoryContext.setCategories([...categoryContext.categories, newCategory]);
    onSave();
    console.log("Category context: ", categoryContext);
  };

  const uploadCategoryImage = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setCategoryImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const getBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  return (
    <Modal show={isModalVisible}>
      <Modal.Header closeButton>
        <Modal.Title>Shto kategorine</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="category" className="space-between">
            <Row>
              <Col>
                <Form.Label>Emri i kategorise</Form.Label>
              </Col>
              <Col>
                <input
                  type="text"
                  onChange={(event) => setCategoryName(event.target.value)}
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group controlId="categoryImage">
            <Row>
              <Col>
                <div>
                  <label htmlFor="uploadCategory">Foto</label>
                  <input
                    id="uploadCategory"
                    type={"file"}
                    name="imageFile"
                    onChange={uploadCategoryImage}
                  />
                </div>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </Modal.Body>
      <ModalFooter>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => handleOnSave()}>
          Save Changes
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddCategoryModal;
