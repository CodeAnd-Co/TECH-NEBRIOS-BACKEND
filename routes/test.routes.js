/* Dependencias */
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
/* ------------ */

router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

/* INCLUDE CONTROLLERS */
const controlador = require("../controllers/test.controller");
/* ------------------- */

/* GET METHODS */

router.get("/get", controlador.get_test);
/* ----------- */

/* POST METHODS */
/* ----------- */

/* PUT METHODS */

/* ----------- */

/* DELETE METHODS */

/* ----------- */

module.exports = router;
