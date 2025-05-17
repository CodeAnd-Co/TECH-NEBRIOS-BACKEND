// RF5 Registrar Charola - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF5
// RF6 Buscar charola - Documentación: https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF6
// RF7 Modificar datos generales Charola - Documentación: https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF7
// RF8 Eliminar Charola - Documentación: https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF8
// RF10 Consultar información detallada de una charola - Documentación: https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF10
// RF16 Visualizar todas las charolas registradas en el sistema - Documentación: https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF16
// RF21: Consultar charolas de cambios pasados - Documentación: https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF21


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
      const charola = await prisma.CHAROLA.findUnique({
        where: { charolaId: Number(charolaID) },
        include: {
          CHAROLA_COMIDA: {
            include: { COMIDA: true }
          },
          CHAROLA_HIDRATACION: {
            include: { HIDRATACION: true }
          }
        }
      });
  
      if (!charola) {
        return { error: 'No se encontró la charola con el ID proporcionado.' };
      }
  
      const relacionComida = charola.CHAROLA_COMIDA[0] || {
        charolaId: 0,
        comidaId: 0,
        cantidadOtorgada: 0
      };
  
      const relacionHidratacion = charola.CHAROLA_HIDRATACION[0] || {
        charolaId: 0,
        hidratacionId: 0,
        cantidadOtorgada: 0
      };
  
      return {
        charola,
        relacionComida,
        comida: relacionComida.COMIDA ?? null,
        relacionHidratacion,
        hidratacion: relacionHidratacion.HIDRATACION ?? null
      };
  
    } catch (error) {
      console.error('Error al obtener charola:', error);
      return { error: error.message };
    }
  }


  /**
   * Registra una nueva charola en la base de datos.
   * @param {Object} data - Datos de la charola a registrar.
   * @param {string} data.nombre - Nombre de la charola.
   * @param {string} data.fechaCreacion - Fecha de creación de la charola.
   * @param {number} data.densidadLarva - Densidad de larvas en la charola.
   * @param {number} data.pesoCharola - Peso de la charola.
   * @param {Array} data.comidas - Lista de comidas asociadas a la charola.
   * @param {Array} data.hidrataciones - Lista de hidrataciones asociadas a la charola.
   * @returns {Promise<Object>} - Objeto con la charola creada.
   * @throws {Error} - Si ocurre un error durante la creación.
   */
  static async registrar(data = {}) {
    const {
      nombre,
      fechaCreacion,
      densidadLarva,
      pesoCharola,
      comidas = [],
      hidrataciones = []
    } = data;

    // Acumulado de comida e hidratación, comienza en 0 y suma la cantidad otorgada
    const comidaCiclo = comidas.reduce((s, c) => s + c.cantidadOtorgada, 0);
    const hidratacionCiclo = hidrataciones
      .reduce((s, h) => s + h.cantidadOtorgada, 0);

    // Llamada al cliente Prisma
    return prisma.CHAROLA.create({
      data: {
        nombreCharola: nombre,
        fechaCreacion: new Date(fechaCreacion),
        densidadLarva,
        pesoCharola,

        estado: 'activa',
        comidaCiclo,
        hidratacionCiclo,

        CHAROLA_COMIDA: {
          create: comidas.map(c => ({
            cantidadOtorgada: c.cantidadOtorgada,
            fechaOtorgada: c.fechaOtorgada
              ? new Date(c.fechaOtorgada)
              : new Date(),
            COMIDA: { connect: { comidaId: c.comidaId } }
          }))
        },
        CHAROLA_HIDRATACION: {
          create: hidrataciones.map(h => ({
            cantidadOtorgada: h.cantidadOtorgada,
            fechaOtorgada: h.fechaOtorgada
              ? new Date(h.fechaOtorgada)
              : new Date(),
            HIDRATACION: { connect: { hidratacionId: h.hidratacionId } }
          }))
        }
      },
      include: {
        CHAROLA_COMIDA: { include: { COMIDA: true } },
        CHAROLA_HIDRATACION: { include: { HIDRATACION: true } }
      }
    });
  }

  static async editarCharola() {
    try{
      
    } catch (error){
      console.error('Error al editar la charola:', error);
      return { error: 'Error al editar la charola' };
    }
  }

  static async eliminarCharola(charolaID) {
    try {
      const id = Number(charolaID);
  
      // Verificar que la charola exista antes de intentar borrar
      const existe = await prisma.CHAROLA.findUnique({
        where: { charolaId: id }
      });
  
      if (!existe) {
        return { error: 'No se encontró la charola para eliminar.' };
      }
  
      // Eliminar relaciones con hidratación
      await prisma.CHAROLA_HIDRATACION.deleteMany({
        where: { charolaId: id }
      });
  
      // Eliminar relaciones con comida
      await prisma.CHAROLA_COMIDA.deleteMany({
        where: { charolaId: id }
      });
  
      // Eliminar la charola principal
      await prisma.CHAROLA.delete({
        where: { charolaId: id }
      });
  
      return {
        mensaje: 'Charola eliminada correctamente',
        idEliminado: id
      };
  
    } catch (error) {
      console.error('Error al eliminar la charola:', error);
      return { error: 'Error al eliminar la charola' };
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