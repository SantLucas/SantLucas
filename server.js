const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const routes = require('./Routes/api');
const bodyParser = require('body-parser');
const cors = require('./config/cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

mongoose
    .connect('mongodb://admin:admin123@ds137703.mlab.com:37703/crudproduct', {useNewUrlParser:true})
    .then(() => console.log('mongoDb Conectado com sucesso'))
    .catch(erro => console.log(erro));

app.use(passport.initialize());

require('./config/passport')(passport);

app.use('/api/usuarios', routes.usuarios);
app.use('/api/produtos', routes.produtos);

app.listen(5000, function(){
    console.log('servidor rodando na porta 5000');
});

