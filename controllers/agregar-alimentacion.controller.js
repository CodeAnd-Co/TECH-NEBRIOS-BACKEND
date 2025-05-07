/**
 * @file Controlador para registrar nuevos alimentos.
 * @module controllers/agregarAlimentacion
 */

const { Alimento } = require("../models/alimento.model");

/**
 * Registra un nuevo alimento si los datos son válidos.
 *
 * @function
 * @async
 * @param {Object} req - Objeto de solicitud HTTP
 * @param {Object} req.body - Cuerpo de la solicitud
 * @param {string} req.body.nombre - Nombre del alimento
 * @param {string} req.body.descripcion - Descripción del alimento
 * @param {Object} res - Objeto de respuesta HTTP
 * @returns {Object} Respuesta JSON con mensaje de éxito o error
 */

module.exports.registrarAlimento = async (req, res) => {
    const { nombre, descripcion } = req.body;

    // Validar que nombre y descripcion existan
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
            // Simulamos error 101 "Sin conexión a internet" 
            return res.status(101).json({ success: false, message: "Sin conexión a internet" });
        }

        res.status(500).json({ success: false, message: "Error del servidor al registrar alimento" });
    }

    return res.status(500).json({
        success: false,
        message: "Error del servidor al registrar alimento (error 500)"
    });
}
