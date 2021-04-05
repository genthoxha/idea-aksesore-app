import React from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import ModalFooter from "react-bootstrap/ModalFooter";

type AddProductModalProps = {
  isModalVisible: (isOpened: boolean) => void;
};
const AddProductModal: React.FC<AddProductModalProps> = ({ isModalVisible }) => {
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
                {" "}
                <input type="text" onChange={(event) => {}} />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group controlId="categoryImage">
            <Row>
              <Col>
                <div>
                  <label htmlFor="uploadCategory">Foto</label>
                  <FontAwesomeIcon
                    className="ml-4"
                    size="2x"
                    icon={faImages}
                    color="grey"
                  />
                  <input
                    id="uploadCategory"
                    style={{ display: "none" }}
                    type={"file"}
                    onChange={() => {}}
                  />
                </div>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </Modal.Body>
      <ModalFooter>
        <Button variant="secondary" onClick={() => {}}>
          Close
        </Button>
        <Button variant="primary" onClick={() => {}}>
          Save Changes
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddProductModal;
