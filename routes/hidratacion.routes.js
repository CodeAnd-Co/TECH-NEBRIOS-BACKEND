//RF40: Editar un tipo de hidratación en el sistema - https://codeandco-wiki.netlify.app/docs/next/proyectos/larvas/documentacion/requisitos/RF40
// RF41 Eliminar un tipo de hidratación en el sistema - Documentación: https://codeandco-wiki.netlify.app/docs/next/proyectos/larvas/documentacion/requisitos/RF41
// RF36: Registrar un nuevo tipo de hidratación al sistema - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF36

/**
 * @file Define las rutas relacionadas con la gestión de alimentos.
 * @module routes/hidratacion
 */

//Dependencias
const express = require("express");
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Controladores
const hidratacionController = require("../controllers/hidratacion.controller.js");

/**
 * GET / - Obtiene la lista de toda la hidratación.
 * @name GET/
 * @function
 * @memberof module:routes/hidratacionRoutes
 */
router.get("/", hidratacionController.obtenerHidratacion);

/**
 * PUT /editar/:idHidratacion - Edita hidratacion existente.
 * @name PUT/editar/:idHidratacion
 * @function
 * @memberof module:routes/hidratacionRoutes
 */
router.put('/editar/:idHidratacion', hidratacionController.editarHidratacion);

/** 
 * POST /agregar
 * @description Registra un nuevo tipo de hidratación en el sistema.
 * @param {string} req.body.nombre - Nombre de la hidratación.
 * @param {string} req.body.descripcion - Descripción de la hidratación.
 * @returns {Object} Mensaje de éxito o error.
 */
router.post("/agregar", hidratacionController.registrarHidratacion);

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
