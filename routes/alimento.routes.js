/* Dependencias */
const express = require("express");
const router = express.Router();

router.use(express.json()); 
router.use(express.urlencoded({ extended: true }));

/* INCLUDE CONTROLLERS */
const alimentoController = require("../controllers/alimento.controller.js");
/* ------------------- */

/* GET METHODS */
router.get('/', alimentoController.obtenerAlimentos); 
/* ----------- */

/* POST METHODS */

/* ----------- */

/* PUT METHODS */
router.put('/editar/:idAlimento', alimentoController.editarAlimento);
/* ----------- */

/* DELETE METHODS */

/* ----------- */

module.exports = router;