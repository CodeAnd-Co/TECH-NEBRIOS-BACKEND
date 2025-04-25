const Comida = require("../models/comida.model.js");

exports.obtenerComida = async (req, res) => {
  try {
    const comida = await Comida.obtenerComida();
    res.status(200).json({
      status: "success",
      data: {
        comida,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error al obtener la comida",
    });
  }
};
