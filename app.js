const express =  require('express');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const dotenv = require('dotenv').config();
const app =  express();
app.use(bodyParser.json());


//coneccion a db
require('./db/connection');

const categorieRouter = require('./routes/categorias');
const mainRouter = require('./routes/main');

app.use('/categoria',categorieRouter);
app.use('/', mainRouter);

app.listen(3006,()=>{
    console.log('servidor corriendo')
})