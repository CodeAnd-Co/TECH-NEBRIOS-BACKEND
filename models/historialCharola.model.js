// models/historialCharola.model.js
const { PrismaClient } = require('../generated/prisma');
const { format } = require('date-fns');
const logger = require('../utils/logger');
const prisma = new PrismaClient();

const database = require('../utils/database');

module.exports = class HistorialCharola {
  /**
 * Obtiene la fecha de creación de una charola específica.
 *
 * @async
 * @function obtenerFechaCreacion
 * @param {number|string} charolaId - El ID de la charola cuya fecha de creación se desea consultar.
 * @returns {Promise<Array<{ fechaCreacion: Date }>>} Una promesa que resuelve con un arreglo que contiene
 *          un objeto con la propiedad `fechaCreacion`, o un arreglo vacío si no se encuentra la charola.
 * @throws {Error} Lanza un error si ocurre una excepción durante la consulta a la base de datos.
 */
  static async obtenerFechaCreacion(charolaId) {
    try {
      const resultado = await prisma.cHAROLA.findUnique({
        where: { charolaId: Number(charolaId) },
        select: { fechaCreacion: true },
      });

      if (!resultado) return [];

      return [{ fechaCreacion: resultado.fechaCreacion }];
    } catch (error) {
      logger.error('Error en obtenerFechaCreacion', { error });
      throw error;
    }
  }

  /**
   * Obtiene los ancestros directos de una charola (relaciones madre/abuela, etc).
   *
   * @async
   * @function obtenerAncestros
   * @param {number|string} charolaId - El ID de la charola hija cuya línea ancestral se desea consultar.
   * @returns {Promise<Array<{ charolaAncestro: number, nombreCharola: string }>>} Una promesa que resuelve con un arreglo
   *          de objetos, donde cada uno representa una charola ancestro con su ID y nombre.
   * @throws {Error} Lanza un error si ocurre una excepción durante la consulta a la base de datos.
   */
  static async obtenerAncestros(charolaId) {
    try {
      const resultado = await prisma.cHAROLA_CHAROLA.findMany({
        where: {
          charolaHija: Number(charolaId),
        },
        select: {
          charolaAncestro: true,
          CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA: {
            select: {
              nombreCharola: true,
            },
          },
        },
      });

      // Formatear resultado como el query original
      return resultado.map(relacion => ({
        charolaAncestro: relacion.charolaAncestro,
        nombreCharola: relacion.CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA.nombreCharola,
      }));
    } catch (error) {
      logger.error('Error en obtenerAncestros', { error });
      throw error;
    }
  }

  /**
     * @description Método para obtener el historial de la alimentación de una charola.
     * @param {*} charolaId 
     * @returns {Array} - Lista con todos los registros de la alimentación que se le ha otorgado.
     */
  static async historialAlimentacion(charolaId) {
    try {
      const resultado = await prisma.CHAROLA_COMIDA.findMany({
        where: {
          charolaId: charolaId,
        },
        orderBy: {
          fechaOtorgada: 'desc',
        },
        select: {
          cantidadOtorgada: true,
          fechaOtorgada: true,
          COMIDA: {
            select: {
              nombre: true,
            },
          },
        },
      });

        const resultadoFormateado = resultado.map(item => {
          const isoString = item.fechaOtorgada.toISOString();
          const [año, mes, dia] = isoString.split('T')[0].split('-');

          return {
            cantidadOtorgada: item.cantidadOtorgada.toString(),
            fechaOtorgada: `${dia}/${mes}/${año}`,
            nombre: item.COMIDA.nombre,
          };
        });
      
        return resultadoFormateado;
    } catch (error) {
      logger.error('Error en historialAlimentacion', { error });
      throw error;
    }
  }

  /**
   * @description Método para obtener el historial de la hidratación de una charola.
   * @param {*} charolaId 
   * @returns {Array} - Lista con todos los registros de la alimentación que se le ha otorgado.
   */
  static async historialHidratacion(charolaId) {
    try {
      const resultado = await prisma.CHAROLA_HIDRATACION.findMany({
        where: {
          charolaId: charolaId,
        },
        orderBy: {
          fechaOtorgada: 'desc',
        },
        select: {
          cantidadOtorgada: true,
          fechaOtorgada: true,
          HIDRATACION: {
            select: {
              nombre: true,
            },
          },
        },
      });

          const resultadoFormateado = resultado.map(item => {
            const isoString = item.fechaOtorgada.toISOString();
            const [año, mes, dia] = isoString.split('T')[0].split('-');

            return {
              cantidadOtorgada: item.cantidadOtorgada.toString(),
              fechaOtorgada: `${dia}/${mes}/${año}`,
              nombre: item.HIDRATACION.nombre,
            };
          });
        
            return resultadoFormateado;
      } catch (error) {
          console.error('[Model] Error al obtener el historial de hidratacion de la charola: ', error);
          throw error;
      }
  }

  /**
   * @description Método para obtener el estado de una charola y su última fecha de modificación.
   * @param {*} charolaId 
   * @returns {JSON} - Json con la información solicitada de la charola.
   */
  static async estadoCharola(charolaId) {
    try {
      const resultado = await prisma.CHAROLA.findUnique({
        where: {
          charolaId: charolaId,
        },
        select: {
          estado: true,
          fechaActualizacion: true,
        },
      });

          const fechaStr = resultado.fechaActualizacion.toISOString();
          const [año, mes, dia] = fechaStr.split('T')[0].split('-');

          const resultadoFormateado = {
            ...resultado,
            fechaActualizacion: `${dia}/${mes}/${año}`,
          };

          return resultadoFormateado;
      } catch (error) {
          console.error('[Model] Error al obtener el historial de hidratacion de la charola: ', error);
          throw error;
      }
  }
};
