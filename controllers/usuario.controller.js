const Usuario = require("../models/usuario.model.js");

exports.iniciarSesion = async (req, res) => {
    try{

        console.log("Body: ", req.body);

        const sesion = await Usuario.iniciarSesion(req.body);

        //console.log("Sesion: ", sesion);

        if(sesion.error){
            return res.status(401).json({code:401});
        }

        return res.status(200).json({code: 200, token: sesion});

    }catch(error){
        return res.status(500).json({code: 500})
    }
};
