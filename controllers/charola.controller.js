// RF5 Registrar Charola - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF5
// RF6 Buscar charola - Documentación: https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF6
// RF7 Modificar datos generales Charola - Documentación: https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF7
// RF8 Eliminar Charola - Documentación: https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF8
// RF10 Consultar información detallada de una charola - Documentación: https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF10
// RF16 Visualizar todas las charolas registradas en el sistema - Documentación: https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF16
// RF21: Consultar charolas de cambios pasados - Documentación: https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF21
// RF26 Registrar la alimentación de la charola - Documentación: https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF26

const { hi } = require('date-fns/locale');
const Charola = require('../models/charola.model.js');

/**
 * @description Consultar charola ontiene todos los datos correspondientes de una charola con su ID.
 * @param {*} req - Solicitud HTTP que contiene la ID de la charola.
 * @param {*} res - Respuesta HTTP que se usa para enviar el resultado.
 * @returns {JSON} Código de respuesta y token de sesión
 */

const consultarCharola = async (req, res) => {
  const { id } = req.params;
  try {
    const charola = await Charola.getCharola(parseInt(id));

    if (charola.error) {
      return res.status(404).json({ error: charola.error });
    }

    res.status(200).json({
      data: charola
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @description Registrar charola registra todos los datos correspondientes de una charola.
 * @param {*} req - Solicitud HTTP que contiene los datos de la charola.
 * @param {*} res - Respuesta HTTP que se usa para enviar el resultado.
 * @returns {JSON} Código de respuesta y token de sesión
 */
const registrarCharola = async (req, res) => {
  try {
    const nuevo = await Charola.registrar(req.body)
    res.status(201).json({ data: nuevo })
  } catch (error) {
    res.status(500).json({ mensaje: 'Error interno del servidor' })
  }
}

/**
 * @description Eliminar charola elimina todos los datos correspondientes de una charola con su ID.
 * @param {*} req - Solicitud HTTP que contiene la ID de la charola.
 * @param {*} res - Respuesta HTTP que se usa para enviar el resultado.
 * @returns {JSON} Código de respuesta.
 */

const eliminarCharola = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: 'Falta id' });
  }

  try {
    const charola = await Charola.eliminarCharola(parseInt(id))

    if (charola.error) {
      return res.status(404).json({ error: charola.error });
    }

    res.status(200).json({
      data: charola
    });

  } catch (err) {
    console.error('Error al eliminar la charola:', err);
    res.status(500).json({ error: 'Error al eliminar la charola' });

  }
};

/**
 * Controlador seguro para obtener todas las charolas paginadas.
 *
 * Realiza validación de parámetros, control de límite máximo y evita exposición de errores internos.
 *
 * @async
 * @function obtenerCharolas
 * @param {import('express').Request} req - Objeto de solicitud HTTP con `page` y `limit` opcionales.
 * @param {import('express').Response} res - Objeto de respuesta HTTP.
 * @returns {Promise<void>}
 */
const obtenerCharolas = async (req, res) => {
  try {
    const rawPage = req.query.page;
    const rawLimit = req.query.limit;
    const estado = req.query.estado; // estado opcional: "activa" o "pasada"

    const page = parseInt(rawPage, 10);
    const limit = parseInt(rawLimit, 10);

    // Validación de page y limit
    if (isNaN(page) || isNaN(limit) || page < 1 || limit < 1) {
      return res.status(400).json({
        mensaje: 'Parámetros inválidos: page y limit deben ser enteros positivos'
      });
    }

    // Validación opcional del estado
    const estadosValidos = ['activa', 'pasada'];
    if (estado && !estadosValidos.includes(estado)) {
      return res.status(400).json({
        mensaje: 'Estado inválido. Usa \'activa\' o \'pasada\'.'
      });
    }

    const MAX_LIMIT = 1000; // Aumentado para scroll infinito
    const safeLimit = Math.min(limit, MAX_LIMIT);
    const offset = (page - 1) * safeLimit;

    // Consulta al modelo
    const datos = await Charola.getCharolasPaginadas(safeLimit, offset, estado);
    const total = await Charola.getCantidadTotal(estado);
    const totalPages = Math.ceil(total / safeLimit);

    if (page > totalPages && totalPages > 0) {
      return res.status(400).json({
        mensaje: `La página solicitada (${page}) excede el total de páginas disponibles (${totalPages}).`
      });
    }

    // Respuesta exitosa
    res.status(200).json({
      total,
      page,
      limit: safeLimit,
      totalPages,
      data: datos
    });
  } catch (error) {
    console.error('❌ Error al obtener charolas:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

/**
 * Controlador para alimentar una charola con una cantidad específica de alimento.
 *
 * @async
 * @function alimentarCharola
 * @param {Object} req - Objeto de solicitud HTTP (Express).
 * @param {Object} req.body - Cuerpo de la solicitud.
 * @param {number} req.body.charolaId - ID de la charola a alimentar.
 * @param {number} req.body.comidaId - ID del tipo de comida que se va a otorgar.
 * @param {number} req.body.cantidadOtorgada - Cantidad de alimento otorgada en gramos.
 * @param {Object} res - Objeto de respuesta HTTP (Express).
 * @returns {Promise<Object>} Respuesta HTTP con el resultado del proceso o un error.
 *
 * @throws {400} Si faltan parámetros obligatorios en el cuerpo de la solicitud.
 * @throws {500} Si ocurre un error interno al intentar alimentar la charola.
 */
const alimentarCharola = async (req, res) => {
  const { charolaId, comidaId, cantidadOtorgada } = req.body;

  if (!charolaId || !comidaId || cantidadOtorgada == null) {
    return res.status(400).json({ error: 'Faltan parámetros obligatorios.' });
  }

  try {
    const resultado = await Charola.alimentar({
      charolaId,
      comidaId,
      cantidadOtorgada
    });

    return res.status(200).json({ data: resultado });
  } catch (err) {
    return res.status(500).json({ error: 'Error interno al alimentar charola.' });
  }
};


const crearObjetoCharola = (charolaId, nuevoNombre, fechaCreacion, estado, densidadLarva, fechaActualizacion) =>{
  const resultado = new Map();

  resultado.set('charolaId', parseInt(charolaId));
  resultado.set('nombreCharola', nuevoNombre);
  resultado.set('fechaCreacion', new Date(fechaCreacion));
  resultado.set('estado', estado);
  resultado.set('densidadLarva', parseInt(densidadLarva));
  resultado.set('fechaActualizacion', new Date(fechaActualizacion));

  return resultado;
}

const crearObjetoAlimentacion = (alimentoId, cantidadOtorgada, fechaOtorgada) => {
  const resultado = new Map();

  resultado.set('alimentoId', parseInt(alimentoId));
  resultado.set('cantidadOtorgada', parseInt(cantidadOtorgada));
  resultado.set('fechaOtorgada', new Date(fechaOtorgada));

  return resultado;
}

const crearObjetoHidratacion = (hidratacionId, cantidadOtorgada, fechaOtorgada) => {
  const resultado = new Map();

  resultado.set('hidratacionId', parseInt(hidratacionId));
  resultado.set('cantidadOtorgada', parseInt(cantidadOtorgada));
  resultado.set('fechaOtorgada', new Date(fechaOtorgada));

  return resultado;
}


const editarCharola = async (req, res) => {
  try{
    const charolaId = req.query.charolaId;
    const fechaActualizacion = req.query.fechaActualizacion;

    const charola = crearObjetoCharola(charolaId, req.query.nuevoNombre, req.query.fechaCreacion, req.query.nuevoEstado, req.query.nuevaDensidad, fechaActualizacion);
    const alimentacion = crearObjetoAlimentacion(req.query.nuevaAlimentacion, req.query.nuevaAlimentacionOtorgada, fechaActualizacion);
    const hidratacion = crearObjetoHidratacion(req.query.nuevaHidratacion, req.query.nuevaHidratacionOtorgada, fechaActualizacion);

    const resultado = await Charola.editarCharola(charola, alimentacion, hidratacion);

    if (resultado == 200){
      res.status(200).json({mensaje: 'Ok'});
      return;
    }

    res.status(500).json({error: 'Ocurrió un error al editar los datos de la charola'});
  } catch (error) {
    console.error('❌ Error al editar charolas:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor'});
  }
};

module.exports = {
  consultarCharola,
  eliminarCharola,
  registrarCharola,
  obtenerCharolas,
  alimentarCharola,
  editarCharola,
};