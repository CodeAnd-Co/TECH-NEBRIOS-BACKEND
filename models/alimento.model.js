//RF23: Registrar un nuevo tipo de comida en el sistema - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF23
//RF24: Editar un tipo de comida en el sistema - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF24

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
    return await prisma.COMIDA.findMany();
  }

  /**
   * Agrega un nuevo alimento a la tabla COMIDA.
   * @async
   * @method agregar
   * @returns {Promise<Object>} Registro insertado del alimento.
   * @throws {Error} Si ocurre un error de inserción.
   */
  async agregar() {
    return await prisma.COMIDA.create({
      data: {
        nombre: this.nombreAlimento,
        descripcion: this.descripcionAlimento,
      },
    });
  }

  /**
 * Actualiza un alimento existente en la tabla COMIDA.
 * @async
 * @method actualizar
 * @returns {Promise<Object>} Registro actualizado del alimento.
 * @throws {Error} Si ocurre un error de consulta o conexión.
 */
  async actualizar() {
    return await prisma.COMIDA.update({
      where: { comidaId: this.idAlimento },
      data: {
        nombre: this.nombreAlimento,
        descripcion: this.descripcionAlimento,
      },
    });
  }

  /**
   * Verifica si un alimento está agregado a alguna charola.
   * @async
   * @method isAgregada
   * @returns {Promise<number>} Número de asignaciones del alimento a charolas.
   * @throws {Error} Si ocurre un error de consulta o conexión.
   */
  async isAgregada() {
    try {
      const asignaciones = await prisma.CHAROLA_COMIDA.count({
          where: { comidaId: this.idAlimento },
        });
        return asignaciones;
    } catch (error) {
      throw new Error('Error al verificar asignaciones de alimento');
    }
  }

  /**
   * Elimina un alimento de la tabla COMIDA.
   * @async
   * @method eliminar
   * @returns {Promise<Object>} Registro eliminado del alimento.
   * @throws {Error} Si ocurre un error de consulta o conexión.
   */
  async eliminar() {
    return await prisma.COMIDA.delete({
      where: { comidaId: this.idAlimento },
    })
  }
}

/**
 * Modelo para la relación CHAROLA_COMIDA
 * @module models/charolaComida
 */
class CharolaComida {
  constructor(id, charolaId, comidaId, cantidadOtorgada, fechaOtorgada) {
    this.id = id;
    this.charolaId = charolaId;
    this.comidaId = comidaId;
    this.cantidadOtorgada = cantidadOtorgada;
    this.fechaOtorgada = fechaOtorgada;
  }

  /**
   * Agrega una nueva relación charola-comida
   */
  async agregar() {
    return await prisma.CHAROLA_COMIDA.create({
      data: {
        charolaId: this.charolaId,
        comidaId: this.comidaId,
        cantidadOtorgada: this.cantidadOtorgada,
        fechaOtorgada: this.fechaOtorgada,
      },
    });
  }
}

module.exports = { Alimento, CharolaComida };