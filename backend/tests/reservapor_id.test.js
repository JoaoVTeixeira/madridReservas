const reservaController = require('../controllers/reservas');
const reservaModel = require('../models/reservas');

jest.mock('../models/reservas');

describe('ReservaController', () => {
  describe('getoneReserva', () => {
    it('deve retornar uma reserva específica', async () => {
      const reservaId = '6421f9f67093fa600de78f95';
      
      const reservaMock =
      {
        "_id": {
          "$oid": "642c812288e063ee2c0503bb"
        },
        "numero": 8,
        "sala": "640a3cf5122bfccdba2c163d",
        "cliente": "Internet - WWW",
        "data": {
          "$date": {
            "$numberLong": "1681689600000"
          }
        },
        "inicio": 22,
        "fim": 23,
        "valor": 2300,
        "valortotal": 2,
        "observacao": "outro teste",
        "status": "R",
        "funcionario": "WEB - Internet"
      };
      
      reservaModel.reservaModel.findById.mockResolvedValue(reservaMock);

      //const salaController = new SalaController();

      const req = { params: { id: reservaId } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await reservaController.getOneReserva(req, res);

      expect(reservaModel.reservaModel.findById).toHaveBeenCalledWith(reservaId);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(reservaMock);
    });

    it('deve retornar erro 400 ao nao encontrar uma reserva específica', async () => {

      const reservaId = '********';

     reservaModel.reservaModel.findById.mockResolvedValue(null);

      const req = { params: { id: reservaId } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await reservaController.getOneReserva(req, res);
      //console.log(salaId, req.params.id);

      expect(reservaModel.reservaModel.findById).toHaveBeenCalledWith(reservaId);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(reservaId);
    });
    
  });

});
