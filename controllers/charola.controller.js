const Charola = require("../models/charola.model.js");

/**
 * @description Consultar charola ontiene todos los datos correspondientes de una charola con su ID.
 * @param {*} req - Solicitud HTTP que contiene la ID de la charola.
 * @param {*} res - Respuesta HTTP que se usa para enviar el resultado.
 * @returns {JSON} Código de respuesta y token de sesión
 */

const consultarCharola = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: 'Falta id' });
  }
  
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

const eliminarCharola = async (req, res) => {
  const { id } = req.params;

  console.log('Intentando eliminar charola con ID:', id);

  if (!id) {
    return res.status(400).json({ error: 'Falta id' });
  }

  try {
    const charola = await Charola.eliminarCharola(parseInt(id))

    if (charola.error) {
      return res.status(404).json({ error: charola.error });
    }

    res.status(200).json({
      data: charola
    });

  } catch (err) {
    console.error('Error al eliminar la charola:', err);
    res.status(500).json({ error: 'Error al eliminar la charola' });
    
  }
};

module.exports = {
  consultarCharola,
  registrarCharola,
  eliminarCharola
};