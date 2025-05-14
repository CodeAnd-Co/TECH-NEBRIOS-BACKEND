const Usuario = require("../../models/usuario.model"); 
const jwt = require('jsonwebtoken')
const dotenv = require("dotenv");
dotenv.config();

/**
 * @description Middleware para verificar que la sesión del usuario es válida.
 * @param {*} req - Solicitud HTTP entrante.
 * @param {*} res - Respuesta HTTP.
 * @param {} next - Función para continuar con el siguiente middleware.
 */
async function verificarSesionActiva(req, res, next) {
    const autenticacion = req.headers.authorization;

    if(!autenticacion){
        return res.status(401).json({code:401, msg: "Sin token de autorización"});
    }
    const token = autenticacion.split(' ')[1]; // Extraes token de "Bearer <token>"
    console.log(token);
        if (!token) {
            return res.status(401).json({ message: "Token no válido" });
        }
        //Verifificar y decodificar el token
        const decoded = jwt.verify(token, process.env.JWT_SECRET); 

        const usuario = decoded;

        // Se busca si el usuario existe en la base de datos
        const existe = await Usuario.buscarUsuario(usuario.nombreDeUsuario);

        // Si el usuario está presente, se continua
        if (!existe) {
            console.log("Usuario no autorizado");
            return res.status(401).json({ code: 401, msg: "Usuario no autorizado" });
        }
        console.log("Usuario autorizado");
        next()
}

module.exports = verificarSesionActiva;