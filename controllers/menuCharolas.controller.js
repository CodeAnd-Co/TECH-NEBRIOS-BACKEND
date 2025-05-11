// RF16 Visualizar todas las charolas registradas en el sistema
// Documentación: https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF16

const Charola = require('../models/menuCharolas.model');

/**
 * Controlador seguro para obtener todas las charolas paginadas con filtro opcional por estado.
 *
 * Realiza validación de parámetros, control de límite máximo, y evita exposición de errores internos.
 *
 * @async
 * @function obtenerCharolas
 * @param {import('express').Request} req - Objeto de solicitud HTTP con `page`, `limit` y `estado` opcionales.
 * @param {import('express').Response} res - Objeto de respuesta HTTP.
 * @returns {Promise<void>}
 */
const obtenerCharolas = async (req, res) => {
  try {
    const rawPage = req.query.page;
    const rawLimit = req.query.limit;
    const estado = req.query.estado; // estado opcional: "activa" o "pasada"

    const page = parseInt(rawPage, 10);
    const limit = parseInt(rawLimit, 10);

    // Validación de page y limit
    if (isNaN(page) || isNaN(limit) || page < 1 || limit < 1) {
      return res.status(400).json({
        mensaje: 'Parámetros inválidos: page y limit deben ser enteros positivos'
      });
    }

    // Validación opcional del estado
    const estadosValidos = ['activa', 'pasada'];
    if (estado && !estadosValidos.includes(estado)) {
      return res.status(400).json({
        mensaje: `Estado inválido. Usa 'activa' o 'pasada'.`
      });
    }

    const MAX_LIMIT = 1000; // Aumentado para scroll infinito
    const safeLimit = Math.min(limit, MAX_LIMIT);
    const offset = (page - 1) * safeLimit;

    // Consulta al modelo
    const datos = await Charola.getCharolasPaginadas(safeLimit, offset, estado);
    const total = await Charola.getCantidadTotal(estado);
    const totalPages = Math.ceil(total / safeLimit);

    if (page > totalPages && totalPages > 0) {
      return res.status(400).json({
        mensaje: `La página solicitada (${page}) excede el total de páginas disponibles (${totalPages}).`
      });
    }

    // Respuesta exitosa
    res.status(200).json({
      total,
      page,
      limit: safeLimit,
      totalPages,
      data: datos
    });

    console.log(`✔️ Charolas obtenidas con estado='${estado || 'todos'}'. Página ${page}/${totalPages}`);
  } catch (error) {
    console.error('❌ Error al obtener charolas:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

module.exports = {
  obtenerCharolas
};