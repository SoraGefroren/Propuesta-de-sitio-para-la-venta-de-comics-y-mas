import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button, Form } from 'react-bootstrap';
import { Helper } from '../Shared/Helper';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faTrash  } from '@fortawesome/free-solid-svg-icons';

function Carrito() {
  const articulosDelCarrito = Helper.articulos.slice(5, 15);
  const totalDelCarrito = (articulosDelCarrito.reduce((total, articulo) => total + (articulo.cantidad * articulo.price), 0)).toFixed(2);
  return (
    <div>
      <Header/>
      <div className="my-3 mx-5" style={{zIndex: "1", position: "relative"}}>
        <h1>Carrito de Compras</h1>
        <div className="table-responsive">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th style={{width: '200px', maxWidth: "200px"}}>Cantidad</th>
                        <th style={{width: '150px', maxWidth: "150px"}}>Total</th>
                        <th style={{width: '100px', maxWidth: "100px !important"}}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {articulosDelCarrito.map((articulo, index) => (
                        <tr key={index}>
                            <td>
                                <img src={articulo.link} alt={articulo.title} style={{ width: '50px', height: '50px' }} />
                                <p className='pt-1 pb-0 mb-0'>{articulo.title}</p>
                            </td>
                            <td className='d-flex align-items-center'>
                                <Button variant="secondary">
                                    <FontAwesomeIcon icon={faArrowUp} />
                                </Button>
                                <Form.Control type="text" disabled value={articulo.cantidad} className='mx-2 px-2' />
                                <Button variant="secondary">
                                    <FontAwesomeIcon icon={faArrowDown} />
                                </Button>
                            </td>
                            <td>${articulo.price}</td>
                            <td>
                                <Button variant="danger">
                                    <FontAwesomeIcon icon={faTrash} />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={2} className='text-end'>
                            <strong>Total:</strong>
                        </td>
                        <td colSpan={2}>
                            <p className='pt-1 pb-0 mb-0'>
                                <strong>${totalDelCarrito}</strong>
                            </p>
                        </td>
                    </tr>
                </tfoot>
            </Table>
        </div>
        <div className='w-100'>
            <div className='d-flex justify-content-end'>
                <Link to="#">
                    <Button variant="success">
                        Proceder al Pago
                    </Button>
                </Link>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Carrito;