
/* Dependencias */
const express = require("express");
const router = express.Router();

router.use(express.json()); 
router.use(express.urlencoded({ extended: true }));

/* INCLUDE CONTROLLERS */
const frasController = require("../controllers/fras.controller.js");
/* ------------------- */

/* GET METHODS */
/**
 * GET / - Obtiene la lista de todos los alimentos.
 * @name GET/
 * @function
 * @memberof module:routes/frasRoutes
 */
router.get('/', frasController.obtenerFras); 
/* ----------- */

/* POST METHODS */

/* ----------- */

/* PUT METHODS */
/**

/* ----------- */

/* DELETE METHODS */

/* ----------- */

module.exports = router;