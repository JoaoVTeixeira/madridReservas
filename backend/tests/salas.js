const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/reservas', { useNewUrlParser: true});

var Schema = mongoose.Schema;

const Sala = new Schema ({

    tipo        : {type:String, required: true},
    numero      : {type:String, required: true},
    capacidade  : {type:String, required: true},
    valor       : {type:Number, required: true},
    descricao   : {type:String, required: true},
    imagem      : {type:String, required: true}

})


const SalaModel = mongoose.model('salas', Sala);


module.exports = {SalaModel}