import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Card, Button } from 'react-bootstrap';
import Model3D from './Model3D';

const Articulo = ({ type, title, description, imageSrc, price, link }) => {
  return (
    <Link to={link}>
      <Card className='w-100'>
        {type == '3d'? (
            <Model3D modelSrc={imageSrc}/>
          ) : (
            <Card.Img variant="top" src={imageSrc} alt={title} className="img-fluid" />
          )
        }
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>
            ${price}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <div className='d-flex pb-2 justify-content-end'>
            <Button variant="primary">
                Agregar al carrito <FontAwesomeIcon icon={faShoppingCart} />
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </Link>
  );
};

export default Articulo;
