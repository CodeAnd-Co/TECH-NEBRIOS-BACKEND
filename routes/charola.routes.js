const express = require("express");
const router = express.Router();
/* ------------ */

/* INCLUDE CONTROLLERS */
const charolaController = require('../controllers/charola.controller');
/* ------------------- */

/* GET METHODS */

router.get('/consultarCharola/:id', charolaController.consultarCharola);

router.get('/charolas', charolaController.obtenerCharolas);

/* ----------- */

/* POST METHODS */
router.post('/registrarCharola', charolaController.registrarCharola);

router.post('/alimentar', charolaController.alimentarCharola);

router.post('/hidratar', charolaController.hidratarCharola);

router.post("/eliminarCharola/:id", charolaController.eliminarCharola);

/* ----------- */

/* PUT METHODS */
router.put('/editarCharola', charolaController.editarCharola);
/* ----------- */

/* DELETE METHODS */

/* ----------- */

module.exports = router;
