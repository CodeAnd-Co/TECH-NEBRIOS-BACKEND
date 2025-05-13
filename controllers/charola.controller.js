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
    if (isNaN(charolaId)) {
      return res.status(400).json({ error: 'ID de charola inválido' });
    }
  
    try {
      const fecha = await Charola.obtenerFechaCreacion(charolaId);
      if (!fecha || fecha.length === 0) {
        return res.status(404).json({ error: 'Charola no encontrada' });
      }
      const fechaCreacion = fecha[0].fechaCreacion;
  
      const ancestros = await Charola.obtenerAncestros(charolaId);
      
      return res.status(200).json({
        fechaCreacion,
        ancestros
      });
    } catch (err) {
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  };