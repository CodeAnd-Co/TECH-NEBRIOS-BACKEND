const db = require('../utils/database');

const Charola = {
  getCharola: async (charolaID) => {
    const connection = await db();
    try {
      const [rows] = await connection.query(
        'SELECT * FROM CHAROLA WHERE charolaId = ?',
        [charolaID]
      );
      return rows;
    } finally {
      connection.release();
    }
  },
};

module.exports = Charola;
