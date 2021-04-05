import React, { useContext, useState } from "react";
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavItem,
  Button,
  Modal,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/idea-logo.png";
import "../style.css";
import { CardContext } from "../context/CardContext";
import { CardModal } from "../cardModal/CardModal";

const Header = () => {
  const [isCardModalOpen, openCard] = useState<boolean>(false);
  const cardContext = useContext(CardContext);

  return (
    <div className="container-fluid">
      <Navbar bg="bg" expand="lg">
        <NavbarBrand as={Link} to="/">
          <img
            id="logo1"
            src={logo}
            width="390"
            height="300"
            className="d-inline-block align-top"
            alt="React logo"
          />
        </NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav fill variant="tabs" className="justify-content-center">
            <NavItem className="experiment">
              <Nav.Link as={Link} to="/">
                Ballina
              </Nav.Link>
            </NavItem>
            <NavItem className="experiment">
              <Nav.Link as={Link} to="/fair">
                Panairi
              </Nav.Link>
            </NavItem>
            <NavItem className="experiment">
              <Nav.Link as={Link} to="/video">
                Video
              </Nav.Link>
            </NavItem>
            <NavItem className="experiment">
              <Nav.Link as={Link} to="/location">
                Lokacioni
              </Nav.Link>
            </NavItem>
            <NavItem className="experiment">
              <Nav.Link as={Link} to="/info">
                Per ne..
              </Nav.Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
        <Nav className="justify-content-end ">
          <NavItem>
            <Nav.Link as={Link} to="/products" className="navbar-right" >
              <span className="mr-4 text-info font-weight-bold font-weight-bolder">
                {cardContext.products.length !== 0 && cardContext.products.length}
              </span>
              <span className="mr-2" >
                <FontAwesomeIcon
                  icon={faCartPlus}
                  onClick={() => openCard(true)}
                />
              </span>
              <h4 className="m-0 p-0 hover:active " onClick={() => openCard(true)}>Shporta</h4>
              <Modal
                size="xl"
                show={isCardModalOpen}
                onHide={() => openCard(false)}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Shporta</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <CardModal  />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={() => openCard(false)}>
                    Anulo
                  </Button>
                  <Button variant="primary" onClick={() => openCard(false)}>
                    Bej Porosine
                  </Button>
                </Modal.Footer>
              </Modal>
            </Nav.Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
