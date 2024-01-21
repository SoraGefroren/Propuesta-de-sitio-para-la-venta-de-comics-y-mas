import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Card, Button } from 'react-bootstrap';
import Model3D from './Model3D';

const Articulo = ({ type, title, description, imageSrc, price, link }) => {
  return (
    <>
      <Card className='w-100'>
        <Link className='custom-link' to={link}>
          {type == '3d'? (
              <Model3D modelSrc={imageSrc}/>
            ) : (
              <Card.Img variant="top" src={imageSrc} alt={title} className="img-fluid" />
            )
          }
        </Link>
        <Card.Body>
          <Link className='custom-link' to={link}>
            <Card.Title className='text-dark'>{title}</Card.Title>
            <Card.Text className='text-dark'>{description}</Card.Text>
            <Card.Text className='text-dark'>
              ${price}
            </Card.Text>
          </Link>
        </Card.Body>
        <Card.Footer>
          <div className='d-flex pb-2 justify-content-end'>
            <Button variant="primary">
                Agregar al carrito <FontAwesomeIcon icon={faShoppingCart} />
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </>
  );
};

export default Articulo;
