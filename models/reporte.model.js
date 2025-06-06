const { PrismaClient } = require('../generated/prisma');
const { format } = require('date-fns');

const prisma = new PrismaClient();

const ReporteModel = {
  /**
   * @description Metodo para realizar la consulta de la información de las charolas.
   * @returns {Array} - Array con la informacion de la consulta de la BD
  */
  // RF11:
  // https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF11
  async obtenerDatos() {
    try {
      // Consulta con ORM Prisma
      const resultado = await prisma.CHAROLA.findMany({
        select: {
          nombreCharola: true,
          charolaId: true,
          comidaCiclo: true,
          hidratacionCiclo: true,
          fechaActualizacion: true,
          estado: true,
          densidadLarva: true,
          fechaCreacion: true,
          CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA: {
            select: {
              CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA: {
                select: {
                  nombreCharola: true
                }
              }
            }
          }
        }
      });

      // Formateado de fechas a dd/MM/yyyy y la lista de Ancestros
      const resultadoFormateado = resultado.map(
        ({ CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA, ...charola }) => ({
          ...charola,
          fechaActualizacion: charola.fechaActualizacion
            ? format(new Date(charola.fechaActualizacion), 'dd/MM/yyyy')
            : null,
          fechaCreacion: charola.fechaCreacion
            ? format(new Date(charola.fechaCreacion), 'dd/MM/yyyy')
            : null,
          charolaAncestros: CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA.map(
            (rel) => rel.CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA.nombreCharola
          )
        })
      );     

      return resultadoFormateado;
    } catch (error) {
      throw error;
    }
  },

  async obtenerEliminadas(){
    try{
      const resultado = await prisma.ELIMINACION_MOTIVO.findMany({
        select: {
          user: true,
          charola_nombre: true,
          motivo: true,
          fecha_eliminacion: true,
        }
      });

      const resultadoFormateado = resultado.map(item => ({
        user: item.user,
        charola_nombre: item.charola_nombre,
        motivo: item.motivo,
        fechaEliminacion: format(new Date(item.fecha_eliminacion), 'dd/MM/yyyy'),
    }));

      return resultadoFormateado;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
};

module.exports = ReporteModel;

