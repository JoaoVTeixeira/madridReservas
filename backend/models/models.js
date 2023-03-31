const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const Sala = new Schema ({

    tipo        : String,
    numero      : String,
    capacidade  : String,
    valor       : Number,
    descricao   : String

})

const SalaModel = mongoose.model('SalaModel', Sala);

const Clientes = new Schema ({

    nome        : String,
    cpf         : String,
    cep         : String,
    email       : String,
    tel         : String
    
})

const ClienteModel = mongoose.model('ClienteModel', Clientes)

const Funcionario = new Schema ({

    nome        : String,
    cpf         : String,
    cep         : String,
    email       : String,
    telefone    : String,
    funcao      : String


})

const FuncionarioModel = mongoose.model('FuncionarioModel', Funcionario);

module.exports = {SalaModel, ClienteModel, FuncionarioModel}