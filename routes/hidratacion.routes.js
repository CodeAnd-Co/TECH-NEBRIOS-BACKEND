
/* Dependencias */
const express = require("express");
const router = express.Router();

router.use(express.json()); 
router.use(express.urlencoded({ extended: true }));

/* INCLUDE CONTROLLERS */
const hidratacionController = require("../controllers/hidratacion.controller.js");
/* ------------------- */

/* GET METHODS */
/**
 * GET / - Obtiene la lista de toda la hidratación.
 * @name GET/
 * @function
 * @memberof module:routes/hidratacionRoutes
 */
router.get('/', hidratacionController.obtenerHidratacion); 
/* ----------- */

/* POST METHODS */

/* ----------- */

/* PUT METHODS */
/**

/* ----------- */

/* DELETE METHODS */

/**
 * DELETE /eliminar/:idHidrato - Elimina un hidrato existente.
 * @name DELETE/eliminar/:idHidratacion
 * @function
 * @memberof module:routes/hidratacionRoutes
 */
router.delete('/eliminar/:idHidratacion', hidratacionController.eliminarHidratacion);
/* ----------- */

module.exports = router;