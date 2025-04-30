const Charola = require("../models/charola.model.js");
const {generarExcelDesdeDatos}  = require('../utils/excelGenerador');

exports.registrarCharola = async (req, res) => {};

exports.getTablasCharolas = async (req, res) => {
    try{
        const resultado = await Charola.tablaCharolas();

        res.status(200).json(resultado);
    }catch (error){
        console.error("[Controller]. Error al obtener informacion de las charolas: ", error);
        throw error;
    }
};

exports.postDescargarExcel = async (req, res) => {
    try{
        const datos = await Charola.tablaCharolas();

        if (!datos || datos.length === 0) {
            return res.status(204).json({ mensaje: 'No se encontraron datos para generar el Excel.' });
        }

        const buffer = await generarExcelDesdeDatos(datos);
        console.log(buffer.length);

        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', 'attachment; filename=charolas.xlsx');
        res.send(buffer);
    } catch (error){
        console.error("[Controller]. Error al descargar el archivo de excel: ", error);
        throw error;
    }
};

exports.obtenerHistorialAncestros = async (req, res) => {
    const charolaId = parseInt(req.params.charolaId, 10);
    console.log("[Controller][obtenerHistorialAncestros] req.params:", req.params);
    console.log("[Controller][obtenerHistorialAncestros] charolaId parsed:", charolaId);
  
    if (isNaN(charolaId)) {
      console.log("[Controller][obtenerHistorialAncestros] ID inválido");
      return res.status(400).json({ error: 'ID inválido' });
    }
  
    try {
      console.log("[Controller][obtenerHistorialAncestros] llamando a modelo.obtenerAncestros");
      const { actual, ancestros } = await Charola.obtenerAncestros(charolaId);
      console.log("[Controller][obtenerHistorialAncestros] respuesta modelo actual:", actual);
      console.log("[Controller][obtenerHistorialAncestros] respuesta modelo ancestros:", ancestros);
  
      if (!actual) {
        console.log("[Controller][obtenerHistorialAncestros] no se encontró la charola");
        return res.status(404).json({ error: 'Charola no encontrada' });
      }
  
      console.log("[Controller][obtenerHistorialAncestros] enviando éxito 200");
      res.status(200).json({
        charola_actual: actual,
        ancestros
      });
    } catch (error) {
      console.error("[Controller][obtenerHistorialAncestros] error capturado:", error);
      res.status(500).json({ error: 'Error del servidor' });
    }
};