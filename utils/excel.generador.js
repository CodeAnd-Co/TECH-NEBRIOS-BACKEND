const ExcelJS = require('exceljs');

async function generarExcelDesdeDatos(datos) {
  const libro_trabajo = new ExcelJS.Workbook();
  const hoja_trabajo = libro_trabajo.addWorksheet('Charolas');

  hoja_trabajo.columns = [
    { header: 'Charola ID', key: 'charolaId', width: 10 },
    { header: 'Comida Ciclo', key: 'comidaCiclo', width: 15 },
    { header: 'Hidratación Ciclo', key: 'hidratacionCiclo', width: 18 },
    { header: 'Fecha Actualización', key: 'fechaActualizaci', width: 20 },
    { header: 'Estado', key: 'estado', width: 15 },
    { header: 'Densidad Larva', key: 'densidadLarva', width: 15 },
    { header: 'Fecha Creación', key: 'fechaCreacion', width: 20 },
    { header: 'Peso Charola', key: 'pesoCharola', width: 15 },
    { header: 'Cantidad Residuo', key: 'cantidadResiduo', width: 18 },
  ];

  datos.forEach((fila) => {
    hoja_trabajo.addRow(fila);
  });

  const buffer = await libro_trabajo.xlsx.writeBuffer();
  return buffer;
}

module.exports = { generarExcelDesdeDatos };
