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