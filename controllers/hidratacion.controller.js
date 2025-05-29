//RF36: Registrar un nuevo tipo de hidratación al sistema - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF36

/**
 * Controlador de Hidratación.
 * @module controllers/hidratacionController
 */
const { Hidratacion } = require("../models/hidratacion.model");

/**
 * Obtiene toda la hidratación de la base de datos.
 * @async
 * @function obtenerHidratacion
 * @param {import('express').Request} req - Objeto de solicitud HTTP de Express.
 * @param {import('express').Response} res - Objeto de respuesta HTTP de Express.
 * @returns {Promise<void>}
 */
module.exports.obtenerHidratacion = async (req, res) => {
  const hidratacion = new Hidratacion();
  try {
    const listaHidratacion = await hidratacion.obtener();
    res.json(listaHidratacion);
  } catch (error) {
    res.status(500).send("Error al obtener hidratación");
  }
};

/**
 * Registra un nuevo tipo de hidratación en la base de datos.
 *
 * @async
 * @function registrarHidratacion
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} req.body - Cuerpo de la solicitud con `nombre` y `descripcion`.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @returns {void} Responde con éxito o el error correspondiente (400, 101 o 500).
 */

module.exports.registrarHidratacion = async (req, res) => {
  const { nombre, descripcion } = req.body;

  if (!nombre || !descripcion) {
    return res
      .status(400)
      .json({ success: false, message: "Datos no válidos" });
  }

  try {
    const hidratacion = new Hidratacion(null, nombre, descripcion);
    await hidratacion.agregar();
    res
      .status(200)
      .json({ success: true, message: "Hidratación registrada exitosamente" });
    console.log("Se conecto back con front");
  } catch (error) {
    console.error("Error al registrar hidratación:", error);

    if (error.code === "ETIMEDOUT" || error.code === "ECONNREFUSED") {
      return res
        .status(101)
        .json({ success: false, message: "Sin conexión a internet" });
    }

    res.status(500).json({
      success: false,
      message: "Error del servidor al registrar hidratación",
    });
  }
};
