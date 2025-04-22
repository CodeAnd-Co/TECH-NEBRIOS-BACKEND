/* Dependencias */
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.json()); 
router.use(express.urlencoded({ extended: true }));

/* INCLUDE CONTROLLERS */
const editarAlimentoController = require("../controllers/editar-alimentacion.controller.js");
const eliminarAlimentoController = require("../controllers/eliminar-alimentacion.controller.js");
/* ------------------- */

/* GET METHODS */

/* ----------- */

/* POST METHODS */

/* ----------- */

/* PUT METHODS */

/* ----------- */

/*  PATCH METHODS */
router.patch('/editar/:idAlimento', editarAlimentoController.editarAlimento);
/* ----------- */

/* DELETE METHODS */
router.delete('/eliminar/:idAlimento', eliminarAlimentoController.eliminarAlimento);
/* ----------- */

module.exports = router;