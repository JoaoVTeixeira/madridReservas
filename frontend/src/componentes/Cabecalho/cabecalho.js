import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container } from 'react-bootstrap';
import './styleCabecalho.css'
import Logo from '../Logo/Logo'
import NavOptions from '../Opcoes/Opcoes'

function Cabecalho() {
  
  return (

        <Container className="Cabecalho" fluid>
            
                     
              <Logo/>
              <NavOptions></NavOptions>
                
        </Container>          
  );
}

export default Cabecalho;