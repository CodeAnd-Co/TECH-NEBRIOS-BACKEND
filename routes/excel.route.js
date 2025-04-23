const express = require('express');
const enrutador = express.Router();
const controlador = require('../controllers/excel.controller');

// Ruta para generar y descargar Excel
enrutador.get('/descargar-excel', controlador.descargarExcel);

module.exports = enrutador;
