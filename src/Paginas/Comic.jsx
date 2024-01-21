import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Helper } from '../Shared/Helper';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Model3D from '../Components/Model3D';

const Comic = () => {
  // Obtén el parámetro dinámico
  const { ide } = useParams();
  const articulos = Helper.articulos;
  const generarLoremIpsum = Helper.generarLoremIpsum;
  const generarNumeroRandom = Helper.generarNumeroRandom;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 8,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
    ],
  };
  // Comentarios autogenerados
  const generateComments = () => {
    const comments = [];
    for (let i = 1; i <= 5; i++) {
      comments.push({
        id: i,
        username: `Usuario${i}`,
        content: generarLoremIpsum(10),
        date: new Date().toLocaleString(),
      });
    }
    return comments;
  };
  return (
    <div>
        <Header></Header>
        <div style={{maxHeight: '350px', zIndex: "0", position: ""}}>
            <div style={{position:'relative'}}>
                <div className="d-flex align-items-center h-100 custom-item">
                    <img
                        alt="Imagen"
                        className="d-block w-100 img-fluid"
                        src="/Imagenes/CCrOtBoHJq6B2Gl_7rGuM.png"
                    />
                </div>
            </div>
        </div>
        <div className="mt-2 mx-2" style={{zIndex: "1", position: "relative"}}>
            <Card>
                <Card.Header>
                    <h3>
                        Articulo: {generarLoremIpsum().split(' ').slice(0, 2).join(' ')}
                    </h3>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col md={6}>
                            <Card>
                                <Card.Img variant="top" src={"/comics/9b476982-cd27-487e-b3ff-7e552ee36f3c.png"} alt={''} />
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>
                                        {generarLoremIpsum().split(' ').slice(0, 2).join(' ')}
                                    </Card.Title>
                                    <Card.Text>
                                        <p className='text-justify'>
                                            {generarLoremIpsum(10)}
                                        </p>
                                    </Card.Text>
                                    <Card.Text>
                                        <Model3D modelSrc={"/3d/che/scene.gltf"}/>
                                    </Card.Text>
                                    <Card.Text>${generarNumeroRandom(100, 1000)}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <div className='d-flex pb-2 justify-content-end'>
                                        <Button variant="primary">
                                            Agregar al carrito <FontAwesomeIcon icon={faShoppingCart} />
                                        </Button>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <Button variant="primary">
                                            Comprar ahora <FontAwesomeIcon icon={faDollarSign} />
                                        </Button>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
        <div className="mt-2 mx-2" style={{zIndex: "1", position: "relative"}}>
            <Card className='pb-3'>
                <Card.Header>
                    <h5>Novedades</h5>
                </Card.Header>
                <Card.Body>
                    <Slider {...settings}>
                        {articulos.map((articulo, idx) => (
                            <Link to={"/comic/" + (idx + 1)}>
                                {articulo.type == '3d'? (
                                        <Model3D modelSrc={articulo.link}/>
                                    ) : (
                                        <img
                                            src={articulo.link}
                                            alt={articulo.title}
                                            style={{ maxWidth: '100px', height: 'auto' }}
                                        />
                                    )
                                }
                            </Link>
                        ))}
                    </Slider>
                </Card.Body>
            </Card>
        </div>
        <div className="my-2 mx-2" style={{zIndex: "1", position: "relative"}}>
            <Card>
                <Card.Header>
                    <h5>Comentarios</h5>
                </Card.Header>
                <Card.Body>
                    <div className="container mt-4">
                        <ul className="list-group">
                            {generateComments().map(comment => (
                                <li key={comment.id} className="list-group-item">
                                    <div className="comment">
                                        <strong>{comment.username}</strong>
                                        <p>{comment.content}</p>
                                        <small>{comment.date}</small>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Card.Body>
            </Card>
        </div>
        <Footer>
        </Footer>
    </div>
  );
};

export default Comic;
