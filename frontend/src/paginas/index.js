import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link, useParams } from "react-router-dom";
import Cabecalho from '../componentes/Cabecalho/cabecalho';
import Footer from '../componentes/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import '../componentes/Cabecalho/styleCabecalho.css'
import Func from './func.png'
import Room from './room.png'

function intranet() {
    
    return (

        <Container className='HomeContainer'>
            <Row>
                <Cabecalho /> 
            </Row>
            <Container className='IntraBody' fluid>
                <Container fluid className='ImgsContainer'>
                    <Container className='ImagesRow1Container'>
                    
                        <div className='imgIndividual'><Link to={'/clientes'}><Image className='IntraImg' src='https://images.endeavor.org.br/uploads/2016/07/relacionamento-cliente.png'/></Link></div>          
                        <div className='imgIndividual'><Link to={'/funcionarios'}><Image className='IntraImg' src='https://www.tonyloureiro.com.br/wp-content/uploads/motivar-o-funcionario-6-dicas-que-vao-alem-do-aumento-salarial-1.jpeg'/></Link></div>    

                    </Container>
                    <Container className='ImagesRow2Container'>                
        
                  
                    <div className='imgIndividual'><Link to={'/salas'}><Image className='IntraImg' src='https://img.freepik.com/fotos-gratis/interior-de-espaco-de-escritorio-moderno_158595-5206.jpg'/></Link></div>
                        <Col sm={5}/>
                    <div className='imgIndividual'><Link to={'/salas'}><Image className='IntraImg' src='https://api.wbez.org/v2/images/24317c24-d438-41d3-876b-ba0eb98aa8b3.jpg?width=900&height=609&mode=FILL'/></Link></div>
                    </Container>
               </Container>

                <Row>

                </Row>
            </Container>

            <div className='FooterIntranet'>
                 <Footer />
            </div>
        </Container>
    
    );
  
}
  export default intranet;