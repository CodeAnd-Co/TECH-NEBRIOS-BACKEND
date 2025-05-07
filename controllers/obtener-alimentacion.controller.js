const { Alimento } = require("../models/alimento.model");

module.exports.obtenerAlimentos = async (req, res) => {
    const alimento = new Alimento();
    try {
        const alimentos = await alimento.obtener();
        res.json(alimentos);
    } catch (error) {
        console.error("Error al obtener alimentos:", error);
        res.status(500).send("Error al obtener alimentos");
    }
}