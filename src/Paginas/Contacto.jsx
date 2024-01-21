import React from 'react';
import { Container, Button, Form, Row, Col } from 'react-bootstrap';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Contacto() {
  return (
    <div>
      <Header/>
      <div className="my-3 mx-5" style={{zIndex: "1", position: "relative"}}>
        <div>
            <Container className="my-5">
                <h1>Contacto</h1>
                <Row className="mt-4">
                    <Col md={6}>
                        <h5>
                            Información de Contacto
                        </h5>
                        <p>
                            Puedes contactarnos a través de los siguientes medios:
                        </p>
                        <p>
                            <strong>Email:</strong> info@fake.com
                        </p>
                        <p>
                            <strong>Teléfono:</strong> +52 22123 456 789
                        </p>
                        <p>
                            <strong>Dirección:</strong> Calle Secundaria #566, Ciudad de Xalapa, Ver.
                        </p>
                        <hr/>
                        <p>
                            O, enviamos un mensaje...
                        </p>
                    </Col>
                    <Col md={6}>
                        <Form>
                            <Form.Group className="mb-3" controlId="Nombre">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese su nombre" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="Email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Ingrese su email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="Mensaje">
                                <Form.Label>Mensaje</Form.Label>
                                <Form.Control as="textarea" rows={4} placeholder="Ingrese su mensaje" />
                            </Form.Group>
                            <div className='w-100'>
                                <div className='d-flex justify-content-end'>
                                    <Button variant="primary" type="submit">
                                        Enviar
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Contacto;