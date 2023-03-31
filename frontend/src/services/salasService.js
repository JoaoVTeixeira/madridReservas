import axios from 'axios';
/*
const api = axios.create({
  baseURL: 'http://localhost:5000',
});
*/

var salasService = {
  getSalas: async () => {
    var salaAPI = axios.get('http://localhost:5000/api/salas');
    return await salaAPI;
  },
};

export default salasService;