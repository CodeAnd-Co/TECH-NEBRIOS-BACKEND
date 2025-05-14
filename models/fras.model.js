const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

class Fras {
    /**
     * Crea una nueva instancia de Fras.
     * @constructor
     * @param {number} frasId - Identificador del Fras.
     * @param {number} gramosGenerados - Gramos generados por el Fras.
     * @param {number} charolaId - Identificador de la charola asociada al Fras.
     */
    constructor(frasId, gramosGenerados, charolaId) {
        this.frasId = frasId;
        this.gramosGenerados = gramosGenerados;
        this.charolaId = charolaId;
    }

    /**
     * Obtiene toda la Fras de la tabla FRAS.
     * @async
     * @method obtener
     * @returns {Promise<Array<Object>>} Lista de registros de Fras.
     * @throws {Error} Si ocurre un error de consulta o conexión.
     */
    async obtener() {
        try {
            return await prisma.FRAS.findMany();
        } catch (error) {
            console.error("Error al obtener los registros de Fras:", error);
            throw error;
        }
    }
}

module.exports = { Fras };