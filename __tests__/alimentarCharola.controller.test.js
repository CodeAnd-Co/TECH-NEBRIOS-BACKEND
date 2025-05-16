const { alimentarCharola } = require('../controllers/charola.controller');
const Charola = require('../models/charola.model'); // Ajusta si el path es diferente

jest.mock('../models/charola.model'); // mockea el modelo para no llamar a DB real

describe('alimentarCharola', () => {
  let req, res;

  beforeEach(() => {
    req = {
      body: {}
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
  });

  it('debe regresar 400 si faltan parámetros', async () => {
    req.body = { charolaId: 1 }; // incompleto
    await alimentarCharola(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      error: 'Faltan parámetros obligatorios.'
    });
  });

  it('debe regresar 200 y los datos si todo está correcto', async () => {
    req.body = { charolaId: 1, comidaId: 2, cantidadOtorgada: 50 };

    const mockResultado = { relacion: {}, charola: {} };
    Charola.alimentar.mockResolvedValue(mockResultado);

    await alimentarCharola(req, res);

    expect(Charola.alimentar).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ data: mockResultado });
  });

  it('debe manejar errores y regresar 500', async () => {
    req.body = { charolaId: 1, comidaId: 2, cantidadOtorgada: 50 };

    Charola.alimentar.mockRejectedValue(new Error('Fallo en DB'));

    await alimentarCharola(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      error: 'Error interno al alimentar charola.'
    });
  });
});
