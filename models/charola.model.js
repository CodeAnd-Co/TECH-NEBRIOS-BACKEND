// models/charola.model.js
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

module.exports = class Charola {
  /**
   * Obtiene una charola con sus relaciones de comida e hidratación.
   * @param {number|string} charolaID
   * @returns {Promise<Object>}
   */
  static async getCharola(charolaID) {
    try {
      const charola = await prisma.CHAROLA.findUnique({
        where: { charolaId: Number(charolaID) },
        include: {
          CHAROLA_COMIDA: {
            include: { COMIDA: true }
          },
          CHAROLA_HIDRATACION: {
            include: { HIDRATACION: true }
          }
        }
      });
  
      if (!charola) {
        return { error: 'No se encontró la charola con el ID proporcionado.' };
      }
  
      const relacionComida = charola.CHAROLA_COMIDA[0] || {
        charolaId: 0,
        comidaId: 0,
        cantidadOtorgada: 0
      };
  
      const relacionHidratacion = charola.CHAROLA_HIDRATACION[0] || {
        charolaId: 0,
        hidratacionId: 0,
        cantidadOtorgada: 0
      };
  
      return {
        charola,
        relacionComida,
        comida: relacionComida.comida ?? null,
        relacionHidratacion,
        hidratacion: relacionHidratacion.hidratacion ?? null
      };
  
    } catch (error) {
      console.error("Error al obtener charola:", error);
      return { error: error.message };
    }
  }

    /**
   * Registra una nueva charola.
   * @param {{ nombre: string, fecha: Date, alimentacion: number, peso: number, hidratacion: number }} data
   * @returns {Promise<Object>} El registro creado.
   */
  static async registrarCharola(data) {
    try {
      const nueva = await prisma.CHAROLA.create({
        data: {
          nombre: data.nombre,
          fecha: data.fecha,
          alimentacion: data.alimentacion,
          peso: data.peso,
          hidratacion: data.hidratacion
        }
      });
      return nueva;
    } catch (error) {
      console.error("Error al registrar la charola:", error);
      throw error;
    }
  }

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
  static async getCharolasPaginadas(limit, offset) {
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
  }

  /**
   * Obtiene el número total de charolas en la base de datos.
   *
   * @async
   * @function getCantidadTotal
   * @memberof Charola
   * @returns {Promise<number>} Total de registros en la tabla CHAROLA.
   */
  static async getCantidadTotal() {
    const total = await prisma.CHAROLA.count();
    return total;
  } 
};