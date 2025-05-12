const { PrismaClient } = require('../generated/prisma');
const { format } = require('date-fns');

const prisma = new PrismaClient();

const historialActividadModel = {
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
            
            return resultado;
        } catch (error) {
            console.error("[Model] Error al obtener el historial de alimentacion de la charola: ", error);
            throw error;      
        }
    },

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

            return resultado;
        } catch (error) {
            console.error("[Model] Error al obtener el historial de hidratacion de la charola: ", error);
            throw error;
        }
    },

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
            
            if (!resultado) return [];

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
