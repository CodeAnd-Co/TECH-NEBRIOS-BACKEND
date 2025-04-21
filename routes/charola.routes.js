const express = require('express');
const enrutador = express.Router();
const controlador = require('../controllers/charola.controller.js');

// Ruta para eliminar una charola
enrutador.delete('/eliminar-charola/:id', controlador.eliminarCharola);

module.exports = enrutador;
