//RF24: Editar un tipo de comida en el sistema - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF24

/* Dependencias */
const express = require("express");
const router = express.Router();

router.use(express.json()); 
router.use(express.urlencoded({ extended: true }));

/* INCLUDE CONTROLLERS */
const alimentoController = require("../controllers/alimento.controller.js");
/* ------------------- */

/* GET METHODS */
/**
 * GET / - Obtiene la lista de todos los alimentos.
 * @name GET/
 * @function
 * @memberof module:routes/alimentoRoutes
 */
router.get('/', alimentoController.obtenerAlimentos); 
/* ----------- */

/* POST METHODS */

/* ----------- */

/* PUT METHODS */
/**
 * PUT /editar/:idAlimento - Edita un alimento por su ID.
 * @name PUT/editar/:idAlimento
 * @function
 * @param {string} idAlimento.path.required - ID del alimento a editar.
 * @param {Object} request.body.required - Datos de modificación.
 * @param {string} request.body.nombreAlimento - Nuevo nombre del alimento.
 * @param {string} request.body.descripcionAlimento - Nueva descripción del alimento.
 * @returns {Object} Objeto con éxito o mensaje de error.
 */
router.put('/editar/:idAlimento', alimentoController.editarAlimento);
/* ----------- */

/* DELETE METHODS */

/* ----------- */

module.exports = router;