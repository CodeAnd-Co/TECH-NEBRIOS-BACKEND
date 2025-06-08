// RF29: Visualizar la información del Frass obtenido - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF29
// RF30: Editar la información del Frass obtenido - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF30

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
                charolaId: true,
              nombreCharola: true,
            },
          },
          FRAS: {
            select: {
                frasId: true,
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

    /**
     * Actualiza los gramos generados de Fras para una charola específica.
     * @async 
     * @param {number} charolaId - El ID de la charola para la cual se actualizarán los gramos.
     * @param {number} nuevosGramos - El nuevo valor de gramos generados a actualizar.
     * @return {Promise<Array>} Retorna una lista de objetos que contienen los gramos actualizados de Fras.
     * @throws {Error} Lanza un error si ocurre un problema al actualizar los gramos en la base de datos.
     * */
    async actualizarGramos( charolaId, nuevosGramos ) {
        try {
            await prisma.fRAS.updateMany({
            where: {
            CHAROLA_FRAS: {
                some: {
                charolaId: Number(charolaId)
                }
            }
            },
            data: {
            gramosGenerados: nuevosGramos
            }
        })
const frasActualizados = await prisma.fRAS.findMany({
  where: {
    CHAROLA_FRAS: {
      some: {
        charolaId: Number(charolaId)
      }
    }
  },
  select: {
    frasId: true,
    gramosGenerados: true,
    fechaRegistro: true,
    CHAROLA_FRAS: {
      select: {
        charolaId: true,
        CHAROLA: {
          select: { nombreCharola: true }
        }
      }
    }
  }
});

            
        return frasActualizados;

        } catch (error) {
            throw new Error('Error al actualizar los gramos de Fras: ' + error.message);
        }
    }
}

module.exports = { Fras };