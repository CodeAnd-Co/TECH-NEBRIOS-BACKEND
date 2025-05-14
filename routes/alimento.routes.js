
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

/* ----------- */

/* DELETE METHODS */

/* ----------- */

module.exports = router;