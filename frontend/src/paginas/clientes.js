import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, FormControl, Button, Table, Image } from 'react-bootstrap';
import Cabecalho from '../componentes/Cabecalho/cabecalho';
import { Link } from 'react-router-dom';
import clientesService from '../services/clientesService';
import './style.css'

function Funcionarios() {
  
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    async function fetchTableData () {
    
    try {
      
      //const response = await axios.get('http://localhost:5000/api/clientes');
      const response = await clientesService.getCliente();
      setTableData(response.data);
    } catch (error) {
      console.error(error);
    }

    };
    fetchTableData();
  },[]); 
  
  async function handleDelete(id) {
    try {
           //await axios.delete(`http://localhost:5000/api/clientes/${id}`);
           await clientesService.deleteClientes(id); 
           alert('deletado com sucesso!');
            this.fetchTableData();

    } catch (error) {
      console.error(error);
    }      
  }

  return (    

    <Container className='HomeContainer'>
      <Row>
        <Col xs={12}>
        <Cabecalho />
        </Col>
      </Row>
      <Container className='IntraBody' fluid>

      <Row>

     

      </Row>
      <Row>            

                <div className="table-container tabela">
                    <div className="shadow bg-light border-primary text-center">
                        <h2>Salas</h2>
                    </div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>CPF</th>
                                <th>Nome</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row, index) => {
                                return (
                            <tr key={index} data-toogle="tooltip" title={row._id}>
                                <td>{row.nome}</td>
                                <td>{row.cpf}</td>
                                <td>{row.cep}</td>
                                <td>{row.email}</td>                              
                                <td>{row.telefone}</td>
                                
                                <td>
                                  <Link to={`/clientes/${row._id}`} state={{classe:''}}>
                                    <Image
                                          src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png"
                                          alt="editar"
                                          className="rounded-circle"
                                          width="30"
                                          height="30"
                                    />
                                  </Link>
                                </td>
                                <td>
                                    <Image 
                                      src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
                                      alt="apagar"
                                      className="rounded-circle"
                                      width="30"
                                      height="30"
                                      onClick={() => handleDelete(row._id)}
                                    />
                                </td>
                            </tr>
                            );
                            })}
                        </tbody>
                    </Table>
                </div>

      </Row>        
      </Container>
        <Row className="bg-dark text-white">
        <Link to="/clientes/:id" state={{classe:''}}>
          <Button>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/4315/4315609.png"
              alt="Incluir"
              className="rounded-circle"
              width="30"
              height="30"
            />
          </Button>
          </Link>
        </Row>    

    </Container>
  );
}

export default Funcionarios;