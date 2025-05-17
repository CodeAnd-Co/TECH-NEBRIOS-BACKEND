// RF5 Registrar Charola - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF5
// RF6 Buscar charola - Documentación: https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF6
// RF7 Modificar datos generales Charola - Documentación: https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF7
// RF8 Eliminar Charola - Documentación: https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF8
// RF10 Consultar información detallada de una charola - Documentación: https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF10
// RF16 Visualizar todas las charolas registradas en el sistema - Documentación: https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF16
// RF21: Consultar charolas de cambios pasados - Documentación: https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF21

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
 * 
 */
const editarCharola = async (req, res) => {
  try{
    const charolaId = req.query.charolaId;

    const nuevoEstado = req.query.nuevoEstado;
    const nuevaFechaActualizacion = req.query.nuevaFechaActualizacion;
    const nuevoPeso = req.query.nuevoPeso;
    const nuevaAlimentacion = req.query.nuevaAlimentacion;
    const nuevaAlimentacionOtorgada = req.query.nuevaAlimentacionOtorgada;
    const nuevaHidratacion = req.query.nuevaHidratacion;
    const nuevaHidratacionOtorgada = req.query.nuevaHidratacionOtorgada;

    console.log('Parametros: '+nuevoEstado+', '+nuevaFechaActualizacion+', '+nuevoPeso+', '+nuevaAlimentacion+', '+nuevaAlimentacionOtorgada+', '+nuevaHidratacion+', '+nuevaHidratacionOtorgada);

    res.status(200).json({mensaje: "Ok"});
  } catch (error) {
    console.error('❌ Error al obtener charolas:', error);
    res.status(500).json({ mensaje: "Error interno del servidor"});
  }
};
module.exports = {
  consultarCharola,
  eliminarCharola,
  registrarCharola,
  obtenerCharolas,
  editarCharola
};