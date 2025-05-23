
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

const db = require('../utils/database');

/**
 * Modelo Hidratación usando Prisma.
 * @module models/hidratacion
 */
class Hidratacion {
  /**
   * Crea una nueva instancia de Hidratación.
   * @constructor
   * @param {number} idHidratacion - Identificador de Hidratación.
   * @param {string} nombreHidratacion - Nombre descriptivo de Hidratación.
   * @param {string} descripcionHidratacion - Descripción de Hidratación.
   */
  constructor(idHidratacion, nombreHidratacion, descripcionHidratacion) {
    this.idHidratacion = idHidratacion;
    this.nombreHidratacion = nombreHidratacion;
    this.descripcionHidratacion = descripcionHidratacion;
  }

  /**
   * Obtiene toda la hidtatación de la tabla HIDRATACION.
   * @async
   * @method obtener
   * @returns {Promise<Array<Object>>} Lista de registros de hidtatación.
   * @throws {Error} Si ocurre un error de consulta o conexión.
   */
  async obtener() {
    return await prisma.HIDRATACION.findMany();
  }

  /**
 * Elimina un hidrato de la tabla HIDRATACION.
 * @async
 * @method eliminar
 * @returns {Promise<Object>} Registro eliminado del hidrato.
 * @throws {Error} Si ocurre un error de consulta o conexión.
 */
  async eliminar() {
    console.log('llegando a modelo');
    const resultado = await prisma.HIDRATACION.delete({
      where: { hidratacionId: this.idHidratacion },
    });
  
    console.log('[Modelo] Resultado de la eliminación:', resultado);
  
    return resultado;
  }  
}

module.exports = { Hidratacion };