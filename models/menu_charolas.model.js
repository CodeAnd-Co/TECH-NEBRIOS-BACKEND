// RF16 Visualizar todas las charolas registradas en el sistema
// Documentación: https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF16

const db = require('../utils/database');

/**
 * Modelo Charola que gestiona las operaciones sobre la tabla CHAROLA en la base de datos.
 * @namespace Charola
 */
const Charola = {
  /**
   * Obtiene una lista paginada de charolas ordenadas por fecha de creación descendente.
   *
   * @async
   * @function getCharolasPaginadas
   * @memberof Charola
   * @param {number} limit - Número máximo de registros a obtener.
   * @param {number} offset - Número de registros a omitir (para paginación).
   * @returns {Promise<Object[]>} Lista de objetos que contienen `nombreCharola` y `fechaCreacion`.
   *
   * @example
   * const lista = await Charola.getCharolasPaginadas(10, 0);
   */
  getCharolasPaginadas: async (limit, offset) => {
    const connection = await db();
    try {
      const rows = await connection.query(
        'SELECT nombreCharola, fechaCreacion FROM CHAROLA ORDER BY fechaCreacion DESC LIMIT ? OFFSET ?',
        [limit, offset]
      );
      return rows;
    } finally {
      connection.release();
    }
  },

  /**
   * Obtiene el número total de charolas en la base de datos.
   *
   * @async
   * @function getCantidadTotal
   * @memberof Charola
   * @returns {Promise<number>} Total de registros en la tabla CHAROLA.
   *
   * @example
   * const total = await Charola.getCantidadTotal();
   */
  getCantidadTotal: async () => {
    const connection = await db();
    try {
      const result = await connection.query('SELECT COUNT(*) as total FROM CHAROLA');
      return result[0].total;
    } finally {
      connection.release();
    }
  }
};

module.exports = Charola;
