const ExcelJS = require('exceljs');

async function generarExcelDesdeDatos(datos) {
  const libro_trabajo = new ExcelJS.Workbook();
  const hoja_trabajo = libro_trabajo.addWorksheet('Charolas'); 

  hoja_trabajo.columns = [
    { header: 'Nombre Charola', key: 'nombreCharola', width: 10 },
    { header: 'Fecha Actualización', key: 'fechaCreacion', width: 20 },
    { header: 'Fecha Actualización', key: 'fechaActualizacion', width: 20 },
    { header: 'Peso Charola (gramos)', key: 'pesoCharola', width: 18 },
    { header: 'Comida (gramos)', key: 'comidaCiclo', width: 15 },
    { header: 'Hidratación (gramos)', key: 'hidratacionCiclo', width: 18 },
    { header: 'Estado', key: 'estado', width: 15 },
    { header: 'Densidad Larva', key: 'densidadLarva', width: 15 }
  ];

  datos.forEach((fila) => {
    hoja_trabajo.addRow(fila);
  });

  const buffer = await libro_trabajo.xlsx.writeBuffer();
  return buffer;
}

module.exports = { generarExcelDesdeDatos };