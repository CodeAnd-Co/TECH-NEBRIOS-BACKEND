/* Dependencias */
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
/* ------------ */

router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

/* INCLUDE CONTROLLERS */
const controlador = require("../controllers/comida.controller");
/* ------------------- */

/* GET METHODS */
router.get("/obtener-comida", controlador.obtenerComida);
/* ----------- */

/* POST METHODS */
/* ----------- */

/* PUT METHODS */

/* ----------- */

/* DELETE METHODS */

/* ----------- */

module.exports = router;
