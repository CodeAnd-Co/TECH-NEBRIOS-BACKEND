//RF40: Editar un tipo de hidratación en el sistema - https://codeandco-wiki.netlify.app/docs/next/proyectos/larvas/documentacion/requisitos/RF40
/**
 * Controlador de Hidratación.
 * @module controllers/hidratacionController
 */
const { Hidratacion } = require('../models/hidratacion.model');

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
        res.status(500).send('Error al obtener hidratación');
    }
};

/**
 * Edita un hidratante existente en la base de datos.
 * @async
 * @function editarHidratacion
 * @param {import('express').Request} req - Objeto de solicitud HTTP, contiene params y body.
 * @param {import('express').Response} res - Objeto de respuesta HTTP.
 * @returns {Promise<void>}
 */
module.exports.editarHidratacion = async (req, res) => {
    const idHidratacion = Number(req.params.idHidratacion);
    
    const { nombreHidratacion, descripcionHidratacion } = req.body;

    if (!Number.isInteger(idHidratacion) || idHidratacion <= 0) {
        return res.status(400).json({ error: 'ID de hidratante no válido' });
      }

    try {
        const hidratacion = new Hidratacion(idHidratacion, nombreHidratacion, descripcionHidratacion);
        await hidratacion.actualizar();
        res.json({ success: true, message: 'Hidratacion actualizado' });
    } catch (error) {
        res.status(500).send('Error al editar hidratacion');
    }
};