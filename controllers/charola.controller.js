const Charola = require("../models/charola.model.js");

exports.registrarCharola = async (req, res) => {
  try {
    const data = {
      nombre: req.body.nombre,
      comidaCiclo: req.body.comidaCiclo,
      hidratacionCiclo: req.body.hidratacionCiclo,
      estado: req.body.estado,
      pesoCharola: req.body.pesoCharola,
      densidadLarva: req.body.densidadLarva,
      comidas: req.body.comidas, // Asegúrate de que este campo esté en el cuerpo de la solicitud
    };
    const result = await Charola.registrarCharola(data);
    console.log("Charola registrada con éxito:", result);
    res.status(201).json({
      message: "Charola registrada con éxito",
      insertId: Number(result.insertId),
    });
  } catch (error) {
    console.error("Error al registrar la charola:", error);
    res.status(500).json({ error: "Error al registrar la charola" });
  }
};
