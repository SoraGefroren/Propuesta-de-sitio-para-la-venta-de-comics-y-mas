import React from 'react';
import 'rc-slider/assets/index.css'
import { Navbar, Row, Col, Form, FormControl, Button, Container } from 'react-bootstrap';

const Filtro = ({}) => {
    return (
        <Navbar bg="dark" variant="dark" className='mb-3 custom-filterbar'>
            <Container fluid>
                <Form className='w-100'>
                    <Row className="w-100 justify-content-center align-items-center">
                        <Col md={3} className="mb-2 mb-md-0">
                            <FormControl
                                type="text"
                                placeholder="Buscar"
                                className="mr-2"
                                name="Buscar" />
                        </Col>
                        <Col md={2} className="mb-2 mb-md-0">
                            <Form.Control
                                as="select"
                                className="mr-2"
                                name="Categoria" >
                                <option value="">Todos los Artículos</option>
                                <option value="libros">Libros</option>
                                <option value="ropa">Ropa</option>
                            </Form.Control>
                        </Col>
                        <Col md={3} className="mb-2 mb-md-0">
                            <Row>
                                <Col sm={5} className="col-4 pr-0">
                                    <Form.Control type='number' className='w-100'/>
                                </Col>
                                <Col sm={2} className="col-4 px-0 text-center">
                                    <label className="text-light pt-1">
                                        {'<$<'}
                                    </label>
                                </Col>
                                <Col sm={5} className="col-4 pl-0">
                                    <Form.Control type='number' className='w-100'/>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={2} className="mb-2 mb-md-0">
                            <Form.Control
                                type="date"
                                name="fechaPublicacion" />
                        </Col>
                        <Col md={1}>
                            <div className='align-items-end'>
                                <Button variant="outline-light">
                                    Filtrar
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </Navbar>
    );
};

export default Filtro;
