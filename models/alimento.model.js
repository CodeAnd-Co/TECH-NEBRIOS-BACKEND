//RF24: Editar un tipo de comida en el sistema - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF24

const db = require('../utils/database.js');

/**
 * Modelo Alimento.
 * @module models/alimento
 */
module.exports.Alimento = class {
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
            const connection = await db();
            const query = `SELECT comidaId, nombre, descripcion FROM COMIDA`;
            const resultado = await connection.query(query);
            await connection.release();
            return resultado;
        } catch (error) {
            throw error;
        }
    }

    /**
     * Actualiza los datos del alimento en la base de datos.
     * @async
     * @method actualizar
     * @returns {Promise<void>}
     * @throws {Error} Si ocurre un error al ejecutar la actualización.
     */
    async actualizar() {
        try {
            const connection = await db();
            const query = `UPDATE COMIDA SET nombre = ?, descripcion = ? WHERE comidaId = ?`;
            await connection.query(query, [
                this.nombreAlimento,
                this.descripcionAlimento,
                this.idAlimento,
            ]);
            await connection.release();
        } catch (error) {
            throw error;
        }
    }
};