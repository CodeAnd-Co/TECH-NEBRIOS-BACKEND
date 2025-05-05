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

/* ----------- */

/* DELETE METHODS */
router.delete('/eliminar/:idAlimento', alimentoController.eliminarAlimento);
/* ----------- */

module.exports = router;