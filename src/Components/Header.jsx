import React, { useState } from 'react';
import logo from './../logo.svg';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch, faUser, faCog, faCancel, faSignInAlt, faColonSign } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Container, Nav, Button, Form, FormControl, Dropdown, Modal } from 'react-bootstrap';

function Header() {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const userInPageBase = location.pathname === '/' || location.pathname === '/home';

  const handleLoginClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark" className='custom-navbar'>
      <Container fluid>
        <Navbar.Brand href="/">
          <FontAwesomeIcon icon={faColonSign} className="d-inline-block align-top custom-imagen"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link href="/" className="text-light">Inicio</Nav.Link>
            <Nav.Link href="/contacto" className="text-light">Contacto</Nav.Link>
          </Nav>
          <Nav className="order-md-center">
            <Dropdown className="d-md-block d-lg-none">
              <Dropdown.Toggle variant="outline-none text-light px-0 mx-0">
                {'Iniciar sesión '}
                <FontAwesomeIcon icon={faUser} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={handleLoginClick}>
                  <FontAwesomeIcon icon={faSignInAlt} /> Iniciar sesión
                </Dropdown.Item>
                <Dropdown.Item>
                  <FontAwesomeIcon icon={faCog} /> Configuración
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link href="/carrito-de-compras" className="text-light d-md-block d-lg-none">
              {'Carrito de compras '}
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="badge">42</span>
            </Nav.Link>
            <Dropdown className="d-none d-lg-block text-light">
              <Dropdown.Toggle variant="outline-light">
                <FontAwesomeIcon icon={faUser} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={handleLoginClick}>
                  <FontAwesomeIcon icon={faSignInAlt} /> Iniciar sesión
                </Dropdown.Item>
                <Dropdown.Item>
                  <FontAwesomeIcon icon={faCog} /> Configuración
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Link to={"/carrito-de-compras"} className='text-light d-none d-lg-block mx-2'>
              <Button variant="outline-light">
                <FontAwesomeIcon icon={faShoppingCart}/>
                <span className="badge">42</span>
              </Button>
            </Link>
          </Nav>
          <Form className={`${userInPageBase ? 'd-none' : 'd-flex'}`}>
            <FormControl
              type="search"
              placeholder="Buscar"
              aria-label="Buscar"
              className="mr-2"
            />
            <Button variant="outline-light">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='d-flex justify-content-center'>
              <img src={logo} width="150" height="150"/>
          </div>
          <Form className="">
            <label>
              Usuario
            </label>
            <FormControl
              type="text"
              placeholder="Usuario"
              aria-label="Usuario"
              className="mr-2 mb-2"
            />
            <label>
              Constraseña
            </label>
            <FormControl
              type="password"
              placeholder="Constraseña"
              aria-label="Constraseña"
              className="mr-2"
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
            <div className='d-flex justify-content-end'>
                <Button variant="danger" className='mx-3' onClick={handleCloseModal}>
                  <div className='d-flex align-items-center'>
                      <span className='d-none d-lg-block mx-2'>
                        Cerra sesión
                      </span>
                      <FontAwesomeIcon icon={faCancel} />
                  </div>
                </Button>
                <Button variant="success">
                    <div className='d-flex align-items-center'>
                        <span className='d-none d-lg-block mx-2'>
                          Iniciar sesión
                        </span>
                        <FontAwesomeIcon icon={faSignInAlt} />
                    </div>
                </Button>
            </div>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
}

export default Header;