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
};
