// RF16 Visualizar todas las charolas registradas en el sistema
// Documentación: https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF16

const Charola = require('../models/menu_charolas.model');

/**
 * Controlador para obtener todas las charolas registradas de forma paginada.
 *
 * Este endpoint permite visualizar la lista de charolas con soporte para paginación.
 *
 * @async
 * @function obtenerCharolas
 * @param {import('express').Request} req - Objeto de solicitud HTTP. Puede incluir query params `page` y `limit`.
 * @param {import('express').Response} res - Objeto de respuesta HTTP.
 * @returns {Promise<void>} - Retorna una respuesta con la lista paginada de charolas o un error 500.
 *
 * @example
 * // Llamada al endpoint con paginación
 * GET /api/charola?page=1&limit=20
 * 
 * @response 200 - Éxito
 * {
 *   total: 57,
 *   page: 1,
 *   limit: 20,
 *   totalPages: 3,
 *   data: [ ... ]
 * }
 *
 * @response 500 - Error del servidor
 * {
 *   mensaje: "Error interno del servidor"
 * }
 */
const obtenerCharolas = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const offset = (page - 1) * limit;

    const datos = await Charola.getCharolasPaginadas(limit, offset);
    const total = await Charola.getCantidadTotal();
    const totalNumber = Number(total); // Conversión segura

    res.status(200).json({
      total: totalNumber,
      page,
      limit,
      totalPages: Math.ceil(totalNumber / limit),
      data: datos
    });

    console.log("Se pudo conectar el front con el back :)");

  } catch (error) {
    console.error('Error al obtener charolas paginadas:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

module.exports = {
  obtenerCharolas
};
