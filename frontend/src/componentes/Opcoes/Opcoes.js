
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroupItem, Col } from 'react-bootstrap';
import './style.css'
import { Link } from 'react-router-dom';



function opcoes (){
  return (
    
    <ul className='opcoes'>
        
          <Link to={"/"} ><ListGroupItem className='opcao' >HOME</ListGroupItem></Link>
          <Col sm={1}/>
          <Link to={'/contatos'}><ListGroupItem className='opcao'>CONTATOS</ListGroupItem></Link>
          <Col sm={1}/>
          <Link to={'/index'}><ListGroupItem className='opcao'>LOGIN</ListGroupItem></Link>
  
      
    </ul>

  
  );
}

export default opcoes;