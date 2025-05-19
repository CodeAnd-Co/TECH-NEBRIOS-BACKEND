// RF20: Seleccionar Charolas Para Tamizar y Registrar sus Datos - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF37

/**
 * Controlador de Alimentos.
 * @module controllers/alimentoController
 */
const Tamizado = require('../models/charolaTamizado.model');

module.exports.tamizarCharolaIndividual = async (req, res) => {
    if (req.body == null) {
        return res.status(400).json({ exito: false, mensaje: 'Datos no válidos' });
    }
    try {
    const {
      charolas,
      alimento,
      hidratacion,
      alimentoCantidad,
      hidratacionCantidad,
      pupa,
      fras,
      fecha,
    } = req.body;

    const tamizado = new Tamizado({
      charolas,
      alimento,
      hidratacion,
      alimentoCantidad,
      hidratacionCantidad,
      pupa,
      fras,
      fecha,
    });

    const resultado = await tamizado.tamizarIndividual();

    if (resultado === true) {
      return res.status(200).json({
        exito: true,
        mensaje: 'Tamizado registrado correctamente',
      });
    }

  } catch (err) {
    console.error('Error en el controller de tamizado:', err);
    return res.status(500).json({
      exito: false,
      mensaje: 'Error interno del servidor',
    });
  }

  
}

module.exports.tamizarMultiplesCharolas = async (req, res) => {
    if (req.body == null) {
        return res.status(400).json({ exito: false, mensaje: 'Datos no válidos' });
    }
    try {
    const {
      charolas,
      pupa,
      fras,
      fecha,
    } = req.body;

    const tamizado = new Tamizado({
      charolas,
      cantidadPupa: pupa,
      cantidadFras: fras,
      fecha: fecha,
    });

    const resultado = await tamizado.tamizadoMultiple();

    if (resultado === true) {
      return res.status(200).json({
        exito: true,
        mensaje: 'Tamizado registrado correctamente',
      });
    }

  } catch (err) {
    console.error('Error en el controller de tamizado:', err);
    return res.status(500).json({
      exito: false,
      mensaje: 'Error interno del servidor',
    });
  }
  
}