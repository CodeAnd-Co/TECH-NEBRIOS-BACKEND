const db = require('../utils/database.js');

module.exports.Alimento = class {
    constructor(idAlimento, nombreAlimento, descripcionAlimento) {
        this.idAlimento = idAlimento;
        this.nombreAlimento = nombreAlimento;
        this.descripcionAlimento = descripcionAlimento;
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
}
