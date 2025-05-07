const Charola = require("../models/charola.model.js");

exports.registrarCharola = async (req, res) => {
  try {
    console.log("Datos recibidos:", req.body);

    const data = {
      nombre: req.body.nombre || "Sin nombre",
      nombreComida: req.body.nombreComida || "Desconocido",
      nombreHidratacion: req.body.nombreHidratacion || "Desconocido",
      estado: req.body.estado || "activa",
      pesoCharola: parseFloat(req.body.pesoCharola) || 0,
      densidadLarva: parseFloat(req.body.densidadLarva) || 0,
      fechaCreacion: req.body.fechaCreacion,
      comidaCiclo: parseFloat(req.body.comidaCiclo) || 0,
      hidratacionCiclo: parseFloat(req.body.hidratacionCiclo) || 0,
    };

    console.log("Datos procesados:", data);

    // Verificar si el nombre ya existe
    const nombreExistente = await Charola.verificarNombre(data.nombre);
    if (nombreExistente) {
      return res.status(409).json({
        status: "error",
        message: "El nombre ya existe en la base de datos.",
      });
    }

    const result = await Charola.registrarCharola(data);

    res.status(201).json({
      message: "Charola registrada con éxito",
      charolaId: result.charolaId.toString(),
    });
  } catch (error) {
    res.status(500).json({ error: "Error al registrar la charola" });
  }
};
