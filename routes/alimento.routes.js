//RF23: Registrar un nuevo tipo de comida en el sistema - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF23
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



module.exports = router;