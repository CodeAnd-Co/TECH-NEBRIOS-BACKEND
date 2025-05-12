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
 * PUT /editar/:idAlimento - Edita un alimento existente.
 * @name PUT/editar/:idAlimento
 * @function
 * @memberof module:routes/alimentoRoutes
 */
router.put('/editar/:idAlimento', alimentoController.editarAlimento);
/* ----------- */

/* DELETE METHODS */

/* ----------- */

module.exports = router;