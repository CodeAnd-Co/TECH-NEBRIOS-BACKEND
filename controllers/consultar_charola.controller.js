const Charola = require('../models/consultar_charola.model');

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

module.exports = {
  consultarCharola
};
