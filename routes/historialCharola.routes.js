/* Dependencias */
const express = require("express");
const router = express.Router();
/* ------------ */

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

/* INCLUDE CONTROLLERS */
const historialCharolaController = require('../controllers/historialCharola.controller');
/* ------------------- */

/* GET METHODS */
router.get('/:charolaId/ancestros', historialCharolaController.obtenerHistorialAncestros);

router.get('/historialActividad', historialCharolaController.obtenerHistorialActividad)
/* ----------- */

/* POST METHODS */
router.post('/:charolaId/ancestros', historialCharolaController.postHistorialAncestros);
/* ----------- */

/* PUT METHODS */

/* ----------- */

/* DELETE METHODS */

/* ----------- */

module.exports = router;