// RF20: Seleccionar Charolas Para Tamizar y Registrar sus Datos - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF37

/**
 * Controlador de Alimentos.
 * @module controllers/alimentoController
 */
const { Tamizado } = require("../models/charolaTamizado.model");

module.exports.tamizarCharolaIndividual = async (req, res) => {
    if (req.body == null) {
        return res.status(400).json({ success: false, message: "Datos no válidos" });
    }
    try {
    const {
      charolas,
      tipoComida,
      tipoHidratacion,
      cantidadComida,
      cantidadHidratacion,
      cantidadPupa,
      cantidadFras,
      fecha,
    } = req.body;

    const tamizado = new Tamizado({
      charolas,
      tipoComida,
      tipoHidratacion,
      cantidadComida,
      cantidadHidratacion,
      cantidadPupa,
      cantidadFras,
      fecha,
    });

    const resultado = await tamizado.tamizarIndividual();

    if (resultado === true) {
      return res.status(200).json({
        success: true,
        message: "Tamizado registrado correctamente",
      });
    }

    // Si la clase devuelve un error como objeto
    return res.status(400).json({
      success: false,
      message: resultado.message || "Error en el tamizado",
    });

  } catch (err) {
    console.error("Error en el controller de tamizado:", err);
    return res.status(500).json({
      success: false,
      message: "Error interno del servidor",
    });
  }

  
}

module.exports.tamizarMultiplesCharolas = async (req, res) => {
    if (req.body == null) {
        return res.status(400).json({ success: false, message: "Datos no válidos" });
    }
    try {
    const {
      charolas,
      tipoComida,
      tipoHidratacion,
      cantidadComida,
      cantidadHidratacion,
      cantidadPupa,
      cantidadFras,
      fecha,
    } = req.body;

    const tamizado = new Tamizado({
      charolas,
      tipoComida,
      tipoHidratacion,
      cantidadComida,
      cantidadHidratacion,
      cantidadPupa,
      cantidadFras,
      fecha,
    });

    const resultado = await tamizado.tamizadoMultiple();

    if (resultado === true) {
      return res.status(200).json({
        success: true,
        message: "Tamizado registrado correctamente",
      });
    }

    // Si la clase devuelve un error como objeto
    return res.status(400).json({
      success: false,
      message: resultado.message || "Error en el tamizado",
    });

  } catch (err) {
    console.error("Error en el controller de tamizado:", err);
    return res.status(500).json({
      success: false,
      message: "Error interno del servidor",
    });
  }

  
}