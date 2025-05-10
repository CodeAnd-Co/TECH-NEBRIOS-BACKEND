//RF25: Eliminar un tipo de comida en el sistema - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF25

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

/* ----------- */

/* DELETE METHODS */
/**
 * DELETE /:idAlimento - Elimina un alimento por su ID.
 * @name DELETE/:idAlimento
 * @function
 * @memberof module:routes/alimentoRoutes
 */
router.delete('/eliminar/:idAlimento', alimentoController.eliminarAlimento);
/* ----------- */

module.exports = router;