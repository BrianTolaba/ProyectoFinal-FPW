
const express = require('express');
const router = express.Router();

const listaUsuarios = require ('../model/usuarios.js');

// Actualizar el score de un usuario existente
router.put('/actualizarScore', async (req, res) => {
    const { username, score } = req.body;
    console.log('Solicitando actualizar score para:', username, 'Nuevo score:', score);
    if (!username || typeof score !== 'number') {
        return res.status(400).json({ success: false, message: 'Username y score son requeridos.' });
    }
    try {
        const usuarioActualizado = await listaUsuarios.findOneAndUpdate(
            { username: username },
            { $set: { score } },
            { new: true }
        );
        console.log('Usuario actualizado:', usuarioActualizado);
        if (!usuarioActualizado) {
            return res.status(404).json({ success: false, message: 'Usuario no encontrado.' });
        }
        res.json({ success: true, data: usuarioActualizado });
    } catch (error) {
        console.error('Error al actualizar score:', error);
        res.status(500).json({ success: false, message: 'Error interno del servidor.' });
    }
});

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