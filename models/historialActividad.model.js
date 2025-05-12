const { PrismaClient } = require('../generated/prisma');
const { format } = require('date-fns');

const prisma = new PrismaClient();

//RF18 Historial de actividad: https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF18
const historialActividadModel = {
    /**
     * @description Método para obtener el historial de la alimentación de una charola.
     * @param {*} charolaId 
     * @returns {Array} - Lista con todos los registros de la alimentación que se le ha otorgado.
     */
    historialAlimentacion: async (charolaId) => {
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
            console.error("[Model] Error al obtener el historial de alimentacion de la charola: ", error);
            throw error;      
        }
    },

    /**
     * @description Método para obtener el historial de la hidratación de una charola.
     * @param {*} charolaId 
     * @returns {Array} - Lista con todos los registros de la alimentación que se le ha otorgado.
     */
    historialHidratacion: async (charolaId) => {
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
            console.error("[Model] Error al obtener el historial de hidratacion de la charola: ", error);
            throw error;
        }
    },

    /**
     * @description Método para obtener el estado de una charola y su última fecha de modificación.
     * @param {*} charolaId 
     * @returns {JSON} - Json con la información solicitada de la charola.
     */
    estadoCharola: async (charolaId) => {
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
            console.error("[Model] Error al obtener el historial de hidratacion de la charola: ", error);
            throw error;
        }
    }
}

module.exports = historialActividadModel;
