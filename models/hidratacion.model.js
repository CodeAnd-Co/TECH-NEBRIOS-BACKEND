//RF36: Registrar un nuevo tipo de hidratación al sistema - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF36

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
    return await prisma.HIDRATACION.findMany();
  }

  /**
   * Agrega un nuevo tipo de hidratación a la tabla HIDRATACION.
   * @async
   * @method agregar
   * @returns {Promise<Object>} Registro insertado de hidratación.
   * @throws {Error} Si ocurre un error de inserción.
   */
  async agregar() {
    return await prisma.HIDRATACION.create({
      data: {
        nombre: this.nombreHidratacion,
        descripcion: this.descripcionHidratacion,
      },
    });
  }
}

module.exports = { Hidratacion };
