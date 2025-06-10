//RF40: Editar un tipo de hidratación en el sistema - https://codeandco-wiki.netlify.app/docs/next/proyectos/larvas/documentacion/requisitos/RF40
// RF41 Eliminar un tipo de hidratación en el sistema - Documentación: https://codeandco-wiki.netlify.app/docs/next/proyectos/larvas/documentacion/requisitos/RF41
//RF36: Registrar un nuevo tipo de hidratación al sistema - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF36

/**
 * Controlador de Hidratación.
 * @module controllers/hidratacionController
 */
const { Hidratacion } = require('../models/hidratacion.model');

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
    res.status(500).send('Error al obtener hidratación');
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
      .json({ success: false, message: 'Datos no válidos' });
  }

  try {
    const hidratacion = new Hidratacion(null, nombre, descripcion);
    await hidratacion.agregar();
    res
      .status(200)
      .json({ success: true, message: 'Hidratación registrada exitosamente' });
    console.log('Se conecto back con front');
  } catch (error) {
    console.error('Error al registrar hidratación:', error);

        if (error.code === 'ETIMEDOUT' || error.code === 'ECONNREFUSED') {
        return res
            .status(101)
            .json({ success: false, message: 'Sin conexión a internet' });
        }
    };

    res.status(500).json({
        success: false,
        message: 'Error del servidor al registrar hidratación',
    });
  };


/**
 * Edita un hidratante existente en la base de datos.
 * @async
 * @function editarHidratacion
 * @param {import('express').Request} req - Objeto de solicitud HTTP, contiene params y body.
 * @param {import('express').Response} res - Objeto de respuesta HTTP.
 * @returns {Promise<void>}
 */
module.exports.editarHidratacion = async (req, res) => {
    const idHidratacion = Number(req.params.idHidratacion);
    
    const { nombreHidratacion, descripcionHidratacion } = req.body;

    if (!Number.isInteger(idHidratacion) || idHidratacion <= 0) {
        return res.status(400).json({ error: 'ID de hidratante no válido' });
      }

    try {
        const hidratacion = new Hidratacion(idHidratacion, nombreHidratacion, descripcionHidratacion);
        await hidratacion.actualizar();
        res.json({ success: true, message: 'Hidratacion actualizado' });
    } catch (error) {
        res.status(500).send('Error al editar hidratacion');
    }
};
 
  /**      
 * Elimina un hidrato existente en la base de datos.
 * @async
 * @function eliminarHidratacion
 * @param {import('express').Request} req - Objeto de solicitud HTTP, contiene params.
 * @param {import('express').Response} res - Objeto de respuesta HTTP.
 * @returns {Promise<void>}
 */
module.exports.eliminarHidratacion = async (req, res) => {
    const idHidratacion = Number(req.params.idHidratacion);

    if (!Number.isInteger(idHidratacion) || idHidratacion <= 0) {
        return res.status(400).json({ error: 'ID de hidrato no válido' });
    }

    try {
        const hidratacion = new Hidratacion(idHidratacion);
        const asignaciones = await hidratacion.isAgregada();

         // Verificar si el alimento está asignado a alguna charola
         if (asignaciones > 0) {
             return res.status(409).json({ success: false, message: 'La hidratación no se puede eliminar porque está asignado a una charola' });
         }
        await hidratacion.eliminar();
        res.json({ success: true, message: 'Hidrato eliminado' });
    } catch (error) {
        res.status(500).send('Error al eliminar hidrato');
    }
};

