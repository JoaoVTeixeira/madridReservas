const ReservaController = require('../controllers/reservas');
const ReservaModel = require('../models/reservas');

jest.mock('../models/reservas');

describe('ReservaController', () => {
  describe('cancelarReserva', () => {
    it('deve cancelar uma reserva específica', async () => {
      const reservaId = '64389e084fdb4e722851090f';
      
      const reservaMock =
      {
        "_id": {
          "$oid": "64389e084fdb4e722851090f"
        },
        "numero": 56,
        "sala": "640a3a03122bfccdba2c163b",
        "funcionario": "WEB - Internet",
        "cliente": "Internet - WWW",
        "data": {
          "$date": {
            "$numberLong": "1681862400000"
          }
        },
        "inicio": 8,
        "fim": 9,
        "valor": 231000000,
        "observacao": "taporra",
        "status": "R",
        "__v": 0
      };
      
      ReservaModel.reservaModel.findByIdAndUpdate.mockResolvedValue(reservaMock);

      //const salaController = new SalaController();

      const req = { params: { id: reservaId}};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await ReservaController.cancelaReserva(req, res);

      expect(ReservaModel.reservaModel.findByIdAndUpdate).toHaveBeenCalledWith(reservaId, {"status": "C"});
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(reservaMock);
    });

    it('deve retornar erro 400 ao nao cancelar uma reserva específica', async () => {

      const reservaId = '********';

      ReservaModel.reservaModel.findByIdAndUpdate.mockResolvedValue(null);

      const req = { params: { id: reservaId } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await ReservaController.cancelaReserva(req, res);
      //console.log(salaId, req.params.id);

      expect(ReservaModel.reservaModel.findByIdAndUpdate).toHaveBeenCalledWith(reservaId);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(reservaId);
    });
    
  });

});
