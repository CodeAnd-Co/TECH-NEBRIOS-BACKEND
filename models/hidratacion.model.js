//RF40: Editar un tipo de hidratación en el sistema - https://codeandco-wiki.netlify.app/docs/next/proyectos/larvas/documentacion/requisitos/RF40
// RF41 Eliminar un tipo de hidratación en el sistema - Documentación: https://codeandco-wiki.netlify.app/docs/next/proyectos/larvas/documentacion/requisitos/RF41

const { th } = require('date-fns/locale');
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
      
  /**
    * Verifica si un alimento está agregado a alguna charola.
    * @async
    * @method isAgregada
    * @returns {Promise<number>} Número de asignaciones de la hidratación a las charolas.
    * @throws {Error} Si ocurre un error de consulta o conexión.
    */
  async isAgregada() {
    try {
      const asignaciones = await prisma.CHAROLA_HIDRATACION.count({
          where: { hidratacionId: this.idHidratacion },
        });
        return asignaciones;
    } catch (error) {
      throw new Error('Error al verificar asignaciones de la hidratación: ' + error.message);
    }
  }

  /**
   * Elimina un alimento de la tabla COMIDA.
   * @async
   * @method eliminar
   * @returns {Promise<Object>} Registro eliminado de hidratación.
    * @throws {Error} Si ocurre un error de consulta o conexión.
    */
  async eliminar() {
    try {
     return await prisma.HIDRATACION.delete({
       where: { hidratacionId: this.idHidratacion },
     })
   } catch (error) {
     throw new Error('Error al eliminar hidratación: ' + error.message);
   }
 }

}
module.exports = { Hidratacion };