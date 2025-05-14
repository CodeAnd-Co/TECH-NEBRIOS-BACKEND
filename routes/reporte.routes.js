const express = require("express");
const router = express.Router();
/* ------------ */

/* INCLUDE CONTROLLERS */
const reporteController = require('../controllers/reporte.controller');
/* ------------------- */

/* GET METHODS */
router.get("/getDatos", reporteController.getDatos);
/* ----------- */

/* POST METHODS */
router.post("/postArchivoExcel", reporteController.postDescargarExcel);
/* ----------- */

/* PUT METHODS */

/* ----------- */

/* DELETE METHODS */

/* ----------- */

module.exports = router;
