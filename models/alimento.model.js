/**
 * @file Modelo Alimento para gestionar operaciones con la base de datos.
 * @module models/Alimento
 */

const db = require('../utils/database.js');

/**
 * Clase que representa un alimento.
 */
module.exports.Alimento = class {
    constructor(idAlimento, nombreAlimento, descripcionAlimento) {
        this.idAlimento = idAlimento;
        this.nombreAlimento = nombreAlimento;
        this.descripcionAlimento = descripcionAlimento;
    }

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
