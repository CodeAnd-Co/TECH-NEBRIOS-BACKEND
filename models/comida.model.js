const db = require("../utils/database");

module.exports = class Comida {
  static async obtenerComida() {
    const connection = await db();
    try {
      const rows = await connection.query("SELECT NOMBRE FROM COMIDA");
      if (rows.length === 0) {
        throw new Error("No se encontraron registros de comida.");
      }
      return rows;
    } catch (error) {
      console.error("Error al obtener la comida:", error);
      throw error;
    } finally {
      connection.end();
    }
  }
};
