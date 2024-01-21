import React from 'react';
import { Link } from 'react-router-dom';
import { Helper } from '../Shared/Helper';
import { Carousel, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

function Carrusel() {
  const generarLoremIpsum = Helper.generarLoremIpsum;
  return (
     <Carousel style={{maxHeight: '350px'}}>
      <Carousel.Item>
        <div className="d-flex align-items-center h-100 custom-item">
          <img
            alt="Imagen"
            className="d-block w-100 img-fluid"
            src="/imagenes/OCbVA2ySCvGcDNsvvKMrJ.png"
          />
        </div>
        <Carousel.Caption>
          <Link className='custom-title' to={"/comic/" + 1}>
            <h3>
              { generarLoremIpsum().split(' ').slice(0, 2).join(' ') }
            </h3>
          </Link>
          <p className='custom-description' style={{zIndex:'1'}}> { generarLoremIpsum(5) } </p>
          <div className='w-100'>
              <div className='d-flex justify-content-end'>
                  <Link to={"/comic/" + 2} style={{zIndex:'1'}}>
                      <Button variant="primary">
                        {'Conocer más '}
                        <FontAwesomeIcon icon={faEye} />
                      </Button>
                  </Link>
              </div>
          </div>
        </Carousel.Caption>
     </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex align-items-center h-100 custom-item">
          <img
            alt="Imagen"
            className="d-block w-100 img-fluid"
            src="/imagenes/rSzNIZkPXLYsH-QHdCSmi.png"
          />
        </div>
        <Carousel.Caption>
          <Link className='custom-title' to={"/comic/" + 2}>
            <h3>
              { generarLoremIpsum().split(' ').slice(0, 2).join(' ') }
            </h3>
          </Link>
          <p className='custom-description' style={{zIndex:'1'}}> { generarLoremIpsum(3) } </p>
          <div className='w-100'>
              <div className='d-flex justify-content-end'>
                  <Link to={"/comic/" + 2} style={{zIndex:'1'}}>
                      <Button variant="primary">
                        {'Conocer más '}
                        <FontAwesomeIcon icon={faEye} />
                      </Button>
                  </Link>
              </div>
          </div>
        </Carousel.Caption>
     </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex align-items-center h-100 custom-item">
          <img
            alt="Imagen"
            className="d-block w-100 img-fluid"
            src="/imagenes/TYKfvDM8MJN-hnC33GMGV.png"
          />
        </div>
        <Carousel.Caption>
          <Link className='custom-title' to={"/comic/" + 2}>
            <h3>
              { generarLoremIpsum().split(' ').slice(0, 2).join(' ') }
            </h3>
          </Link>
          <p className='custom-description' style={{zIndex:'1'}}> { generarLoremIpsum(2) } </p>
          <div className='w-100'>
              <div className='d-flex justify-content-end'>
                  <Link to={"/comic/" + 2} style={{zIndex:'1'}}>
                      <Button variant="primary">
                        {'Conocer más '}
                        <FontAwesomeIcon icon={faEye} />
                      </Button>
                  </Link>
              </div>
          </div>
        </Carousel.Caption>
     </Carousel.Item>
   </Carousel>
  );
}

export default Carrusel;