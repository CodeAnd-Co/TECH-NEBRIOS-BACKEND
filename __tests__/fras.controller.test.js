const { obtenerFras } = require('../controllers/fras.controller');
const { Fras } = require('../models/fras.model');

jest.mock('../models/fras.model');

describe('obtenerFras', () => {
  let req;
  let res;
  let mockFrasInstance;

  beforeEach(() => {
    req = {};
    res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };

    mockFrasInstance = {
      obtener: jest.fn()
    };

    Fras.mockImplementation(() => mockFrasInstance);
  });

  test('debería responder con lista de fras si la consulta es exitosa', async () => {
    const mockData = [
      { frasId: 1, gramosGenerados: 80, charolaId: 2 },
      { frasId: 2, gramosGenerados: 100, charolaId: 1 }
    ];
    mockFrasInstance.obtener.mockResolvedValue(mockData);

    await obtenerFras(req, res);

    expect(mockFrasInstance.obtener).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith(mockData);
  });

  test('debería responder con error 500 si la consulta falla', async () => {
    mockFrasInstance.obtener.mockRejectedValue(new Error('DB Error'));

    await obtenerFras(req, res);

    expect(mockFrasInstance.obtener).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith('Error al obtener Fras');
  });
});
