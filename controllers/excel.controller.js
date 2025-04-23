//../controllers/excel.controlador.js
const { Console } = require('console');
const { obtenerDatosCharolas } = require('../models/excel.model');
const { generarExcelDesdeDatos } = require('../utils/excel.generator');

exports.descargarExcel = async (req, res) => {
  try {
    const datos = await obtenerDatosCharolas();

    if (!datos || datos.length === 0) {
      return res.status(204).json({ mensaje: 'No se encontraron datos para generar el Excel.' });
    }

    const buffer = await generarExcelDesdeDatos(datos);
    console.log(buffer.length);

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=charolas.xlsx');
    res.send(buffer);
    console.log("Se conectó back y el front")
  } catch (error) {
    console.error('❌ Error generando Excel:', error);
    res.status(500).json({ mensaje: 'Error interno al generar el archivo Excel.' });
  }
};
