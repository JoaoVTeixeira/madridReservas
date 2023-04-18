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
function ComboSalas({ onSelectChange }) {
  const [salaReservas, setSalas] = useState([]);

  const [selectData, setSelectData] = useState([]);
  const [selectedValue, setSelectedValue] = useState([]);

  useEffect(() => {
    
    async function fetchSelectData () {
    
      try {
        const response = await salasService.getSalas();
        setSelectData(response.data);
      } catch (error) {
        console.error(error);
      }
  
      };
      fetchSelectData();
      
  },[]); 



const handleChange = (event) => {
  const value = event.target.value;    
  setSelectedValue(value);
  onSelectChange(value);
};

  return (
    <div className="form__select">
     <Form.Control as = 'select' value={selectedValue} onChange={handleChange}>
            {selectData.map(item => (
                <option key={item._id} value={item._id}>
                  {item.numero} - {item.nome} - {item.descricao}
                </option>
              ))}
        </Form.Control>
    </div>
  );
}

export default ComboSalas;
