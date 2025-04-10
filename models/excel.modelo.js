const getConexion = require('../utils/database');

async function obtenerDatosCharolas() {
  const conexion = await getConexion();

  try{
    const rows = await conexion.query(`
        SELECT 
        charolaId,
        comidaCiclo,
        hidratacionCiclo,
        fechaActualizacion,
        estado,
        densidadLarva,
        fechaCreacion,
        pesoCharola,
        cantidadResiduos
      FROM CHAROLA
    `);

    return rows;
    } finally {
        conexion.release();
    }
} 
module.exports = { obtenerDatosCharolas };
