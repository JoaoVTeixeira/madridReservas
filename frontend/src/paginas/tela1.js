import './reset.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import {  Row, Container } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import './style.css'
function TelaUm() {
  return (
    
   
    <Container className='HomeContainer'>
      <div className='HomeBody'>
       <Link to={'/login'}><button>LOGIN</button></Link>

       <Link to={'/cadastro'}><button>Cadastro</button></Link>
      </div>
    </Container>
      )
      };

export default TelaUm;

