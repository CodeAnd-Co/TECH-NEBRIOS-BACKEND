const Hidratacion = require("../models/hidratacion.model.js");

exports.obtenerHidratacion = async (req, res) => {
  try {
    const hidratacion = await Hidratacion.obtenerHidratacion();
    res.status(200).json({
      status: "success",
      data: {
        hidratacion,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error al obtener la hidratación",
    });
  }
};
