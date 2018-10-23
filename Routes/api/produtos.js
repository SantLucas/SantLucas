const express = require('express');
const roteador = express.Router();
const passport = require('passport');
const controller = require('../../Controllers/produtos');
// roteador.get('/sessao')

roteador.get('/', controller.listar);
roteador.post('/', controller.cadastrar);
//roteador.put('/', controller.alterar);
//roteador.delete('/:id', controller.deletar);


module.exports = roteador;