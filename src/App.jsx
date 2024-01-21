import React, { useEffect } from 'react';
import Home from './Paginas/Home';
import Comic from './Paginas/Comic';
import Carrito from './Paginas/Carrito';
import Contacto from './Paginas/Contacto';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  useEffect(() => {
    // document.title = 'Propuesta de sitio para la venta de comics y más';
    return () => {
      document.title = 'Propuesta de sitio para la venta de comics y más'; 
    };
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comic/:ide" element={<Comic />} />
        <Route path="/carrito-de-compras" element={<Carrito />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
};

export default App;
