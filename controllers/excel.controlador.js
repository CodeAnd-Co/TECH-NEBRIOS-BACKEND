const { obtenerDatosCharolas } = require('../models/excel.modelo');
const { generarExcelDesdeDatos } = require('../utils/excel.generador');

exports.descargarExcel = async (req, res) => {
  try {
    const datos = await obtenerDatosCharolas();

    if (!datos || datos.length === 0) {
      return res.status(404).json({ mensaje: 'No se encontraron datos para generar el Excel.' });
    }

    const buffer = await generarExcelDesdeDatos(datos);

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=charolas.xlsx');
    res.send(buffer);
  } catch (error) {
    console.error('❌ Error generando Excel:', error);
    res.status(500).json({ mensaje: 'Error interno al generar el archivo Excel.' });
  }
};
