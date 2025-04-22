/* Dependencias */
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.json()); 
router.use(express.urlencoded({ extended: true }));

/* INCLUDE CONTROLLERS */
const editarAlimentoController = require("../controllers/editar-alimentacion.controller.js");
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

/* ----------- */

module.exports = router;