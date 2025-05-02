const Charola = require('../models/consultar_charola.model');

const consultarCharola = async (req, res) => {
  try {
    const charola = await Charola.getCharola(1004);

    res.status(200).json({
      data: charola
    });

    console.log("Se pudo conectar el front con el back :)")
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
    consultarCharola
};