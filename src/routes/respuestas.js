const express = require('express');
const router = express.Router();

const listaUsuarios = require ('../model/usuarios.js');

//async
router.get('/obtenerUsuarios', async (req, res) => {
    try {
        const docs = await listaUsuarios.find();
        res.send(docs);

    } catch (error) {
        console.error("Error al obtener Usuarios:", error);
        res.status(500).send({ message: "Error interno del servidor al obtener usuarios" });

    }
});

router.post('/registrarUsuario', async (req, res) => {
    try{
        const nuevoUsuario = new listaUsuarios(req.body);
        const usuarioGuardado = await nuevoUsuario.save();
        res.status(201).json({success: true, data:usuarioGuardado});
        console.log(res.message);
    } catch (error) {
        console.error("Error en /registrarUsuario:",error);
        res.status(500).json({success:false,message: 'Error interno del servidor.'});
    }

});

module.exports = router; 