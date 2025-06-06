// RF29: Visualizar la información del Frass obtenido - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF29

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

class Fras {

    /**
        * Obtiene todos los registros de Fras de la base de datos.
        * @async
        * @returns {Promise<Array>} Retorna una lista de objetos que contienen la información de las charolas y sus respectivos registros de Fras.
        * @throws {Error} Lanza un error si ocurre un problema al consultar la base de datos.
     */
    async obtener() {
        try {
            const resultado = await prisma.cHAROLA_FRAS.findMany({
        select: {
          CHAROLA: {
            select: {
              nombreCharola: true,
            },
          },
          FRAS: {
            select: {
              fechaRegistro: true,
              gramosGenerados: true,
            },
          },
        },
      });
            return resultado;
        } catch (error) {
            throw new Error('Error al obtener los registros de Fras: ' + error.message);
        }
    }
}

module.exports = { Fras };