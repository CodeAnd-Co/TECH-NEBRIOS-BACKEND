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
    try {
      const resultado = await prisma.cHAROLA.findUnique({
        where: { charolaId: Number(charolaId) },
        select: { fechaCreacion: true },
      });
  
      if (!resultado) return [];
  
      return [{ fechaCreacion: resultado.fechaCreacion }];
    } catch (error) {
      throw error;
    }
  }
  
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
      throw error;
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

        const resultadoFormateado = resultado.map(item => ({
            cantidadOtorgada: item.cantidadOtorgada.toString(),
            fechaOtorgada: format(new Date(item.fechaOtorgada), 'dd/MM/yyyy'),
            nombre: item.COMIDA.nombre,
        }));
      
        return resultadoFormateado;
    } catch (error) {
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

          const resultadoFormateado = resultado.map(item => ({
              cantidadOtorgada: item.cantidadOtorgada.toString(),
              fechaOtorgada: format(new Date(item.fechaOtorgada), 'dd/MM/yyyy'),
              nombre: item.HIDRATACION.nombre,
          }));
        
            return resultadoFormateado;
      } catch (error) {
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
          throw error;
      }
  }
};
