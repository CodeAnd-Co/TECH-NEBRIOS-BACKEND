// RF1 Iniciar Sesión - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/rf1

const Usuario = require('../models/usuario.model.js');

/**
 * @description Inicia sesión de un usuario y devuelve un token de sesión si es exitoso.
 * @param {*} req - Solicitud HTTP que contiene credenciales del usuario.
 * @param {*} res - Respuesta HTTP que se usa para enviar el resultado.
 * @returns {JSON} Código de respuesta y token de sesión
 */
exports.iniciarSesion = async (req, res) => {
    try{
        const sesion = await Usuario.iniciarSesion(req.body);

        if(sesion.error){
            return res.status(401).json({code:401});
        }

        return res.status(200).json({code: 200, token: sesion});

    }catch(error){
        return res.status(500).json({code: 500})
    }
};