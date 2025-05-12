const Historial = require("../models/historialActividad.model.js");

/** 
 * @description Metodo GET para obtener el historial de actividad de una charola, esto incluye el estado actual, el historial de
 * alimentación y el historial de hidratación.
 * RF18: https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF18
 * @param {?charolaId=:id} req - Respuesta HTTP que contiene el id de la charola a la cual se obtendrá su historial.
 * @param {*} res - Respuesta HTTP que se usa para enviar el resultado.
 * @returns {json} Estado de la charola, historial de alimentación, historial de hidratación.
*/
exports.getHistorialActividad = async(req, res) => {
    try{
        const charola = parseInt(req.query.charolaId);

        const alimentacion = await Historial.historialAlimentacion(charola);

        const hidratacion = await Historial.historialHidratacion(charola);

        const estado = await Historial.estadoCharola(charola);

        if(hidratacion.length > 0 || alimentacion.length > 0){
            res.status(200).json({"codigo": "Ok", "estado": estado, "alimentacion": alimentacion, "hidratacion": hidratacion});
        } else {
            res.status(201).json({"codigo": "Ok", "estado": estado});
        }

    } catch (error){
        console.error("[Controller]. Error al obtener informacion de las charolas: ", error);
        res.status(500).json({'error': 'Ocurrio un error en el servidor'});
    }
}