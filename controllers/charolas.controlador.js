const Charola = require('../models/charola.modelo');

const obtenerCharolas = async (req, res) => {
  try {
    const pag = parseInt(req.query.page) || 1;
    const limite = parseInt(req.query.limit) || 20;
    const offset = (page - 1) * limit;

    const datos = await Charola.getCharolasPaginadas(limite, offset);
    const total = await Charola.getCantidadTotal();
    const numTotal = Number(total);  // ← conversión segura
    
    res.status(200).json({
      total: totalNumber,
      pag,
      limite,
      totalPags: Math.ceil(numTotal / limite),
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
