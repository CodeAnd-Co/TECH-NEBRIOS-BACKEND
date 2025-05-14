
/**
 * Controlador de Hidratación.
 * @module controllers/hidratacionController
 */
const { Hidratacion } = require("../models/hidratacion.model");

/**
 * Obtiene toda la hidratación de la base de datos.
 * @async
 * @function obtenerHidratacion
 * @param {import('express').Request} req - Objeto de solicitud HTTP de Express.
 * @param {import('express').Response} res - Objeto de respuesta HTTP de Express.
 * @returns {Promise<void>}
 */
module.exports.obtenerHidratacion = async (req, res) => {
    const hidratacion = new Hidratacion();
    try {
        const listaHidratacion = await hidratacion.obtener();
        res.json(listaHidratacion);
    } catch (error) {
        res.status(500).send("Error al obtener hidratación");
    }
};