const db = require('../utils/database');

const Charola = {
  obtenerCharolasPaginadas: async (limite, contrapeso) => {
    const conexion = await db();
    try {
      const filas = await conexion.query(
        'SELECT nombreCharola, fechaCreacion FROM CHAROLA ORDER BY fechaCreacion DESC LIMIT ? OFFSET ?',
        [limite, contrapeso]
      );
      return filas;
    } finally {
      conexion.release();
    }
  },

  obtenerCantidadTotal: async () => {
    const conexion = await db();
    try {
      const resultado = await conexion.query('SELECT COUNT(*) as total FROM CHAROLA');
      return resultado[0].total;
    } finally {
      conexion.release();
    }
  }
};

module.exports = Charola;
