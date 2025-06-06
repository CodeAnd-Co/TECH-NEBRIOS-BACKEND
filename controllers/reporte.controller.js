// RF11:
// https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF11

const Reporte = require('../models/reporte.model.js');
const { generarExcelDesdeDatos } = require('../utils/excelGenerador.js');

/** 
  *@description Metodo http GET para obtener la informacion de todas las charolas de larva o escarabajo.
  * @param {*} res - Respuesta HTTP que se usa para enviar el resultado.
  * @returns {JSON} Codigo de respuesta y array con la consulta de la BD.
*/
// Nota: A falta de los middleware de autentificación, falta la implementacion de los errores 401 y 403

exports.getDatos = async (req, res) => {
    try {
        const resultado = await Reporte.obtenerDatos();

        if (resultado.error) {
            res.status(500).json({ 'error': 'Ocurrio un error en el servidor' });
        }

        if (resultado.length > 0) {
            res.status(200).json({ 'code': 'Ok', 'resultado': resultado });
        } else {
            res.status(201).json({ 'code': 'Ok', 'resultado': resultado });
        }
    } catch (error) {
        console.error('[Controller]. Error al obtener informacion de las charolas: ', error);
        res.status(500).json({ 'error': 'Ocurrio un error en el servidor' });
    }
};

/** 
  *@description Metodo http POST Para descargar los archivos de excel con la información de las charolas.
  * @param {*} res - Respuesta HTTP que se usa para enviar el archivo excel.
  * @returns {buffer} Codigo de respuesta y buffer del archivo excel.
*/
// Nota: A falta de los middleware de autentificación, falta la implementacion de los errores 401 y 403

exports.postDescargarExcel = async (req, res) => {
    try {
        const datos = await Reporte.obtenerDatos();

        // Si no hay datos de las charolas en la BD no se devuelve un buffer con el archivo
        if (!datos || datos.length === 0) {
            return res.status(201).json({ 'error': 'No hay datos de charolas' });
        }

        const buffer = await generarExcelDesdeDatos(datos);

        // Headers del archivo de Excel
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', 'attachment; filename=charolas.xlsx');
        res.status(200).send(buffer);
    } catch (error) {
        console.error('[Controller]. Error al descargar el archivo de excel: ', error);
        res.status(500).json({ 'Error': 'Ocurrio un error en el servidor' });
    }
}