const express = require("express");
const router = express.Router();
/* ------------ */

/* INCLUDE CONTROLLERS */
const charolaController = require('../controllers/charola.controller');
/* ------------------- */

/* GET METHODS */

router.get('/consultarCharola/:id', charolaController.consultarCharola);

router.get('/charolas', charolaController.obtenerCharolas);

router.get('/charolas/filtrar', charolaController.filtrarCharolasPorFecha);


/* ----------- */

/* POST METHODS */
router.post('/registrarCharola', charolaController.registrarCharola);

router.post('/alimentar', charolaController.alimentarCharola);

router.post('/hidratar', charolaController.hidratarCharola);
/* ----------- */

/* PUT METHODS */
router.put('/editarCharola', charolaController.editarCharola);
/* ----------- */

/* DELETE METHODS */
router.delete("/eliminarCharola/:id", charolaController.eliminarCharola);

/* ----------- */

module.exports = router;
