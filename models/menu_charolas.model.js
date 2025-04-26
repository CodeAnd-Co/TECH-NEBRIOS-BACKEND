// RF16 Visualizar todas las charolas registradas en el sistema - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF16

const db = require('../utils/database');

const Charola = {
  getCharolasPaginadas: async (limit, offset) => {
    const connection = await db();
    try {
      const rows = await connection.query(
        'SELECT nombreCharola, fechaCreacion FROM CHAROLA ORDER BY fechaCreacion DESC LIMIT ? OFFSET ?',
        [limit, offset]
      );
      return rows;
    } finally {
      connection.release();
    }
  },

  getCantidadTotal: async () => {
    const connection = await db();
    try {
      const result = await connection.query('SELECT COUNT(*) as total FROM CHAROLA');
      return result[0].total;
    } finally {
      connection.release();
    }
  }
};

module.exports = Charola;
