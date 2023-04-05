import './reset.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Row, Container } from 'react-bootstrap';
import Cabecalho from '../componentes/Cabecalho/cabecalho';
import Carousel from '../componentes/Carousel/Carousel'
import Footer from '../componentes/Footer/Footer'
import Reserva from '../componentes/reservasalas/reservasalas'
import './style.css'
function ReservaSalas() {
  return (
    
   
    <Container className='HomeContainer'>
      <div className='HomeBody'>
        <Cabecalho/>
        <Reserva/>


    
     
      </div>
      <Footer/>
    </Container>
      )
      };

export default ReservaSalas;

