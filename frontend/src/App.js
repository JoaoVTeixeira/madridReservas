import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Clientes from './paginas/clientes';
import Funcionarios from './paginas/funcionarios';
import Home from './paginas/home';
import Salas from './paginas/salas'
import ListaSalas from './paginas/listasalas'
import IncluiFunc from './paginas/incluifunc'
import IncluiClient from './paginas/incluircliente'

import Intranet from './paginas/index'

function App() {
  return (
    
    <div className='BackG'>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/clientes" element={<Clientes/>} />
          <Route path="/funcionarios" element={<Funcionarios/>} />
          <Route path="/salas/:id" element={<Salas/>} />
          <Route path="/funcionarios/:id" element={<IncluiFunc/>} />
          <Route path="/clientes/:id" element={<IncluiClient/>} />

          <Route path="/salas" element={<ListaSalas/>} />
          
          <Route path='/index' element={<Intranet/>}/>
        </Routes>
      </BrowserRouter>    

    </div>

  );
}

export default App;
