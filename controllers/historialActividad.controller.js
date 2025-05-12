const Historial = require("../models/historialActividad.model.js");

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