import './reset.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Row, Container } from 'react-bootstrap';
import Cabecalho from '../componentes/Cabecalho/cabecalho';
import Carousel from '../componentes/Carousel/Carousel'
import Footer from '../componentes/Footer/Footer'
import Reserva from '../componentes/Reserva/Reserva'
import './style.css'
function Home() {
  return (
    
   
    <Container className='HomeContainer'>
      <div className='HomeBody'>
        <Cabecalho/>
        <Row sm={10}>
          <br></br>
        </Row>
        <Carousel/>
        
        <Reserva/>
    
      <div className='FooterHome'>
        <Footer/>
        </div>
      </div>
    </Container>
      )
      };

export default Home;

