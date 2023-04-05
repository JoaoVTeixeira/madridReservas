import axios from 'axios';


var reservasService = {
    getReserva: async () => {
      var reservaAPI = axios.get('http://localhost:5000/api/reservas/');
      return await reservaAPI;
    },
}

export default reservasService;