/**
 * @file Modelo que representa y gestiona operaciones de alimentos en la base de datos.
 * @module models/Alimento
 */

const db = require('../utils/database.js');

/**
 * Clase que representa un alimento y sus operaciones CRUD.
 */
module.exports.Alimento = class {
      /**
   * Crea una nueva instancia de Alimento.
   * @constructor
   * @param {?number} idAlimento - ID único del alimento. Puede ser null si es un nuevo alimento.
   * @param {string} nombreAlimento - Nombre del alimento.
   * @param {string} descripcionAlimento - Descripción del alimento.
   */
    constructor(idAlimento, nombreAlimento, descripcionAlimento) {
        this.idAlimento = idAlimento;
        this.nombreAlimento = nombreAlimento;
        this.descripcionAlimento = descripcionAlimento;
    }

      /**
   * Obtiene todos los alimentos desde la base de datos.
   * @async
   * @returns {Promise<Object[]>} Lista de alimentos.
   * @throws Lanza un error si falla la consulta a la base de datos.
   */
    async obtener() {
        try {
            const connection = await db();
            const query = `SELECT comidaId, nombre, descripcion FROM COMIDA`;
            const resultado = await connection.query(query);
            await connection.release();
            return resultado;
        } catch (error) {
            console.error('Error al obtener alimentos:', error);
            throw error;
        }
    }

    /**
   * Elimina este alimento de la base de datos.
   * @async
   * @returns {Promise<void>}
   * @throws Lanza un error si la eliminación falla.
   */
    async eliminar() {
        try {
            const connection = await db();
            const query = `DELETE FROM COMIDA WHERE comidaId = ?`;
            await connection.query(query, [this.idAlimento]);
            await connection.release();
        } catch (error) {
            console.error('Error al eliminar alimento:', error);
            throw error;
        }
    }

    /**
   * Agrega este alimento a la base de datos.
   * @async
   * @returns {Promise<void>}
   * @throws Lanza un error si la inserción falla.
   */
    async agregar() {
        try {
            const connection = await db();
            const query = `INSERT INTO COMIDA(nombre, descripcion) VALUES (?, ?)`;
            await connection.query(query, [this.nombreAlimento, this.descripcionAlimento]);
            await connection.release();
        } catch (error) {
            console.error('Error al agregar alimento:', error);
            throw error;
        }
    }
    
}
