import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Cabecalho from '../componentes/Cabecalho/cabecalho';
import Footer from '../componentes/Footer/Footer'
import salasService from '../services/salasService';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import '../componentes/Cabecalho/styleCabecalho.css'
import './form.css'


function Salas() {
  const location = useLocation();
  const classBtn = location.state.classe;
  const { id } = useParams();
  const [sala, setFormData] = useState({});
  const history = useNavigate();
  
  useEffect(() => {
      async function fetchFormData () {
      
      try {        
        //const response = await axios.get(`http://localhost:5000/api/salas/${id}`);
        const response = await salasService.getOneSalas(id)
        
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
              //await axios.post('http://localhost:5000/api/salas/',sala );
              await salasService.createSalas(sala)
              alert('incluido com sucesso!'); 
          }
          else {
              //await axios.put(`http://localhost:5000/api/salas/${id}`,sala );
              await salasService.updateSalas(id, sala)
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
      setFormData({ ...sala, [name]: value });
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
                <Form.Label>Numero:</Form.Label>
              <Form.Control type="text" name="numero" value={sala.numero} onChange={handleChange}/>
              <Form.Label>Tipo:</Form.Label>
              <Form.Control type="text" name="tipo" value={sala.tipo} onChange={handleChange}/>
              <Form.Label>Capacidade:</Form.Label>
              <Form.Control type="text" name="capacidade" value={sala.capacidade} onChange={handleChange}/>
              <Form.Label>Valor:</Form.Label>
              <Form.Control type="text" name="valor" value={sala.valor} onChange={handleChange}/>
              <Form.Label>Descrição:</Form.Label>
              <Form.Control type="text" name="descricao" value={sala.descricao} onChange={handleChange}/>
              <Form.Label>Imagem URL:</Form.Label>
              <Form.Control type="text" name="imagem" value={sala.imagem} onChange={handleChange}/>
              <Row>
                <Form.Control type='submit' value="salvar" name="salvar" className={classBtn}/>
              </Row>
              </Container>

               <Card style={{ width: '55rem' }} className="cardimg">
              <Card.Img variant="top" src={sala.imagem} />
            </Card>

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