/* Dependencias */
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.json()); 
router.use(express.urlencoded({ extended: true }));

/* INCLUDE CONTROLLERS */
const obtenerAlimentosController = require("../controllers/obtener-alimentacion.controller.js");
const eliminarAlimentoController = require("../controllers/eliminar-alimentacion.controller.js");
const registrarAlimentoController = require("../controllers/agregar-alimentacion.controller.js");

/* ------------------- */

/* GET METHODS */
router.get('/', obtenerAlimentosController.obtenerAlimentos); 
/* ----------- */

/* POST METHODS */
router.post('/agregar', registrarAlimentoController.registrarAlimento);

/* ----------- */

/* PUT METHODS */

/* ----------- */

/* DELETE METHODS */
router.delete('/eliminar/:idAlimento', eliminarAlimentoController.eliminarAlimento);
/* ----------- */

module.exports = router;