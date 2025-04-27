const Charola = require("../models/charola.model.js");

exports.registrarCharola = async (req, res) => {
  try {
    const data = {
      nombre: req.body.nombre,
      densidadLarva: req.body.densidadLarva,
      fechaCreacion: req.body.fechaCreacion,
      comidaCiclo: req.body.comidaCiclo,
      hidratacionCiclo: req.body.hidratacionCiclo,
      pesoCharola: req.body.pesoCharola,
      comidas: req.body.comidas, // Array de comidas
      hidrataciones: req.body.hidrataciones, // Array de hidrataciones
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
