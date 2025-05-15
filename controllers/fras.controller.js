/**
 * Controlador de Fras.
 * @module controllers/frasController
 */
const { Fras } = require('../models/fras.model');

/**
 * Obtiene todos los Fras de la base de datos.
 * @async
 * @function obtenerFras
 * @param {import('express').Request} req - Objeto de solicitud HTTP de Express.
 * @param {import('express').Response} res - Objeto de respuesta HTTP de Express.
 * @returns {Promise<void>}
 */
module.exports.obtenerFras = async (req, res) => {
    const fras = new Fras();
    try {
        const listaFras = await fras.obtener();
        res.json(listaFras);
    } catch (error) {
        res.status(500).send('Error al obtener Fras');
    }
}