import React, { useState } from 'react';
import { Row, Col, Pagination } from 'react-bootstrap';
import { Helper } from '../Shared/Helper';
import Header from '../Components/Header';
import Filtro from '../Components/Filtro';
import Carrusel from '../Components/Carrusel';
import Articulo from '../Components/Articulo';
import Footer from '../Components/Footer';

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const articulos = Helper.articulos;
  let myPage = currentPage || 0;
  const articulosPorPag = 10;
  const lastItem = myPage * articulosPorPag;
  const firstItem = lastItem - articulosPorPag;
  const articulosEnPagina = articulos.slice(firstItem, lastItem);
  const actualizarPagina = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <Header/>
      <Carrusel/>
      <div className="my-3 mx-5" style={{zIndex: "1", position: "relative"}}>
        <Filtro/>
        <Row xs={1} sm={2} md={3} lg={5} className="g-5">
          {articulosEnPagina.map((articulo, idx) => (
            <Col key={idx}>
              <Articulo type={articulo.type}
                        imageSrc={articulo.link}
                        description={articulo.description}
                        price={articulo.price} title={articulo.title}
                        link={"/comic/" + idx}>
              </Articulo>
            </Col>
          ))}
        </Row>
        <Pagination className="w-100 my-3 d-flex justify-content-center">
          <Pagination.Prev onClick={() => actualizarPagina(myPage - 1)}
                           disabled={myPage === 1} />
          {[...Array(Math.ceil(articulos.length / articulosPorPag)).keys()].map((number) => (
            <Pagination.Item key={number + 1} active={number + 1 === myPage}
                             onClick={() => actualizarPagina(number + 1)}>
              {number + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next onClick={() => actualizarPagina(myPage + 1)}
                           disabled={myPage === Math.ceil(articulos.length / articulosPorPag)} />
        </Pagination>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;