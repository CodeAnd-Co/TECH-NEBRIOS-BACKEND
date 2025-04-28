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
}