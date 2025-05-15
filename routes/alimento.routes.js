//RF23: Registrar un nuevo tipo de comida en el sistema - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF23
//RF24: Editar un tipo de comida en el sistema - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF24

/**
 * @file Define las rutas relacionadas con la gestión de alimentos.
 * @module routes/alimentacion
 */


//Dependencias
const express = require("express");
const router = express.Router();


// Controladores
const alimentoController = require("../controllers/alimento.controller.js");

/**
 * GET /
 * @description Obtiene todos los alimentos registrados
 * @returns {Object[]} Lista de alimentos
 */

router.get('/', alimentoController.obtenerAlimentos); 

/**
 * POST /agregar
 * @description Registra un nuevo alimento
 * @param {string} req.body.nombre - Nombre del alimento
 * @param {string} req.body.descripcion - Descripción del alimento
 * @returns {Object} Mensaje de éxito o error
 */
router.post('/agregar', alimentoController.registrarAlimento);

/* PUT METHODS */
/**
 * PUT /editar/:idAlimento - Edita un alimento existente.
 * @name PUT/editar/:idAlimento
 * @function
 * @memberof module:routes/alimentoRoutes
 */
router.put('/editar/:idAlimento', alimentoController.editarAlimento);

/**
 * DELETE /eliminar/:idAlimento - Elimina un alimento existente.
 * @name DELETE/eliminar/:idAlimento
 * @function
 * @memberof module:routes/alimentoRoutes
 */
router.delete('/eliminar/:idAlimento', alimentoController.eliminarAlimento);


module.exports = router;