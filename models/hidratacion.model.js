//RF40: Editar un tipo de hidratación en el sistema - https://codeandco-wiki.netlify.app/docs/next/proyectos/larvas/documentacion/requisitos/RF40
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

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
    try {
      return await prisma.HIDRATACION.findMany();
    } catch (error) {
      throw new Error('Error al obtener hidratación: ' + error.message);
    }
  }

      /**
   * Actualiza un tipo de hidratacion existente en la tabla HIDRATACION.
   * @async
   * @method actualizar
   * @returns {Promise<Object>} Registro actualizado del alimento.
   * @throws {Error} Si ocurre un error de consulta o conexión.
   */
      async actualizar() {
        return await prisma.HIDRATACION.update({
          where: { hidratacionId: this.idHidratacion },
          data: {
            nombre:      this.nombreHidratacion,
            descripcion: this.descripcionHidratacion,
          },
        });
      }
}
module.exports = { Hidratacion };