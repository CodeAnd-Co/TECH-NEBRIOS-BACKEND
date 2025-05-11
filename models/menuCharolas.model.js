// RF16 Visualizar todas las charolas registradas en el sistema
// Documentación: https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF16

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

/**
 * Modelo Charola que gestiona las operaciones sobre la tabla CHAROLA con Prisma.
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
   */
  getCharolasPaginadas: async (limit, offset) => {
    const rows = await prisma.CHAROLA.findMany({
      select: {
        charolaId: true,
        nombreCharola: true,
        fechaCreacion: true
      },
      orderBy: {
        fechaCreacion: 'desc'
      },
      skip: offset,
      take: limit
    });
    return rows;
  },

  /**
   * Obtiene el número total de charolas en la base de datos.
   *
   * @async
   * @function getCantidadTotal
   * @memberof Charola
   * @returns {Promise<number>} Total de registros en la tabla CHAROLA.
   */
  getCantidadTotal: async () => {
    const total = await prisma.CHAROLA.count();
    return total;
  }
};

module.exports = Charola;
