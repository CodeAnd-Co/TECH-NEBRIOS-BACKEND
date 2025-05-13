const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

/**
 * Elimina una charola y todas sus relaciones asociadas (comida e hidratación).
 *
 * @async
 * @function eliminarCharola
 * @param {number|string} charolaID - ID de la charola a eliminar.
 * @returns {Promise<Object>} Objeto con mensaje de éxito o error si la charola no existe.
 */
const eliminarCharola = async (charolaID) => {
  try {
    const id = Number(charolaID);

    // Verificar que la charola exista antes de intentar borrar
    const existe = await prisma.cHAROLA.findUnique({
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
};

module.exports = { eliminarCharola };