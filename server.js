const express = require('express');
const app = express();

// endpoint metodos get o post
app.get('/', (req, res) => {
    res.end("Bienvenidos a mi servidor Backend FPW 2025");

});

//routing
const archivosDB = require ('./conection.js');
const usuarios = require ('./src/routes/usuariosRoutes.js');

// modelo de datos

//midleware
app.use(express.json());
app.use ('/api',usuarios);

//listening
app.listen(5000,() => {
    console.log("Servidor Node Corriendo PERFECTAMENTE Grupo 10");
}); 