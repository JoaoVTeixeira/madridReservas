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

  getOneSalas: async(id) => {
    var salaAPI = axios.get(`http://localhost:5000/api/salas/${id}`);
    return await salaAPI;
  },

  deleteSalas: async(id) => {
    var salaAPI = axios.delete(`http://localhost:5000/api/salas/${id}`);
    return await salaAPI;

  }, 

  createSalas: async(sala) => {
    var salaAPI = axios.post('http://localhost:5000/api/salas/', sala);
    return await salaAPI;
  },

  updateSalas: async(id, sala) => {
  
    var salaAPI = axios.put('http://localhost:5000/api/salas/'+id, sala);
    return await salaAPI;  
  
  }
};

export default salasService;