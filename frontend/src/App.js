import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Clientes from './paginas/clientes';
import Funcionarios from './paginas/funcionarios';
import Home from './paginas/home';
import Salas from './paginas/salas'
import ReservaSalas from './paginas/reservasalas';
import Reserva from './paginas/reservas';
import ListaSalas from './paginas/listasalas'
import IncluiFunc from './paginas/incluifunc'
import IncluiClient from './paginas/incluircliente'

import Intranet from './paginas/index'
import TelaUm from './paginas/tela1'
import Cadastro from './paginas/cadastro'
import Login from './paginas/login'


function App() {
  return (
    
    <div className='BackG'>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/clientes" element={<Clientes/>} />
          <Route path="/funcionarios" element={<Funcionarios/>} />
          <Route path="/salas/:id" element={<Salas/>} />
          <Route path="/reservasalas/:id" element={<ReservaSalas/>} />
          <Route path="/reservas" element={<Reserva/>} />

          <Route path="/funcionarios/:id" element={<IncluiFunc/>} />
          <Route path="/clientes/:id" element={<IncluiClient/>} />

          <Route path="/salas" element={<ListaSalas/>} />
          
          <Route path='/index' element={<Intranet/>}/>
          <Route path='/tela1' element={<TelaUm/>}/>
          <Route path='/cadastro' element={<Cadastro/>}/>
          <Route path='/login' element={<Login/>}/>

        
        </Routes>
      </BrowserRouter>    

    </div>

  );
}

export default App;
