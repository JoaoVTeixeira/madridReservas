const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/reservas', { useNewUrlParser: true});

var Schema = mongoose.Schema;

// Função para gerar um número aleatório entre um valor mínimo e máximo
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
var reserva = new Schema ({

    sala        : { type:String, required: true},
    cliente     : { type:String, required: true},
    data        : { type:Date, required: true},            
    inicio      : { type:String, required: true},
    fim         : { type:String, required: true},    
    valortotal  : { type:Number, required: true},    
    observacao  : { type:String, required: true},
    status      : { type:String, required: true}    
})

const reservaModel = mongoose.model('reservas_collections', reserva);

async function popularReservas() {
  try {    
    const reservas = [];
    // Gerar 1000 registros aleatórios
    for (let i = 0; i < 1000; i++) {
      const reserva = {
        sala: `Sala ${getRandomNumber(1, 10)}`,
        cliente: `Cliente ${getRandomNumber(1, 100)}`,
        funcionario: `Funcionário ${getRandomNumber(1, 50)}`,
        data: new Date(),
        inicio: getRandomNumber(8, 18),
        fim: getRandomNumber(19, 22),
        valortotal: getRandomNumber(50, 500),
        observacao: `Observação ${i + 1}`,
        status: i % 2 === 0 ? 'Confirmada' : 'Pendente',
      };
      reservas.push(reserva);
    }
    await reservaModel.insertMany(reservas);
    console.log('Reservas populadas com sucesso!');
  } catch (error) {
    console.error('Erro ao popular as reservas:', error);
  } finally {
    mongoose.connection.close();
  }
}

popularReservas();