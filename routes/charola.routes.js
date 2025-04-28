/* Dependencias */
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
/* ------------ */

router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

/* INCLUDE CONTROLLERS */
const controlador = require("../controllers/charola.controller");
/* ------------------- */

/* GET METHODS */
router.get("/getTablaCharolas", controlador.getTablasCharolas);
/* ----------- */

/* POST METHODS */
router.post("/registrarCharola", controlador.registrarCharola);
router.post("/postArchivoExcel", controlador.postDescargarExcel);
/* ----------- */

/* PUT METHODS */

/* ----------- */

/* DELETE METHODS */

/* ----------- */

module.exports = router;
