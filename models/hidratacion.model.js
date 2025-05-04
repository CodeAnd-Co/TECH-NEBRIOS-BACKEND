const db = require("../utils/database");

module.exports = class Hidratacion {
  static async obtenerHidratacion() {
    const connection = await db();
    try {
      const rows = await connection.query("SELECT NOMBRE FROM HIDRATACION");
      if (rows.length === 0) {
        throw new Error("No se encontraron registros de hidratación.");
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
