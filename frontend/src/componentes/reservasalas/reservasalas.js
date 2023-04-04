import React from 'react';
import {
  Button,
  Container, 
  Form 
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import {FaWhatsapp } from 'react-icons/fa';

function ReservaSalass() {
  return (

    <Container fluid>
     <div className='reservasalas'>
     
     <Form>
        <Form.Select>
            <option>AAAA</option>
            <option>AAAA</option>
            <option>AAAA</option>
            <option>AAAA</option>
        </Form.Select>
        <Form.Label>dia</Form.Label>
        <Form.Control id='dia' type='date'/>
        
        <Form.Label>dia</Form.Label>
        
        <Form.Control id='horaini' type='time'/>
        
        <Form.Label>dia</Form.Label>
        
        <Form.Control id='horafim'  type='time'/>

     </Form>

     </div>
     
   
    </Container>
  );


}

export default ReservaSalass;