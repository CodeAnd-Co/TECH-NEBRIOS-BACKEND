const express = require("express");
const router = express.Router();
/* ------------ */

/* INCLUDE CONTROLLERS */
const controlador = require("../controllers/tablaCharola.controller");
const controladorDetalle = require("../controllers/charola.controller");
/* ------------------- */

/* GET METHODS */

router.get('/consultarCharola/:id', controladorDetalle.consultarCharola);

router.get("/getTablaCharolas", controlador.getTablasCharolas);

/* ----------- */

/* POST METHODS */
router.post("/postArchivoExcel", controlador.postDescargarExcel);
/* ----------- */

/* PUT METHODS */

/* ----------- */

/* DELETE METHODS */

/* ----------- */

module.exports = router;
