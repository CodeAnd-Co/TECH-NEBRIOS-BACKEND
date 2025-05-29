// RF5 Registrar Charola - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF5
// RF6 Buscar charola - Documentación: https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF6
// RF7 Modificar datos generales Charola - Documentación: https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF7
// RF8 Eliminar Charola - Documentación: https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF8
// RF10 Consultar información detallada de una charola - Documentación: https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF10
// RF16 Visualizar todas las charolas registradas en el sistema - Documentación: https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF16
// RF21: Consultar charolas de cambios pasados - Documentación: https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF21
// RF26 Registrar la alimentación de la charola - Documentación: https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF26

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
  static async registrar(data) {
    const {
      nombre,
      fechaCreacion,
      densidadLarva,
      pesoCharola,
      comidas = [],
      hidrataciones = []
    } = data;

    // Acumulado de comida e hidratación, comienza en 0 y suma la cantidad otorgada
    const comidaCiclo = comidas.reduce((suma, comida) => suma + comida.cantidadOtorgada, 0);
    const hidratacionCiclo = hidrataciones
      .reduce((suma, hidratacion) => suma + hidratacion.cantidadOtorgada, 0);

    const fecha = new Date(fechaCreacion);
    // Llamada al cliente Prisma
    return prisma.CHAROLA.create({
      data: {
        nombreCharola: nombre,
        fechaCreacion: fecha,
        fechaActualizacion: fecha,
        densidadLarva,
        pesoCharola,

        estado: 'activa',
        comidaCiclo,
        hidratacionCiclo,

        CHAROLA_COMIDA: {
          create: comidas.map(charola => ({
            cantidadOtorgada: charola.cantidadOtorgada,
            fechaOtorgada: charola.fechaOtorgada
              ? new Date(charola.fechaOtorgada)
              : new Date(),
            COMIDA: { connect: { comidaId: charola.comidaId } }
          }))
        },
        CHAROLA_HIDRATACION: {
          create: hidrataciones.map(hidratacion => ({
            cantidadOtorgada: hidratacion.cantidadOtorgada,
            fechaOtorgada: hidratacion.fechaOtorgada
              ? new Date(hidratacion.fechaOtorgada)
              : new Date(),
            HIDRATACION: { connect: { hidratacionId: hidratacion.hidratacionId } }
          }))
        }
      },
      include: {
        CHAROLA_COMIDA: { include: { COMIDA: true } },
        CHAROLA_HIDRATACION: { include: { HIDRATACION: true } }
      }
    });
  }

  static async editarCharola(charola, alimento, hidratacion) {
    try{
      await prisma.CHAROLA.update({
        where: {
          charolaId: charola.get('charolaId'),
        },
        data: {
          nombreCharola: charola.get('nombreCharola'),
          fechaCreacion: charola.get('fechaCreacion'),
          densidadLarva: charola.get('densidadLarva'),
          estado: charola.get('estado'),
          fechaActualizacion: charola.get('fechaActualizacion'),
        },
      });

      const ultimoRegistroComida = await prisma.CHAROLA_COMIDA.findFirst({
        where: {
          charolaId: charola.get('charolaId'),
        },
        orderBy: {
          id: 'desc',
        },
      });

      if (ultimoRegistroComida) {
        await prisma.CHAROLA_COMIDA.update({
          where: {
            id: ultimoRegistroComida.id,
          },
          data: {
            comidaId: alimento.get('alimentoId'),
            cantidadOtorgada: alimento.get('cantidadOtorgada'),
            fechaOtorgada: alimento.get('fechaOtorgada'),
          },
        });
      }

        const ultimoRegistroHidratacion = await prisma.CHAROLA_HIDRATACION.findFirst({
        where: {
          charolaId: charola.get('charolaId'),
        },
        orderBy: {
          id: 'desc',
        },
      });

      if (ultimoRegistroHidratacion) {
        await prisma.CHAROLA_HIDRATACION.update({
          where: {
            id: ultimoRegistroHidratacion.id,
          },
          data: {
            hidratacionId: hidratacion.get('hidratacionId'),
            cantidadOtorgada: hidratacion.get('cantidadOtorgada'),
            fechaOtorgada: hidratacion.get('fechaOtorgada'),
          },
        });
      }

      return 200;

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

  /**
   * Alimenta la charola: crea registro en CHAROLA_HIDRATACION y
   * luego actualiza hidratacionCiclo y fechaActualizacion en CHAROLA.
   * @param {{charolaId:number, hidratacionId:number, cantidadOtorgada:number}} params
   */
  static async hidratar({ charolaId, hidratacionId, cantidadOtorgada }) {
    const fecha = new Date();

    return prisma.$transaction(async tx => {
      // 1) Crear la relación comida y traer también la comida relacionada
      const rel = await tx.CHAROLA_HIDRATACION.create({
        data: {
          charolaId,
          hidratacionId,
          cantidadOtorgada,
          fechaOtorgada: fecha
        },
        include: {
          HIDRATACION: true
        }
      });

      // 2) Actualizar la charola
      const updated = await tx.CHAROLA.update({
        where: { charolaId },
        data: {
          hidratacionCiclo: { increment: cantidadOtorgada },
          fechaActualizacion: fecha
        }
      });

      return {
        relacion: rel,
        charola: updated
      };
    });
  }

  /**
   * Alimenta la charola: crea registro en CHAROLA_COMIDA y
   * luego actualiza comidaCiclo y fechaActualizacion en CHAROLA.
   * @param {{charolaId:number, comidaId:number, cantidadOtorgada:number}} params
   */
  static async alimentar({ charolaId, comidaId, cantidadOtorgada }) {
    const fecha = new Date();

    return prisma.$transaction(async tx => {
      // 1) Crear la relación comida y traer también la comida relacionada
      const rel = await tx.CHAROLA_COMIDA.create({
        data: {
          charolaId,
          comidaId,
          cantidadOtorgada,
          fechaOtorgada: fecha
        },
        include: {
          COMIDA: true
        }
      });

      // 2) Actualizar la charola
      const updated = await tx.CHAROLA.update({
        where: { charolaId },
        data: {
          comidaCiclo: { increment: cantidadOtorgada },
          fechaActualizacion: fecha
        }
      });

      return {
        relacion: rel,
        charola: updated
      };
    });
  }
};