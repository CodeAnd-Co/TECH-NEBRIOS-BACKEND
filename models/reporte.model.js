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
          pesoCharola: true
        }
      });

      // Formateado de fechas a dd/MM/yyyy
      const resultadoFormateado = resultado.map((charola) => ({
        ...charola,
        fechaActualizacion: charola.fechaActualizacion
          ? format(new Date(charola.fechaActualizacion), 'dd/MM/yyyy')
          : null,
        fechaCreacion: charola.fechaCreacion
          ? format(new Date(charola.fechaCreacion), 'dd/MM/yyyy')
          : null,
      }));

      return resultadoFormateado;
    } catch (error) {
      console.error("[Model] Error al obtener información de las charolas:", error);
      throw error;      
    }
  }
};

module.exports = ReporteModel;

