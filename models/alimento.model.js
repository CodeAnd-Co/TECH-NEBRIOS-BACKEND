//RF25: Eliminar un tipo de comida en el sistema - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF25

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

/**
 * Modelo Alimento usando Prisma.
 * @module models/alimento
 */
class Alimento {
  /**
   * Crea una nueva instancia de Alimento.
   * @constructor
   * @param {number} idAlimento - Identificador del alimento.
   * @param {string} nombreAlimento - Nombre descriptivo del alimento.
   * @param {string} descripcionAlimento - Descripción del alimento.
   */
  constructor(idAlimento, nombreAlimento, descripcionAlimento) {
    this.idAlimento = idAlimento;
    this.nombreAlimento = nombreAlimento;
    this.descripcionAlimento = descripcionAlimento;
  }

  /**
   * Obtiene todos los alimentos de la tabla COMIDA.
   * @async
   * @method obtener
   * @returns {Promise<Array<Object>>} Lista de registros de alimentos.
   * @throws {Error} Si ocurre un error de consulta o conexión.
   */
  async obtener() {
    try {
      return await prisma.COMIDA.findMany();
    } catch (error) {
      throw error;
    }
  }

    /**
     * Actualiza un alimento existente en la tabla COMIDA.
     * @async
     * @method actualizar
     * @returns {Promise<Object>} Registro actualizado del alimento.
     * @throws {Error} Si ocurre un error de consulta o conexión.
     */
  async actualizar() {
    try {
      const actualizado = await prisma.COMIDA.update({
        where: { comidaId: this.idAlimento },
        data: {
          nombre:      this.nombreAlimento,
          descripcion: this.descripcionAlimento,
        },
      });
      return actualizado;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = { Alimento };