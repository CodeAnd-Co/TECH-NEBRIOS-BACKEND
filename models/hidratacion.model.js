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

}

module.exports = { Hidratacion };