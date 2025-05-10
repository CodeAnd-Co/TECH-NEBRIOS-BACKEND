//RF25: Eliminar un tipo de comida en el sistema - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF25

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
 * Edita un alimento existente en la base de datos.
 * @async
 * @function eliminarAlimento
 * @param {import('express').Request} req - Objeto de solicitud HTTP, contiene params y body.
 * @param {import('express').Response} res - Objeto de respuesta HTTP.
 * @returns {Promise<void>}
 */
module.exports.eliminarAlimento = async (req, res) => {
    const { idAlimento } = req.params;

    try {
        const alimento = new Alimento(idAlimento);
        await alimento.eliminar();
        res.json({ success: true, message: "Alimento eliminado" });
    } catch (error) {
        res.status(500).send("Error al eliminar alimento");
    }
};