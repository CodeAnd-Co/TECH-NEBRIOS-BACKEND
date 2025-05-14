// models/historialCharola.model.js
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

const db = require("../utils/database");

module.exports = class HistorialCharola {
  /**
   * Obtiene los ancestros (padres) de una charola.
   * @param {number|string} charolaId
   * @returns {Promise<Array<{ charolaAncestro: number, nombreCharola: string }>>}
   */
static async obtenerFechaCreacion(charolaId) {
    const conexion = await db();

    try {
      const resultado = await conexion.query(
        "SELECT fechaCreacion FROM CHAROLA WHERE charolaId = ?",
        [charolaId]
      );
      return resultado;
    } catch (err) {
      throw err;
    } finally {
      conexion.release();
    }
  }
  
   
  static async obtenerAncestros(charolaId) {
    const conexion = await db();

    try {
      const relaciones = await conexion.query(
        "SELECT a.charolaAncestro, c.nombreCharola FROM CHAROLA_CHAROLA a JOIN CHAROLA c ON a.charolaAncestro = c.charolaId WHERE a.charolaHija = ?",
        [charolaId]
      );
      
      return relaciones;
    } catch (error) {
      throw error;
    } finally {
      conexion.release();
    }
  }
};
