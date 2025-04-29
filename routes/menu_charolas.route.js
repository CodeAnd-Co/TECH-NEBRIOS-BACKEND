// RF16 Visualizar todas las charolas registradas en el sistema - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF16

const express = require('express');
const router = express.Router();
const { obtenerCharolas } = require('../controllers/menu_charolas.controller');

router.get('/charolas', obtenerCharolas);

module.exports = router;
