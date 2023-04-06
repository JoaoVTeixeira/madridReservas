import React, { useState, useEffect } from 'react';
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
import 'bootstrap/dist/css/bootstrap.min.css';
import salasService from '../../services/salasService';

function ComboSalas() {

  const [salaReservas, setSalas] = useState([]);

  useEffect(() => {
    const fetchComboData = async () => {
    
        try {
    
            const responseSala = await salasService.getSalas();
            console.log(responseSala)
            setSalas(responseSala.data);
        } catch (error) {
          console.error(error);
        }    
      };
      fetchComboData();      

  }, []);
  

  return (

    <Dropdown className="menu">
    <Dropdown.Toggle>Escolha a Sala</Dropdown.Toggle>
    <Dropdown.Menu id="dropdown-basic-button" title="Salas">
      {salaReservas.map((row, index) => {
        return (
          <Dropdown.Item href="#/action-1" onSelect={() => handleSelect(row)}>
            {row.tipo}
          </Dropdown.Item>
        );
      })}
    </Dropdown.Menu>
  </Dropdown>
          
      

  );
}

export default ComboSalas;