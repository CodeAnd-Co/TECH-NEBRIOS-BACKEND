const express = require('express');
const router = express.Router();
const { obtenerCharolas } = require('../controllers/charolas.controlador');

router.get('/charolas', obtenerCharolas);

module.exports = router;
