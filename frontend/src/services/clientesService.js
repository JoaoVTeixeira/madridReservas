import axios from 'axios';
/*
const api = axios.create({
  baseURL: 'http://localhost:5000',
});
*/

var clientesService = {
  getCliente: async () => {
    var clienteAPI = axios.get('http://localhost:5000/api/clientes');
    return await clienteAPI;
  },

  getClienteCPF: async (cpf) => {
    var clienteAPI = axios.get(`http://localhost:5000/api/clientes/cpf/${cpf}`);
    return await clienteAPI;
  },

  getOneCliente: async(id) => {
    var clienteAPI = axios.get(`http://localhost:5000/api/clientes/${id}`);
    return await clienteAPI;
  },

  deleteClientes: async(id) => {
    var clienteAPI = axios.delete(`http://localhost:5000/api/clientes/${id}`);
    return await clienteAPI;

  }, 

  createClientes: async(cliente) => {
    var clienteAPI = axios.post('http://localhost:5000/api/clientes/', cliente);
    return await clienteAPI;
  },

  updateClientes: async(id, cliente) => {
  
    var clienteAPI = axios.put('http://localhost:5000/api/clientes/'+id, cliente);
    return await clienteAPI;  
  
  }
};

export default clientesService;