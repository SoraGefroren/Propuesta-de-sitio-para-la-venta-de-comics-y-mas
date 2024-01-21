import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-2 custom-footerbar">
      <div className="container text-center mt-2">
        <div className="mb-3">
          <a href="https://www.facebook.com/" target="_blank"
             rel="noopener noreferrer" className="text-light me-3">
            <FontAwesomeIcon icon={faFacebook} size="1x" />
          </a>
          <a href="https://twitter.com/" target="_blank"
             rel="noopener noreferrer" className="text-light me-3">
            <FontAwesomeIcon icon={faTwitter} size="1x" />
          </a>
          <a href="https://www.instagram.com/" target="_blank"
             rel="noopener noreferrer" className="text-light me-3">
            <FontAwesomeIcon icon={faInstagram} size="1x" />
          </a>
        </div>
        <p>
            &copy;{new Date().getFullYear()} Tienda para Comikeros - Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
