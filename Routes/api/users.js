const express = require('express');
const roteador = express.Router();
const passport = require('passport');
const controller = require('../../Controllers/users');
// roteador.get('/sessao')

roteador.get('/test', controller.helloWorld);
roteador.post('/registrar', controller.registrar);
roteador.post('/login', controller.login);



module.exports = roteador;