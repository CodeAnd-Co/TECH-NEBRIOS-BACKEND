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

/* ----------- */

/* PUT METHODS */

/* ----------- */

/* DELETE METHODS */

/* ----------- */

module.exports = router;
