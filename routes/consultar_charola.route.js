const express = require('express');
const router = express.Router();
const { consultarCharola } = require('../controllers/consultar_charola.controller');

router.get('/charola/:id', consultarCharola);

module.exports = router;