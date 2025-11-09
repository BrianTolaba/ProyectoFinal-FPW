const express = require('express');
const routes = express.Router();

//Modelo de Datos
const mongoose = require('mongoose');
const esquema = mongoose.Schema;

const esquemaUsuario = new esquema({
    username: String,
    password: String,
    rol: String,
    name: String
})

const listaUsuarios = mongoose.model('users',esquemaUsuario);

//rutas, endpoints
//promesa
/*routes.get('/obtenerUsuarios', (req, res) => {
    //obtener sitios
    listaUsuarios.find().then(docs => {
        res.send(docs);
    }).catch(err => {
        res.send(err)
    })
});*/

//async
routes.get('/obtenerUsuarios', async (req, res) => {
    try {
        const docs = await listaUsuarios.find();
        res.send(docs);

    } catch (error) {
        console.error("Error al obtener Usuarios:", error);
        res.status(500).send({ message: "Error interno del servidor al obtener usuarios" });

    }
});

module.exports = routes; 