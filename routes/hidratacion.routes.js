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
 * POST /agregar
 * @description Registra un nuevo tipo de hidratación en el sistema.
 * @param {string} req.body.nombre - Nombre de la hidratación.
 * @param {string} req.body.descripcion - Descripción de la hidratación.
 * @returns {Object} Mensaje de éxito o error.
 */
router.post("/agregar", hidratacionController.registrarHidratacion);

module.exports = router;
