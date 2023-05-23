const ClienteController = require('../controllers/clientecontroller');
const ClienteModel = require('../models/clientes');

jest.mock('../models/clientes');

describe('ClienteController', () => {
  describe('getonecliente', () => {
    it('Deve retornar um cliente especifico', async () => {
      const salaId = '640cd89ee9eece2ac03ba7cc';
      
      const salaMock = { 
        "_id": {
          "$oid": "640cd89ee9eece2ac03ba7cc"
        },
        "nome": "leandreo",
        "cpf": 64136641,
        "cep": 9684,
        "email": "gabrielsouza2006.2005@gmai.com",
        "tel": 6565656,
        
         };
      
      ClienteModel.ClienteModel.findById.mockResolvedValue(salaMock);

      //const salaController = new SalaController();

      const req = { params: { id: salaId } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await ClienteController.getClienteId(req, res);

      expect(ClienteModel.ClienteModel.findById).toHaveBeenCalledWith(salaId);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(salaMock);
    });

    it('deve retornar erro 400 ao nao encontrar um cliente específico', async () => {
      const salaId = '********';
      
      const salaMock = { 
        "_id": {
          "$oid": "6414c6100dbd5838b52ff7fe"
        },
        "nome": " gabriel",
        "cpf": "0775225",
        "cep": "6900000",
        "email": "gb@gmail.com",
        "tel": "9292929299",
        
         };
      
      ClienteModel.ClienteModel.findById.mockResolvedValue(salaId);     

      //const salaController = new SalaController();

      const req = { params: { id: salaId } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await ClienteController.getClienteId(req, res);
      //console.log(salaId, req.params.id);

      expect(ClienteModel.ClienteModel.findById).toHaveBeenCalledWith(salaId);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(salaId);
    });
    
  });

});
