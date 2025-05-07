/* Dependencias */
const express = require("express");
const router = express.Router();
/* ------------ */

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

/* INCLUDE CONTROLLERS */
const controlador = require("../controllers/usuario.controller");
/* ------------------- */

/* GET METHODS */
/* ----------- */

/* POST METHODS */
router.post("/iniciarSesion", controlador.iniciarSesion);
router.post("/registrarUsuario", controlador.registrarUsuario);
/* ----------- */

/* PUT METHODS */

/* ----------- */

/* DELETE METHODS */

/* ----------- */

module.exports = router;
