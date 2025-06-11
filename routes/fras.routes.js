// RF29: Visualizar la información del Frass obtenido - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF29
// RF30: Editar la información del Frass obtenido - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF30

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
 * GET * Obtiene los registros de Fras para una charola específica.
 * @name GET/
 * @function
 * @memberof module:routes/frasRoutes
 */
router.get('/', frasController.obtenerFras); 
/* ----------- */

/* POST METHODS */
router.post('/editar/:frasId', frasController.actualizarGramos);
/* ----------- */

/* PUT METHODS */

/* ----------- */

/* DELETE METHODS */

/* ----------- */

module.exports = router;