const Charola = require("../models/charola.model.js");

/**
 * @description Consultar charola ontiene todos los datos correspondientes de una charola con su ID.
 * @param {*} req - Solicitud HTTP que contiene la ID de la charola.
 * @param {*} res - Respuesta HTTP que se usa para enviar el resultado.
 * @returns {JSON} Código de respuesta y token de sesión
 */

const consultarCharola = async (req, res) => {
  const { id } = req.params;
  try {
    const charola = await Charola.getCharola(parseInt(id));

    if (charola.error) {
      return res.status(404).json({ error: charola.error });
    }

    res.status(200).json({
      data: charola
    });

    console.log("Se pudo conectar el front con el back :)");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const registrarCharola = async (req, res) => {};

module.exports = {
  consultarCharola,
  registrarCharola
};


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