import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
function Cabecalho() {
  
  return (

        <div className='logo'>
            <img 
            src="https://www.pngitem.com/pimgs/m/648-6489393_hotel-villa-magna-madrid-logo-hd-png-download.png"
            alt="Logo" 
            className='logoimg'>
            </img>
            <p><strong>Madrid</strong>Reservas</p>
        </div>     
  );
}

export default Cabecalho;