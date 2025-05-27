// RF20: Seleccionar Charolas Para Tamizar y Registrar sus Datos - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF37

/**
 * Controlador de Alimentos.
 * @module controllers/alimentoController
 */
const Tamizado = require('../models/charolaTamizado.model');

/**
 * Controlador para realizar el tamizado individual de charolas.
 * Valida la entrada del cuerpo de la solicitud, instancia la clase `Tamizado`,
 * y ejecuta el método `tamizarIndividual`.
 *
 * @async
 * @function
 * @param {import('express').Request} req - Objeto de solicitud HTTP de Express.
 * @param {import('express').Response} res - Objeto de respuesta HTTP de Express.
 * @returns {Json} Retorna una respuesta JSON con el resultado del proceso.
 */

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
      tipoComida: alimento,
      tipoHidratacion:hidratacion,
      cantidadComida:alimentoCantidad,
      cantidadHidratacion:hidratacionCantidad,
      cantidadPupa:pupa,
      cantidadFras:fras,
      fecha,
    });

    console.log('Datos de tamizado:', tamizado);

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

/**
 * Controlador para realizar el tamizado de múltiples charolas sin asignación de comida o hidratación.
 * Valida la entrada del cuerpo de la solicitud, instancia la clase `Tamizado`,
 * y ejecuta el método `tamizadoMultiple`.
 *
 * @async
 * @function
 * @param {import('express').Request} req - Objeto de solicitud HTTP de Express.
 * @param {import('express').Response} res - Objeto de respuesta HTTP de Express.
 * @returns {Json} Retorna una respuesta JSON con el resultado del proceso.
 */

module.exports.tamizarMultiplesCharolas = async (req, res) => {
    if (req.body == null) {
        return res.status(400).json({ exito: false, mensaje: 'Datos no válidos' });
    }
    try {
    const {
      charolas,
      charolasParaTamizar
    } = req.body;


    const tamizado = new Tamizado({
      charolas,
      charolasParaTamizar
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