//Modelo de Datos
const mongoose = require('mongoose');
const esquema = mongoose.Schema;

const esquemaUsuario = new esquema({
    username: String,
    password: String,
    role: String,
    nombre: String,
    apellido: String,
    score: Number,
    horasDisponibles: Number,
    horarioDisponible: String
})

module.exports = mongoose.model('users',esquemaUsuario);

