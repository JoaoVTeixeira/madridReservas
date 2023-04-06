import React, { useState, useEffect } from "react";
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
import "bootstrap/dist/css/bootstrap.min.css";
import salasService from "../../services/salasService";
import './style.css'
function ComboSalas() {
  const [salaReservas, setSalas] = useState([]);

  useEffect(() => {
    const fetchComboData = async () => {
      try {
        const responseSala = await salasService.getSalas();
        console.log(responseSala);
        setSalas(responseSala.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchComboData();
  }, []);

  return (
    <div className="form__select">
    <Form.Select >
      {salaReservas.map((row, index) => {
        return <option className="form__select">{row.tipo}</option>;
      })}
    </Form.Select>
    </div>
  );
}

export default ComboSalas;
