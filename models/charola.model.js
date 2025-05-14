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
      const id = Number(charolaID);
      const charola = await prisma.CHAROLA.findUnique({
        where: { charolaId: id },
        include: {
          // Ajusta los nombres de estas relaciones según tu schema.prisma
          charolaHidratacion: { include: { hidratacion: true } },
          charolaComida:      { include: { comida:      true } }
        }
      });

      if (!charola) {
        return { error: 'No se encontró la charola con el ID proporcionado.' };
      }

      // Tomamos la primera relación (o un objeto default si no existe)
      const relacionHidratacion = charola.charolaHidratacion[0] ?? {
        charolaId: id,
        hidratacionId: 0,
        cantidadOtorgada: 0,
        hidratacion: null
      };
      const relacionComida = charola.charolaComida[0] ?? {
        charolaId: id,
        comidaId: 0,
        cantidadOtorgada: 0,
        comida: null
      };

      return {
        charola,
        relacionHidratacion: {
          charolaId: relacionHidratacion.charolaId,
          hidratacionId: relacionHidratacion.hidratacionId,
          cantidadOtorgada: relacionHidratacion.cantidadOtorgada
        },
        hidratacion: relacionHidratacion.hidratacion,
        relacionComida: {
          charolaId: relacionComida.charolaId,
          comidaId:    relacionComida.comidaId,
          cantidadOtorgada: relacionComida.cantidadOtorgada
        },
        comida: relacionComida.comida
      };
    } catch (error) {
      console.error("Error al obtener la charola:", error);
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
  static async getCharolasPaginadas(limit, offset, estado) {
    const rows = await prisma.CHAROLA.findMany({
      where: estado ? { estado } : undefined,
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
  static async getCantidadTotal(estado) {
    const total = await prisma.CHAROLA.count({
      where: estado ? { estado } : undefined
    });
    return total;
  } 
};
