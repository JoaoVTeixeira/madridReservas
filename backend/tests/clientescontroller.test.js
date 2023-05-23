const ClienteController = require('../controllers/clientecontroller.js');
const ClienteModel = require('../models/clientes.js');

test('getSalas retorna todas as salas', async () => {
  const salasMock = [
    {
      "_id": {
        "$oid": "6414c6100dbd5838b52ff7fe"
      },
      "nome": " gabriel",
      "cpf": "0775225",
      "cep": "6900000",
      "email": "gb@gmail.com",
      "tel": "9292929299",
      
       
      },
    
  ];

  
  ClienteModel.ClienteModel = {
    find: jest.fn().mockResolvedValue(salasMock),
  };

  const req = {};
  const res = {
    json: jest.fn(),
    status: jest.fn().mockReturnThis(),
  };

  await ClienteController.getClienteId(req, res);

  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith(salasMock);
});