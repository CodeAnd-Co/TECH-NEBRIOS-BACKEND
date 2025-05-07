const { Alimento } = require("../models/alimento.model");

module.exports.eliminarAlimento = async (req, res) => {
    const { idAlimento } = req.params;

    try {
        const alimento = new Alimento(idAlimento);
        await alimento.eliminar();
        res.json({ success: true, message: "Alimento eliminado" });
    } catch (error) {
        console.error("Error al eliminar alimento:", error);
        res.status(500).send("Error al eliminar alimento");
    }
}
