const Charola = require("../models/detalleCharola.model.js");

/**
 * @description Consultar charola ontiene todos los datos correspondientes de una charola con su ID.
 * @param {*} req - Solicitud HTTP que contiene la ID de la charola.
 * @param {*} res - Respuesta HTTP que se usa para enviar el resultado.
 * @returns {JSON} Código de respuesta.
 */

const consultarCharola = async (req, res) => {
  const { id } = req.params;

  console.log('Consultando charola con ID:', id);

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

module.exports = { consultarCharola };