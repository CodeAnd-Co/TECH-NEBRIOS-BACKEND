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
router.get("/getTablaCharolas", controlador.getTablasCharolas);
router.get("/:charolaId/historial", controlador.obtenerHistorialAncestros);
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
