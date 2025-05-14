const HistorialCharola = require("../models/historialCharola.model.js");

exports.obtenerHistorialAncestros = async (req, res) => {
    const charolaId = parseInt(req.params.charolaId, 10);
    if (isNaN(charolaId)) {
      return res.status(400).json({ error: 'ID de charola inválido' });
    }
  
    try {
      const fecha = await HistorialCharola.obtenerFechaCreacion(charolaId);
      if (!fecha || fecha.length === 0) {
        return res.status(404).json({ error: 'Charola no encontrada' });
      }
      const fechaCreacion = fecha[0].fechaCreacion;
  
      const ancestros = await HistorialCharola.obtenerAncestros(charolaId);
      
      return res.status(200).json({
        fechaCreacion,
        ancestros
      });
    } catch (err) {
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  };