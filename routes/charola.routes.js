/* Dependencias */
const express = require("express");
const router = express.Router();
/* ------------ */

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

/* INCLUDE CONTROLLERS */
const controlador = require("../controllers/charola.controller");
/* ------------------- */

/* GET METHODS */
router.get('/consultarCharola/:id', controlador.consultarCharola);
/* ----------- */

/* POST METHODS */
router.post("/registrarCharola", controlador.registrarCharola);
/* ----------- */

/* PUT METHODS */

/* ----------- */

/* DELETE METHODS */
router.delete("/eliminarCharola/:id", controlador.eliminarCharola);

/* ----------- */

module.exports = router;
