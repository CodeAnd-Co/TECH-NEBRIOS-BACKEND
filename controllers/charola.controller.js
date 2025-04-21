const db = require("../utils/database");
const connection = await db();

exports.eliminarCharola = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: 'Falta id' });
  }

  try {
    const query = 'DELETE FROM CHAROLA WHERE charolaId = ?';
    const [resultado] = await connection.query(query, [id]);

    if (resultado.affectedRows === 0) {
      return res.status(404).json({ mensaje: `No se encontró una charola con ID ${id}` });
    }

    res.json({ mensaje: `Charola con ID ${id} eliminada exitosamente` });

  } catch (err) {
    console.error('Error al eliminar la charola:', err);
    res.status(500).json({ error: 'Error al eliminar la charola' });
    
  } finally {
    if (connection) connection.release();
  }
};