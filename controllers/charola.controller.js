const Charola = require("../models/charola.model.js");

exports.registrarCharola = async (req, res) => {
  try {
    const {
      nombre,
      comidaCiclo,
      hidratacionCiclo,
      estado,
      pesoCharola,
      cantidadResiduos,
      comidas,
    } = req.body;

    // Validar que se reciban los datos necesarios
    if (
      !nombre ||
      !comidaCiclo ||
      !hidratacionCiclo ||
      !pesoCharola ||
      !cantidadResiduos ||
      !comidas
    ) {
      return res.status(400).json({
        status: "error",
        message: "Faltan datos requeridos para registrar la charola",
      });
    }

    const charola = await Charola.registrarCharola({
      nombre,
      comidaCiclo,
      hidratacionCiclo,
      estado,
      pesoCharola,
      cantidadResiduos,
      comidas,
    });

    res.status(201).json({
      status: "success",
      data: {
        charola,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error al registrar la charola",
    });
  }
};
