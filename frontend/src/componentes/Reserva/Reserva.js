import React from 'react';
import {
  Button,
  Container
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import {FaWhatsapp } from 'react-icons/fa';
import './whats.css'
import './style.css'

function Reserva() {
  return (

    <Container fluid className='botaoContainer'>
     <div className='botao'>
     <Link to="/reservasalas" class="bn13">RESERVAS ABERTAS</Link>

     </div>
     
   
    </Container>
  );


}

export default Reserva;