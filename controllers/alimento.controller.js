const { Alimento } = require("../models/alimento.model");

module.exports.obtenerAlimentos = async (req, res) => {
    const alimento = new Alimento();
    try {
        const alimentos = await alimento.obtener();
        res.json(alimentos);
    } catch (error) {
        res.status(500).send("Error al obtener alimentos");
    }
}

module.exports.editarAlimento = async (req, res) => {
    const { idAlimento } = req.params;
    const { nombreAlimento, descripcionAlimento } = req.body;

    try {
        const alimento = new Alimento(idAlimento, nombreAlimento, descripcionAlimento);
        await alimento.actualizar();
        res.json({ success: true, message: "Alimento actualizado" });
    } catch (error) {
        res.status(500).send("Error al editar alimento");
    }
}