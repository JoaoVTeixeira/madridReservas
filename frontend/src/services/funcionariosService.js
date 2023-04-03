import axios from 'axios';
/*
const api = axios.create({
  baseURL: 'http://localhost:5000',
});
*/

var funcionariosService = {
  getfuncionario: async () => {
    var funcionarioAPI = axios.get('http://localhost:5000/api/funcionarios');
    return await funcionarioAPI;
  },

  getOnefuncionario: async(id) => {
    var funcionarioAPI = axios.get(`http://localhost:5000/api/funcionarios/${id}`);
    return await funcionarioAPI;
  },

  deletefuncionarios: async(id) => {
    var funcionarioAPI = axios.delete(`http://localhost:5000/api/funcionarios/${id}`);
    return await funcionarioAPI;

  }, 

  createfuncionarios: async(funcionario) => {
    var funcionarioAPI = axios.post('http://localhost:5000/api/funcionarios/', funcionario);
    return await funcionarioAPI;
  },

  updatefuncionarios: async(id, funcionario) => {
  
    var funcionarioAPI = axios.put('http://localhost:5000/api/funcionarios/'+id, funcionario);
    return await funcionarioAPI;  
  
  }
};

export default funcionariosService;