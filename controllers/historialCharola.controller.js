const HistorialCharola = require('../models/historialCharola.model.js');

/**
 * @function obtenerHistorialAncestros
 * @description Controlador HTTP que obtiene la fecha de creación y la línea ancestral de una charola específica.
 * Utiliza el modelo `HistorialCharola` para consultar los datos relacionados en la base de datos.
 *
 * @async
 * @param {import('express').Request} req - Objeto de solicitud HTTP, debe contener `charolaId` como parámetro de ruta.
 * @param {import('express').Response} res - Objeto de respuesta HTTP usado para devolver el resultado.
 *
 * @returns {Promise<void>} Retorna una respuesta JSON con:
 *  - Código 200 y un objeto `{ fechaCreacion, ancestros }` si la operación es exitosa.
 *  - Código 400 si el parámetro `charolaId` no es válido.
 *  - Código 404 si no se encuentra la charola.
 *  - Código 500 si ocurre un error inesperado.
 *
 * @example
 * // GET /historial/1011
 * {
 *   "fechaCreacion": "2024-05-01",
 *   "ancestros": [
 *     { "charolaId": 1001, "relacion": "abuela" },
 *     { "charolaId": 1005, "relacion": "madre" }
 *   ]
 * }
 */
exports.obtenerHistorialAncestros = async (req, res) => {
  const charolaId = parseInt(req.params.charolaId, 10);

  if (isNaN(charolaId)) {
    return res.status(400).json({ error: 'ID de charola inválido' });
  }

  try {
    const fecha = await HistorialCharola.obtenerFechaCreacion(charolaId);

    if (!fecha || fecha.length === 0) {
      return res.status(404).json({ error: 'Charola no encontrada' });
    }

    const fechaCreacion = fecha[0].fechaCreacion;
    const ancestros = await HistorialCharola.obtenerAncestros(charolaId);

    return res.status(200).json({
      fechaCreacion,
      ancestros
    });
  } catch (err) {
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

/** 
 * @description Metodo GET para obtener el historial de actividad de una charola, esto incluye el estado actual, el historial de
 * alimentación y el historial de hidratación.
 * RF18: https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF18
 * @param {?charolaId=:id} req - Respuesta HTTP que contiene el id de la charola a la cual se obtendrá su historial.
 * @param {*} res - Respuesta HTTP que se usa para enviar el resultado.
 * @returns {json} Estado de la charola, historial de alimentación, historial de hidratación.
*/
exports.obtenerHistorialActividad = async(req, res) => {
  try{

      const id = parseInt(req.params.id, 10);

      const alimentacion = await HistorialCharola.historialAlimentacion(id);

      const hidratacion = await HistorialCharola.historialHidratacion(id);

      const estado = await HistorialCharola.estadoCharola(id);

      if(hidratacion.length > 0 || alimentacion.length > 0){
          res.status(200).json({'codigo': 'Ok', 'estado': estado, 'alimentacion': alimentacion, 'hidratacion': hidratacion});
      } else {
          res.status(201).json({'codigo': 'Ok', 'estado': estado});
      }

  } catch (error){
      console.error('[Controller]. Error al obtener informacion de las charolas: ', error);
      res.status(500).json({'error': 'Ocurrio un error en el servidor'});
  }
};