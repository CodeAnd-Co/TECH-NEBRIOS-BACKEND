const Charola = require("../models/charola.model.js");

exports.registrarCharola = async (req, res) => {
  try {
    console.log("Datos recibidos:", req.body);
    const data = {
      nombre: req.body.nombre || "Sin nombre", // Valor predeterminado
      nombreComida: req.body.nombreComida || "Desconocido", // Validar comidaCiclo
      nombreHidratacion: req.body.nombreHidratacion || "Desconocido", // Validar hidratacionCiclo
      estado: req.body.estado || "activa", // Valor predeterminado
      pesoCharola: parseFloat(req.body.pesoCharola) || 0, // Convertir a número
      densidadLarva: parseFloat(req.body.densidadLarva) || 0, // Convertir a número
      fechaCreacion: req.body.fechaCreacion, // Fecha validada y formateada
      comidaCiclo: parseFloat(req.body.comidaCiclo) || 0, // Procesar cantidadComida
      hidratacionCiclo: parseFloat(req.body.hidratacionCiclo) || 0, // Procesar cantidadHidratacion
    };

    console.log("Datos procesados:", data);

    // Llamar al modelo para registrar la charola
    const result = await Charola.registrarCharola(data);

    // Responder al cliente
    res.status(201).json({
      message: "Charola registrada con éxito",
      charolaId: result.charolaId.toString(),
    });
  } catch (error) {
    console.error("Error al registrar la charola:", error);
    res.status(500).json({ error: "Error al registrar la charola" });
  }
};
