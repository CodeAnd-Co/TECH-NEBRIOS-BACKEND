const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

/**
 * Obtiene todos los datos de una charola por su ID, incluyendo relaciones con comida e hidratación.
 *
 * @async
 * @function getCharola
 * @param {number|string} charolaId - ID único de la charola a consultar.
 * @returns {Promise<Object>} Objeto JSON con los datos de la charola y sus relaciones:
 *  - `charola`: información básica de la charola.
 *  - `relacionComida`: relación con comida y cantidad otorgada.
 *  - `comida`: información de la comida relacionada.
 *  - `relacionHidratacion`: relación con hidratación y cantidad otorgada.
 *  - `hidratacion`: información de la hidratación relacionada.
 *  - o un objeto con `error` si no se encuentra o falla la consulta.
 */
const getCharola = async (charolaId) => {
  try {
    const charola = await prisma.CHAROLA.findUnique({
      where: { charolaId: Number(charolaId) },
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
      comida: relacionComida.comida ?? null,
      relacionHidratacion,
      hidratacion: relacionHidratacion.hidratacion ?? null
    };

  } catch (error) {
    console.error("Error al obtener charola:", error);
    return { error: error.message };
  }
};

module.exports = { getCharola };
