// RF20: Seleccionar Charolas Para Tamizar y Registrar sus Datos - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF37

/**
 * @file Define las rutas relacionadas con la gestión de alimentos.
 * @module routes/alimentacion
 */


//Dependencias
const express = require("express");
const router = express.Router();

// Middlewares
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Controladores
const tamizadoController = require("../controllers/charolaTamizado.controller.js");

/**
 * POST 
 * @description Realiza el tamizado de una charola
 * @returns {Json} Respuesta de éxito o error
 */

router.post('/tamizadoIndividual', tamizadoController.tamizarCharolaIndividual);

/**
 * POST 
 * @description Realiza el tamizado de varias charolas
 * @returns {Json} Respuesta de éxito o error
 */

router.post('/tamizadoMultiple', tamizadoController.tamizarMultiplesCharolas);

module.exports = router;