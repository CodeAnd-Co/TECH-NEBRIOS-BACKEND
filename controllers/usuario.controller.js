const Usuario = require('../models/usuario.model.js');

/**
 * @description Registra un nuevo usuario en la base de datos.
 * @param {*} req - Solicitud HTTP que contiene información del usuario.
 * @param {*} res - Respuesta HTTP que se usa para enviar el resultado.
 * @returns {JSON} Código de respuesta
 */
exports.registrarUsuario = async (req, res) => {
    try {
        await Usuario.registrarUsuario(req.body);

        return res.status(200).json({ code: 200 });
    } catch (error) {
        return res.status(500).json({ code: 500 });
    }
}

exports.obtenerUsuarios = async (req, res) => {
    try{
        const resultado = await Usuario.obtenerUsuarios();
        return res.status(200).json({resultado: resultado});
    }catch{
        return res.status(500).json({ code: 500 });
    }
}