const db = require('../utils/database.js');

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

    async actualizar() {
        try {
            const connection = await db();
            const query = `UPDATE COMIDA SET nombre = ?, descripcion = ? WHERE comidaId = ?`;
            await connection.query(query, [this.nombreAlimento, this.descripcionAlimento, this.idAlimento]);
            await connection.release();
        } catch (error) {
            console.error('Error al actualizar alimento:', error);
            throw error;
        }
    }
}
