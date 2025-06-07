const ExcelJS = require('exceljs');

async function generarExcelDesdeDatos(datos, eliminadas) {
  const libro_trabajo = new ExcelJS.Workbook();
  const hoja_trabajo = libro_trabajo.addWorksheet('Charolas'); 
  const hoja_eliminadas = libro_trabajo.addWorksheet('Charolas Eliminadas');

  hoja_trabajo.columns = [
    { header: 'Nombre Charola', key: 'nombreCharola', width: 15 },
    { header: 'Fecha de Creación', key: 'fechaCreacion', width: 20 },
    { header: 'Fecha Actualización', key: 'fechaActualizacion', width: 20 },
    { header: 'Ancestros de la Charola', key: 'charolaAncestros', width: 30 },
    { header: 'Comida (gramos)', key: 'comidaCiclo', width: 15 },
    { header: 'Hidratación (gramos)', key: 'hidratacionCiclo', width: 18 },
    { header: 'Estado', key: 'estado', width: 15 },
    { header: 'Densidad Larva', key: 'densidadLarva', width: 15 }
  ];

  hoja_eliminadas.columns = [
    { header: 'Charola Eliminada', key: 'charola_nombre', width: 20 },
    { header: 'Usuario', key: 'user', width: 15 },
    { header: 'Fecha de Eliminación', key: 'fechaEliminacion', width: 20 },
    { header: 'Motivo de Eliminación', key: 'motivo', width: 30 }    
  ];

  datos.forEach((fila) => {
    hoja_trabajo.addRow({
      ...fila,
      charolaAncestros: Array.isArray(fila.charolaAncestros)
        ? fila.charolaAncestros.join(', ')
        : ''
    });
  });  

  eliminadas.forEach((fila) => {
    hoja_eliminadas.addRow({
      charola_nombre: fila.charola_nombre,
      user: fila.user,
      fechaEliminacion: fila.fechaEliminacion,
      motivo: fila.motivo
    });
  });

  const buffer = await libro_trabajo.xlsx.writeBuffer();
  return buffer;
}

module.exports = { generarExcelDesdeDatos };