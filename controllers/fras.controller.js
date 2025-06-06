// RF29: Visualizar la información del Frass obtenido - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF29

/**
 * Controlador de Fras.
 * @module controllers/frasController
 */
const { Fras } = require('../models/fras.model');

/**
    * Obtiene los registros de Fras para una charola específica.
    * @async
    * @function obtenerFras
    * @param {import('express').Request} req - Objeto de solicitud HTTP de Express.
    * @param {import('express').Response} res - Objeto de respuesta HTTP de Express.
    * @returns {Promise<void>} Responde con los registros de Fras o un error si no se encuentran registros.
    * @throws {Error} Lanza un error si ocurre un problema al consultar la base de datos.
 */
module.exports.obtenerFras = async (req, res) => {
    const fras = new Fras();

    try {
        const resultado = await fras.obtener();
        if (resultado) {
            res.json(resultado);
        } else {
            res.status(404).json({ message: 'No se encontraron registros de Fras.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los registros de Fras.' });
    }
}