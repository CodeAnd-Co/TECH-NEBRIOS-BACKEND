// RF16 Visualizar todas las charolas registradas en el sistema
// Documentación: https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF16

const Charola = require('../models/menu_charolas.model');

/**
 * Controlador seguro para obtener todas las charolas paginadas.
 *
 * Realiza validación de parámetros, control de límite máximo y evita exposición de errores internos.
 *
 * @async
 * @function obtenerCharolas
 * @param {import('express').Request} req - Objeto de solicitud HTTP con `page` y `limit` opcionales.
 * @param {import('express').Response} res - Objeto de respuesta HTTP.
 * @returns {Promise<void>}
 */
const obtenerCharolas = async (req, res) => {
  try {
    // Validación de parámetros de entrada
    const rawPage = req.query.page;
    const rawLimit = req.query.limit;

    const page = parseInt(rawPage, 10);
    const limit = parseInt(rawLimit, 10);

    // Validar que sean números válidos
    if (isNaN(page) || isNaN(limit) || page < 1 || limit < 1) {
      return res.status(400).json({
        mensaje: 'Parámetros inválidos: page y limit deben ser enteros positivos'
      });
    }

    // Límite máximo razonable
    const MAX_LIMIT = 20;
    const safeLimit = Math.min(limit, MAX_LIMIT);
    const offset = (page - 1) * safeLimit;

    // Obtener datos y total
    const datos = await Charola.getCharolasPaginadas(safeLimit, offset);
    const total = await Charola.getCantidadTotal();
    const totalNumber = Number(total);
    const totalPages = Math.ceil(totalNumber / safeLimit);

    // Validar que la página solicitada no exceda el total
    if (page > totalPages && totalPages > 0) {
      return res.status(400).json({
        mensaje: `La página solicitada (${page}) excede el total de páginas disponibles (${totalPages}).`
      });
    }

    // Respuesta exitosa
    res.status(200).json({
      total: totalNumber,
      page,
      limit: safeLimit,
      totalPages,
      data: datos
    });

    console.log("✔️ Consulta exitosa: Charolas obtenidas.");
  } catch (error) {
    console.error('❌ Error al obtener charolas:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

module.exports = {
  obtenerCharolas
};
