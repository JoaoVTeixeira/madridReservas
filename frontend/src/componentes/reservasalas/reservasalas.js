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
  const [Reservas, setFormData] = useState({});
  const history = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    async function fetchFormData () {
    
    try {        
      const response = await reservasService.getoneReservas(id);
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
          
            await reservasService.postReservas(Reservas);
            alert('incluido com sucesso!'); 
        }
        else {
            alert("teste")
            await reservasService.putReservas(id,Reservas);
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
    setFormData({ ...Reservas, [name]: value });
  };

  return (
    <Container fluid >
      <div className="reservasalas">
        <Form className="reservas__container" onSubmit={handleSubmit}>
          <div className="primeiraCol">
          <ComboSalas/>
          {console.log(ComboSalas)}
           
            
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
            <Form.Control type="submit" value={"Confirma"}/>
            <Form.Control type="submit" value={"Cancela"}/>
          </div>
        </Form>
      </div>
    </Container>
  );
}

export default ReservaSalas;
