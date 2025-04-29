/* Dependencias */
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
/* ------------ */

router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

/* INCLUDE CONTROLLERS */
const controlador = require("../controllers/usuario.controller");
/* ------------------- */

/* GET METHODS */
/* ----------- */

/* POST METHODS */
router.post("/iniciarSesion", controlador.iniciarSesion);
/* ----------- */

/* PUT METHODS */

/* ----------- */

/* DELETE METHODS */

/* ----------- */

module.exports = router;
