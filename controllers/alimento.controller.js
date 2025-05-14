//RF23: Registrar un nuevo tipo de comida en el sistema - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF23
/**
 * Controlador de Alimentos.
 * @module controllers/alimentoController
 */
const { Alimento } = require("../models/alimento.model");

/**
 * Obtiene todos los alimentos de la base de datos.
 * @async
 * @function obtenerAlimentos
 * @param {import('express').Request} req - Objeto de solicitud HTTP de Express.
 * @param {import('express').Response} res - Objeto de respuesta HTTP de Express.
 * @returns {Promise<void>}
 */
module.exports.obtenerAlimentos = async (req, res) => {
    const alimento = new Alimento();
    try {
        const alimentos = await alimento.obtener();
        res.json(alimentos);
    } catch (error) {
        res.status(500).send("Error al obtener alimentos");
    }
};

/**
 * Registra un nuevo alimento en la base de datos.
 *
 * @async
 * @function registrarAlimento
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} req.body - Cuerpo de la solicitud con `nombre` y `descripcion`.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @returns {void} Responde con éxito o el error correspondiente (400, 101 o 500).
 */
module.exports.registrarAlimento = async (req, res) => {
    const { nombre, descripcion } = req.body;

    if (!nombre || !descripcion) {
        return res.status(400).json({ success: false, message: "Datos no válidos" });
    }

    try {
        const alimento = new Alimento(null, nombre, descripcion);
        await alimento.agregar();
        res.status(200).json({ success: true, message: "Alimento registrado exitosamente" });
        console.log("Se conecto back con front");
    } catch (error) {
        console.error("Error al registrar alimento:", error);

        if (error.code === 'ETIMEDOUT' || error.code === 'ECONNREFUSED') {
            return res.status(101).json({ success: false, message: "Sin conexión a internet" });
        }

        res.status(500).json({ success: false, message: "Error del servidor al registrar alimento" });
    }

    // Esta línea no se alcanza pero queda como respaldo por errores lógicos.
    return res.status(500).json({
        success: false,
        message: "Error del servidor al registrar alimento (error 500)"
    });
};
