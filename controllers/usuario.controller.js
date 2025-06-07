const Usuario = require('../models/usuario.model.js');
const nodemailer = require('nodemailer');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

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

/**
 * @description Genera una contraseña aleatoria.
 * @param {int} longitud - Longitud de la contraseña.
 * @returns {String} Contraseña nueva.
 */
function generarContrasena(longitud = 6) {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let contrasena = '';
  for (let it = 0; it < longitud; it++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    contrasena += caracteres[indice];
  }
  return contrasena;
}

/**
 * @description Manda un correo de recuperación para recuperar la contraseña
 * @param {*} req - Solicitud HTTP que contiene información del usuario.
 * @param {*} res - Respuesta HTTP que se usa para enviar el resultado.
 * @returns {JSON} Código de respuesta
 */
exports.mandarCorreo = async (req, res) => {
    try{
        const usuario = req.query.usuario;
        const usuarioId = await Usuario.obtenerId(usuario);
        if (usuarioId == null){
            res.status(201).json({code: 201});
            return;
        }

        const nuevaContrasena = generarContrasena();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.MAIL_USER,
            to: process.env.MAIL_RECEIVER,
            subject: 'Recuperar contraseña ZuustentoTracker',
            html: `<div style="font-family: Arial, sans-serif; text-align: center;">
                <img src="cid:logo" alt="Logo de ZuustentoTracker" style="width: 150px; margin-bottom: 20px;" />
                <h2>¿Olvidaste tu contraseña?</h2>
                <p>Este correo es automatizado, se solicitó el cambio de contraseña para:</p>
                <p style="font-weight: bold">${usuario}</p>
                <p>Nueva Contraseña:</p>
                <p style="font-weight: bold">${nuevaContrasena}</p>
                <p style="margin-top: 20px;">Si no solicitaste este cambio, puedes ignorar este correo.</p>
            </div>`,
            attachments: [
            {
                filename: 'logo.png',
                path: path.join(__dirname, '..', 'public', 'ZuustentoTracker_AppIcon.png'),
                cid: 'logo'
            }
            ]
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error)
                res.status(500).json({code: 500});
                return;
            }
        });

        await Usuario.cambiarContrasena(usuarioId.usuarioId, nuevaContrasena);

        res.status(200).json({code: 200});
    } catch (error){
        console.log(error)
        res.status(500).json({code: 500})
    }
};

/**
 * @description Obtiene todos los usuarios de la base de datos
 * @param {*} req - Solicitud HTTP que contiene información del usuario.
 * @param {*} res - Respuesta HTTP que se usa para enviar el resultado.
 * @returns {JSON} Código de respuesta
 */
exports.obtenerUsuarios = async (req, res) => {
    try{
        const resultado = await Usuario.obtenerUsuarios();
        return res.status(200).json({resultado: resultado});
    } catch (error){
        return res.status(500).json({ code: 500 });
    }
}

/**
 * @description Edita la informacion de un usuario
 * @param {*} req - Solicitud HTTP que contiene información del usuario.
 * @param {*} res - Respuesta HTTP que se usa para enviar el resultado.
 * @returns {JSON} Código de respuesta
 */
exports.editarUsuario = async (req, res) => {
    try{
        const resultado = await Usuario.editarUsuario(parseInt(req.query.usuarioId), req.body);

        return res.status(200).json({ code: 200 });

    } catch (error) {
        return res.status(500).json({ code: 500 });
    }
}

/**
 * @description Elimina un usuario de la plataforma
 * @param {*} req - Solicitud HTTP que contiene información del usuario.
 * @param {*} res - Respuesta HTTP que se usa para enviar el resultado.
 * @returns {JSON} Código de respuesta
 */
exports.eliminarUsuario = async (req, res) => {
    try{
        const resultado = await Usuario.eliminarUsuario(parseInt(req.query.usuarioId));

        return res.status(200).json({ code: 200 });
    } catch (error){
        return res.status(500).json({ code: 500 });
    }
}
