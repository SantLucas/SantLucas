const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProdutoSchema = new Schema({
    nome:{
        type: String,
        required: true
    },
    descricao:{
        type: String,
        required: true
    },
    foto:{
        type: String
    },
    preco:{
        type: Number,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
        
    },
    variacao:{
        cor:['verde', 'vermelho', 'amarelo', 'azul'],
        tamanho:['P', 'M', 'G', 'GG']
    },
});

module.exports = Produto = mongoose.model('produtos', ProdutoSchema);