const db = require('../utils/database');

const Charola = {
  getCharola: async (charolaID) => {
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
        [relacionHidratacion.hidratacionId]
      );

      const [comida] = await connection.query(
        'SELECT * FROM COMIDA WHERE comidaId = ?',
        [relacionComida.comidaId]
      );

      return {
        charola,
        hidratacion,
        comida,
      };
    } catch {
        return { error: error.message };
    }finally {
      connection.release();
    }
  },
};

module.exports = Charola;
