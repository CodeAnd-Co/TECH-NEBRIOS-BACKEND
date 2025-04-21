const Charola = require('../models/charola.modelo');

const obtenerCharolas = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const offset = (page - 1) * limit;

    const datos = await Charola.getCharolasPaginadas(limit, offset);
    const total = await Charola.getCantidadTotal();
    const totalNumber = Number(total);  // ← conversión segura
    
    res.status(200).json({
      total: totalNumber,
      page,
      limit,
      totalPages: Math.ceil(totalNumber / limit),
      data: datos
    });
    console.log("Se pudo coenctar el front con el back :)")
  } catch (error) {
    console.error('Error al obtener charolas paginadas:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

module.exports = {
  obtenerCharolas
};
