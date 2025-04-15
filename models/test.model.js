const db = require("../utils/database");

module.exports = class Test {
  static async fetchAll() {
    try {
      const connection = await db();
      const rows = await connection.query("SELECT * FROM CHAROLA");
      return rows;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // Re-throw the error for proper handling
    }
  }
  static async createFood(data) {
    try {
      const connection = await db();
      const result = await connection.query(
        "INSERT INTO COMIDA (nombre, descripcion) VALUES (?, ?)",
        [data.nombre, data.descripcion]
      );
      return result;
    } catch (error) {
      console.error("Error inserting data:", error);
      throw error; // Re-throw the error for proper handling
    }
  }
};
