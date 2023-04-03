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
import clientesService from '../services/clientesService';


function Salas() {
  const location = useLocation();
  const classBtn = location.state.classe;
  const { id } = useParams();
  const [cliente, setFormData] = useState({});
  const history = useNavigate();
  
  useEffect(() => {
      async function fetchFormData () {
      
      try {        
        //const response = await axios.get(`http://localhost:5000/api/clientes/${id}`);
        const response = await clientesService.getOneCliente(id);
        setFormData(response.data);
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
          alert(id);
          if (id === ":id") {
              //await axios.post('http://localhost:5000/api/clientes/',cliente );
              await clientesService.createClientes(cliente);
              alert('incluido com sucesso!'); 
          }
          else {
              //await axios.put(`http://localhost:5000/api/clientes/${id}`,cliente);
              await clientesService.updateClientes(id, cliente)
              alert('alterado com sucesso!');
          }
        }
      } catch (error) {
        console.error(error);
      }
      history(-1);
    }

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...cliente, [name]: value });
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
              <Form.Control type="text" name="nome" value={cliente.nome} onChange={handleChange}/>
              <Form.Label>CPF:</Form.Label>
              <Form.Control type="text" name="cpf" value={cliente.cpf} onChange={handleChange}/>
              <Form.Label>CEP:</Form.Label>
              <Form.Control type="text" name="cep" value={cliente.cep} onChange={handleChange}/>
              <Form.Label>Email:</Form.Label>
              <Form.Control type="text" name="email" value={cliente.email} onChange={handleChange}/>
              <Form.Label>Telefone:</Form.Label>
              <Form.Control type="text" name="telefone" value={cliente.telefone} onChange={handleChange}/>
              
              <Row>
                <Form.Control type='submit' value="salvar" name="salvar" className={classBtn}/>
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