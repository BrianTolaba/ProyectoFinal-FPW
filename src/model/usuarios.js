//Modelo de Datos
const mongoose = require('mongoose');
const esquema = mongoose.Schema;

const esquemaUsuario = new esquema({
    username: String,
    password: String,
    role: String,
    name: String,
    score: Number
})

module.exports = mongoose.model('users',esquemaUsuario);

