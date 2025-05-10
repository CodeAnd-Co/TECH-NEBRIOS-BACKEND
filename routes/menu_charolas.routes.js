// RF16 Visualizar todas las charolas registradas en el sistema
// Documentación: https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF16

const express = require('express');
const router = express.Router();
const { obtenerCharolas } = require('../controllers/menu_charolas.controller');

/**
 * @route GET /charolas
 * @group Charolas - Endpoints relacionados con la visualización de charolas
 * @summary Visualiza todas las charolas registradas (paginado).
 * @param {number} [page.query] - Número de página (opcional).
 * @param {number} [limit.query] - Límite de elementos por página (opcional).
 * @returns {object} 200 - Lista paginada de charolas.
 * @returns {Error} 500 - Error interno del servidor.
 * 
 * @example
 * GET /charolas?page=1&limit=20
 */
router.get('/charolas', obtenerCharolas);

module.exports = router;