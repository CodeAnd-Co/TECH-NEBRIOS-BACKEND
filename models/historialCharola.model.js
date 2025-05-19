// models/historialCharola.model.js
const { PrismaClient } = require('../generated/prisma');
const { format } = require('date-fns');
const prisma = new PrismaClient();

const database = require('../utils/database');

module.exports = class HistorialCharola {
  /**
   * Obtiene los ancestros (padres) de una charola.
   * @param {number|string} charolaId
   * @returns {Promise<Array<{ charolaAncestro: number, nombreCharola: string }>>}
   */
  static async obtenerFechaCreacion(charolaId) {
    const conexion = await database();

    try {
      const resultado = await conexion.query(
        'SELECT fechaCreacion FROM CHAROLA WHERE charolaId = ?',
        [charolaId]
      );
      return resultado;
    } finally {
      conexion.release();
    }
  }
  static async obtenerAncestros(charolaId) {
    const conexion = await database();

    try {
      const relaciones = await conexion.query(
        'SELECT a.charolaHija, c.nombreCharola FROM CHAROLA_CHAROLA a JOIN CHAROLA c ON a.charolaHija = c.charolaId WHERE a.charolaAncestro = ?',
        [charolaId]
      );
      
      return relaciones;
    } finally {
      conexion.release();
    }
  }

  /**
     * @description Método para obtener el historial de la alimentación de una charola.
     * @param {*} charolaId 
     * @returns {Array} - Lista con todos los registros de la alimentación que se le ha otorgado.
     */
  static async historialAlimentacion(charolaId) {
    try{
        const resultado = await prisma.CHAROLA_COMIDA.findMany({
            where: {
              charolaId: charolaId,
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

        const resultadoFormateado = resultado.map(item => ({
            cantidadOtorgada: item.cantidadOtorgada.toString(),
            fechaOtorgada: format(new Date(item.fechaOtorgada), 'dd/MM/yyyy'),
            nombre: item.COMIDA.nombre,
        }));
      
        return resultadoFormateado;
    } catch (error) {
        console.error('[Model] Error al obtener el historial de alimentacion de la charola: ', error);
        throw error;      
    }
  }

  /**
   * @description Método para obtener el historial de la hidratación de una charola.
   * @param {*} charolaId 
   * @returns {Array} - Lista con todos los registros de la alimentación que se le ha otorgado.
   */
  static async historialHidratacion(charolaId) {
      try{
          const resultado = await prisma.CHAROLA_HIDRATACION.findMany({
              where: {
                charolaId: charolaId,
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

          const resultadoFormateado = resultado.map(item => ({
              cantidadOtorgada: item.cantidadOtorgada.toString(),
              fechaOtorgada: format(new Date(item.fechaOtorgada), 'dd/MM/yyyy'),
              nombre: item.HIDRATACION.nombre,
          }));
        
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
      try{
          const resultado = await prisma.CHAROLA.findUnique({
              where: {
                  charolaId: charolaId,
              },
              select: {
                  estado: true,
                  fechaActualizacion: true,
              },
          });

          const resultadoFormateado = {
            ...resultado,
            fechaActualizacion: resultado.fechaActualizacion
              ? format(new Date(resultado.fechaActualizacion), 'dd/MM/yyyy')
              : null,
          };
          
          return resultadoFormateado;
      } catch (error) {
          console.error('[Model] Error al obtener el historial de hidratacion de la charola: ', error);
          throw error;
      }
  }

 /**
   * Inserta una tupla en CHAROLA_CHAROLA
   * @param {{charolaHija: number, charolaAncestro: number}} data
   */
  static async asignarAncestro({ charolaHija, charolaAncestro }) {
    return prisma.CHAROLA_CHAROLA.create({
      data: { charolaHija, charolaAncestro }
    });
  }
};
