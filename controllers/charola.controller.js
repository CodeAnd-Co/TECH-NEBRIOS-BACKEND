const Charola = require("../models/charola.model.js");
const {generarExcelDesdeDatos}  = require('../utils/excelGenerador');

// Metodo http GET para obtener la informacion de todas las charolas de larva o escarabajo
// Nota: A falta de los middleware de autentificación, falta la implementacion de los errores 401 y 403
// RF11:
// https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF11
exports.getTablasCharolas = async (req, res) => {
    try{
        const resultado = await Charola.tablaCharolas();
        //const resultado = [];
        res.status(200).json(resultado);
    }catch (error){
        console.error("[Controller]. Error al obtener informacion de las charolas: ", error);
        res.status(500).json({'Error': 'Ocurrio un error en el servidor'});
    }
};

// Metodo http POST Para descargar los archivos de excel con la información de las charolas
// Nota: A falta de los middleware de autentificación, falta la implementacion de los errores 401 y 403
// RF11:
// https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF11
exports.postDescargarExcel = async (req, res) => {
    try{
        const datos = await Charola.tablaCharolas();

        // Si no hay datos de las charolas en la BD no se devuelve un buffer con el archivo
        if (!datos || datos.length === 0) {
            return res.status(200).json({'Error': 'No hay datos de charolas'});
        }

        const buffer = await generarExcelDesdeDatos(datos);

        // Headers del archivo de Excel
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', 'attachment; filename=charolas.xlsx');
        res.status(200).send(buffer);
    } catch (error){
        console.error("[Controller]. Error al descargar el archivo de excel: ", error);
        res.status(500).json({'Error': 'Ocurrio un error en el servidor'});
    }
}