const Usuario = require("../models/usuario.model.js");

exports.iniciarSesion = async (req, res) => {
    try{
        const sesion = await Usuario.iniciarSesion(req.body);

        if(sesion.error){
            return res.status(404).json({code:404, msg: sesion.error});
        }

        res.status(200).json({code: 200, token: sesion.token});

    }catch(error){
        res.status(500).json({code: 500, msg: "Error interno del servidor"})
    }
};
