import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Navbar } from 'react-bootstrap';

function Cabecalho({nome,descricao,imgsrc}) {
  
  return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                    alt=""
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTR41_tX4XM8TgLHIXNChQIFdCdhcuYsKlSg&usqp=CAU"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    
                </Navbar.Brand>
            </Container>
      </Navbar>
  );
}

export default Cabecalho;