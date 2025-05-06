const db = require("../utils/database");

module.exports = class Charola {
  static async registrarCharola(data) {
    try {
      const connection = await db();
      const result = await connection.query(
        "INSERT INTO charolas (nombre, fecha, alimentacion, peso, hidratacion) VALUES (?, ?, ?, ?)",
        [data.id, data.nombre, data.descripcion, data.fecha]
      );
      return result;
    } catch (error) {
      console.error("Error al registrar la charola:", error);
      throw error;
    }
  }

  static async getCharola(charolaID) {
    const connection = await db();
    try {
      const [charola] = await connection.query(
        'SELECT * FROM CHAROLA WHERE charolaId = ?',
        [charolaID]
      );

      if (charola.length === 0) {
        return { error: 'No se encontró la charola con el ID proporcionado.' };
      }

      const [relacionHidratacion] = await connection.query(
        'SELECT * FROM CHAROLA_HIDRATACION WHERE charolaId = ?',
        [charolaID]
      );

      const [relacionComida] = await connection.query(
        'SELECT * FROM CHAROLA_COMIDA WHERE charolaId = ?',
        [charolaID]
      );

      if (relacionHidratacion.length === 0 || relacionComida.length === 0) {
        return {
          charola,
          relacionHidratacion: [],
          relacionComida: [],
          hidratacion: [],
          comida: [],
        };
      }

      const [hidratacion] = await connection.query(
        'SELECT * FROM HIDRATACION WHERE hidratacionId = ?',
        [relacionHidratacion[0].hidratacionId]
      );

      const [comida] = await connection.query(
        'SELECT * FROM COMIDA WHERE comidaId = ?',
        [relacionComida[0].comidaId]
      );

      return {
        charola,
        hidratacion,
        comida,
      };
    } catch (error) {
      return { error: error.message };
    } finally {
      connection.release();
    }
  }
};
