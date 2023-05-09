import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Cabecalho from '../componentes/Cabecalho/cabecalho';
import Footer from '../componentes/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import '../componentes/Cabecalho/styleCabecalho.css'
import './form.css'


function Salas() {
  const location = useLocation();
  //const classBtn = location.state.classe;
  const { id } = useParams();
  const [usuario, setFormData] = useState({});
  const history = useNavigate();
  
  useEffect(() => {
      async function fetchFormData () {
      
      try {        
        //const response = await axios.get(`http://localhost:5000/api/usuarios/${id}`);
        //const response = await usuariosService.getOneusuario(id)
        //setFormData(response.data);
      } catch (error) {
        console.error(error);
      }
  
      };
      fetchFormData();
    },[id]); 

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        
        //const id = event.target._id.value;
        if (event.nativeEvent.submitter.name === "salvar") {
        
                await axios.post('http://localhost:5000/users/cadastrar/',usuario );
                alert('incluido com sucesso!'); 
         
        }
      } catch (error) {
        console.error(error);
      }
  //    history(-1);
    }

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...usuario, [name]: value });
    };
  


  return (    

    
    <Container className='HomeContainer' >
    <div className='HomeBody'>
      <Row>
        <Cabecalho /> 
      </Row>
     
   
     <Container className='salaDadosContainer' >
        <Row className='salaDados'>
        
          <Form onSubmit={handleSubmit} className='formSalas'>
            <Container fluid className='campos'>
                <Form.Label>Nome:</Form.Label>
              <Form.Control type="text" name="nome" value={usuario.nome} onChange={handleChange}/>
          
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" name="email" value={usuario.email} onChange={handleChange}/>
             
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" name="senha" value={usuario.funcao} onChange={handleChange}/>
              <Row>
                <Form.Control type='submit' value="salvar" name="salvar" />
              </Row>
              </Container>

             

          </Form>
     
        </Row>   
      </Container>
          

        <div className='FooterSalas'>
        <Footer />
        </div>
      </div>
   

    </Container>
  );
}

export default Salas;