const { obtenerCharolas } = require('../controllers/menu_charolas.controller');
const Charola = require('../models/menu_charolas.model');

jest.mock('../models/menu_charolas.model');

describe('Controlador Charola', () => {
  it('responde con JSON de charolas', async () => {
    // Simula datos de prueba
    Charola.getCharolasPaginadas.mockResolvedValue([
      { nombreCharola: 'E-001', fechaCreacion: '2025-04-01' }
    ]);
    Charola.getCantidadTotal.mockResolvedValue(1);

    const req = { query: { page: '1', limit: '10' } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await obtenerCharolas(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      total: 1,
      page: 1,
      limit: 10,
      totalPages: 1,
      data: expect.any(Array)
    }));
  });
});
