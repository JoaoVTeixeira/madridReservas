import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, FormControl, Button, Table, Image, Dropdown, DropdownButton } from 'react-bootstrap';
import Cabecalho from '../Cabecalho/cabecalho';
import { useParams, Link } from 'react-router-dom';
import salasService from '../../services/salasService'

function ReservaSalas() {
  
  const [tableData, setTableData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchTableData () {
    
    try {

      //const response = await axios.get('http://localhost:5000/api/salas');
      
      const response = await salasService.getSalas();
      console.log(response.data)
      setTableData(response.data);
    } catch (error) {
      console.error(error);
    }

    };
    fetchTableData();
  },[]); 
  
  async function handleDelete(id) {
    try {
           //await axios.delete(`http://localhost:5000/api/salas/${id}`);
           const response = await salasService.deleteSalas(id,) 
           alert('deletado com sucesso!');
           this.fetchTableData();
    } catch (error) {
      console.error(error);
    }      
  }

  return (   
  
  
   <Container fluid>
    <div className='reservasalas'>
    
     <Form>
     <Form.Select>

     {tableData.map((row, index) => {
                                return (
                                  <option>{row.descricao}</option>                                 
                            );
                            })}
                                        </Form.Select>

         <Form.Label>dia</Form.Label>
         <Form.Control id='dia' type='date'/>
         
         <Form.Label>Hora Inicial</Form.Label>
         
         <Form.Control id='horaini' type='time'/>
         
         <Form.Label>Hora Final</Form.Label>
         
         <Form.Control id='horafim'  type='time'/>

     </Form>

    </div>
    
  
   </Container>  );}

  export default ReservaSalas;
