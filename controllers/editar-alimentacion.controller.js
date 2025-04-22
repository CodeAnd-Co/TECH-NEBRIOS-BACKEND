const { Alimento } = require("../models/alimento.model");

module.exports.editarAlimento = async (req, res) => {
    const { idAlimento } = req.params;
    const { nombreAlimento, descripcionAlimento } = req.body;

    try {
        const alimento = new Alimento(idAlimento, nombreAlimento, descripcionAlimento);
        await alimento.actualizar();
        res.json({ success: true, message: "Alimento actualizado" });
    } catch (error) {
        console.error("Error al editar alimento:", error);
        res.status(500).send("Error al editar alimento");
    }
}
