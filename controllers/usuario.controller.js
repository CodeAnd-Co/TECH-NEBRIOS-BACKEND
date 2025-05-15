
/**
 * @description Registra un nuevo usuario en la base de datos.
 * @param {*} req - Solicitud HTTP que contiene información del usuario.
 * @param {*} res - Respuesta HTTP que se usa para enviar el resultado.
 * @returns {JSON} Código de respuesta
 */
exports.registrarUsuario = async (req, res) => {
    try {
        return res.status(201).json({ code: 201 });
    } catch (error) {
        return res.status(500).json({ code: 500 });
    }
}
