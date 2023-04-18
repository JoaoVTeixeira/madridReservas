import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
  Table,
  Image,
  Dropdown,
  DropdownButton,
  Carousel,
  Card,
} from "react-bootstrap";
import Cabecalho from "../Cabecalho/cabecalho";
import { useParams, useNavigate } from "react-router-dom";
import ComboSalas from "../combosalas.js/combosalas";
import reservasService from "../../services/reservasService";
import './style.css'

function ReservaSalas() {
  const { id } = useParams();
  const [reserva, setFormData] = useState({});
  const [selectedValue, setSelectedValue] = useState('');
  const history = useNavigate();
  
  useEffect(() => {
      async function fetchFormData () {
      
      try {        
        
        if (id !== 'inserir') {
        const response = await reservasService.getoneReservas(id);
        setFormData(response.data);
        }

      } catch (error) {
        console.error(error);
      }
  
      };
      fetchFormData();
    },[id]); 

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        
        if (event.nativeEvent.submitter.name === "salvar") {
         
          reserva.funcionario = 'WEB - Internet';
          reserva.cliente = 'Internet - WWW';
          reserva.status = 'R'; // indicar sala reservada
          reserva.valortotal = 1;
          
          alert(reserva.numero);
          alert(reserva.sala);

          alert(reserva.cliente);
          
          alert(reserva.data);
          
          alert(reserva.inicio);
          
          alert(reserva.fim);
          
          alert(reserva.valor);
          
          alert(reserva.valortotal);
          
          alert(reserva.observacao);

          alert(reserva.status);

          if (id === 'inserir') {
              
            alert(reserva.sala)
              await reservasService.postReservas(reserva);
              alert('incluido com sucesso!');
               
          }
          else {
              
              await reservasService.putReservas(id,reserva);
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
      setFormData({ ...reserva, [name]: value });
    };

    const clienteChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...reserva, [name]: value });
    };

    const handleSelectChange = (value) => {
      setSelectedValue(value);      
      reserva.sala = value;
    };
  
  return (
    <Container fluid >
      <div className="reservasalas">
        <Form className="reservas__container" onSubmit={handleSubmit}>
          <div className="primeiraCol">
          <Form.Label>Valor select</Form.Label>
          <Form.Control name='sala' type="text" value={selectedValue} readOnly />
          <ComboSalas onSelectChange={handleSelectChange}/>
          
            
          </div>

          <div className="segundaCol">
            <Form.Label>dia</Form.Label>
            <Form.Control id="dia" type="date" />

            <Form.Label>Hora Inicial</Form.Label>

            <Form.Control id="horaini" type="time" />

            <Form.Label>Hora Final</Form.Label>

            <Form.Control id="horafim" type="time" />
            <Form.Label>Obs.</Form.Label>
            <Form.Control type="text"></Form.Control>
          </div>
          <div className="buttons">
            <Form.Control type="submit" name="salvar" value={"salvar"}/>
            <Form.Control type="submit" value={"Cancela"}/>
          </div>
        </Form>
      </div>
    </Container>
  );
}

export default ReservaSalas;
