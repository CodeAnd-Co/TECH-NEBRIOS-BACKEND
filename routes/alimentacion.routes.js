/**
 * @file Define las rutas relacionadas con la gestión de alimentos.
 * @module routes/alimentacion
 */

const express = require("express");
const router = express.Router();

// Middlewares
router.use(express.json());
router.use(express.urlencoded({ extended: true }));


// Controladores
const obtenerAlimentosController = require("../controllers/obtener-alimentacion.controller.js");
const eliminarAlimentoController = require("../controllers/eliminar-alimentacion.controller.js");
const registrarAlimentoController = require("../controllers/agregar-alimentacion.controller.js");

/**
 * GET /
 * @description Obtiene todos los alimentos registrados
 * @returns {Object[]} Lista de alimentos
 */

router.get('/', obtenerAlimentosController.obtenerAlimentos); 

/**
 * POST /agregar
 * @description Registra un nuevo alimento
 * @param {string} req.body.nombre - Nombre del alimento
 * @param {string} req.body.descripcion - Descripción del alimento
 * @returns {Object} Mensaje de éxito o error
 */
router.post('/agregar', registrarAlimentoController.registrarAlimento);

/**
 * DELETE /eliminar/:idAlimento
 * @description Elimina un alimento por ID
 * @param {string} req.params.idAlimento - ID del alimento a eliminar
 * @returns {Object} Resultado de la operación
 */
router.delete('/eliminar/:idAlimento', eliminarAlimentoController.eliminarAlimento);


module.exports = router;