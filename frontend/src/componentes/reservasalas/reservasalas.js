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
import { useParams, Link } from "react-router-dom";
import ComboSalas from "../combosalas.js/combosalas";
import salasService from "../../services/salasService";
import './style.css'

function ReservaSalas() {
  const [tableData, setTableData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    async function fetchTableData() {
      try {
        //const response = await axios.get('http://localhost:5000/api/salas');

        const response = await salasService.getSalas();
        console.log(response.data);
        setTableData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchTableData();
  }, []);

  async function handleDelete(id) {
    try {
      //await axios.delete(`http://localhost:5000/api/salas/${id}`);
      const response = await salasService.deleteSalas(id);
      alert("deletado com sucesso!");
      this.fetchTableData();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Container fluid >
      <div className="reservasalas">
        <Form className="reservas__container">
          <div className="primeiraCol">
          <ComboSalas/>
          {console.log(ComboSalas)}
            <div className="carrossel">
              <Carousel>
                {tableData.map((item, index) => (
                  <Carousel.Item key={item.id}>
                    
                      <Card.Img
                        key={index}
                        src={item.imagem}
                        alt=""
                        className="imageres"
                      />
                   

                    <Carousel.Caption className="carrosselTexto">
                      <div className="imgLetras">
                        <h3>{item.tipo}</h3>
                        <p>{item.descricao}</p>
                      </div>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
            
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
          <Form.Control type="submit" value={"Confirma"}/>
          <Form.Control type="submit" value={"Cancela"}/>
        </Form>
      </div>
    </Container>
  );
}

export default ReservaSalas;
