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
const alimentacionController = require("../controllers/alimento.controller.js");

/**
 * GET /
 * @description Obtiene todos los alimentos registrados
 * @returns {Object[]} Lista de alimentos
 */

router.get('/', alimentacionController.obtenerAlimentos); 

/**
 * POST /agregar
 * @description Registra un nuevo alimento
 * @param {string} req.body.nombre - Nombre del alimento
 * @param {string} req.body.descripcion - Descripción del alimento
 * @returns {Object} Mensaje de éxito o error
 */
router.post('/agregar', alimentacionController.registrarAlimento);

/**
 * DELETE /eliminar/:idAlimento
 * @description Elimina un alimento por ID
 * @param {string} req.params.idAlimento - ID del alimento a eliminar
 * @returns {Object} Resultado de la operación
 */
router.delete('/eliminar/:idAlimento', alimentacionController.eliminarAlimento);


module.exports = router;