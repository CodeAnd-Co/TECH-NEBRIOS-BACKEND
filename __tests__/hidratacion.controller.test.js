const { obtenerHidratacion } = require('../controllers/hidratacion.controller');
const { Hidratacion } = require('../models/hidratacion.model');

jest.mock('../models/hidratacion.model');

describe('obtenerHidratacion', () => {
  let req;
  let res;
  let mockHidratacionInstance;

  beforeEach(() => {
    req = {};
    res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };

    mockHidratacionInstance = {
      obtener: jest.fn()
    };

    Hidratacion.mockImplementation(() => mockHidratacionInstance);
  });

  test('debería responder con lista de hidratación si la consulta es exitosa', async () => {
    const mockData = [
      { idHidratacion: 1, nombreHidratacion: 'Agua', descripcionHidratacion: 'Natural' },
      { idHidratacion: 2, nombreHidratacion: 'Suero', descripcionHidratacion: 'Electrolitos' }
    ];
    mockHidratacionInstance.obtener.mockResolvedValue(mockData);

    await obtenerHidratacion(req, res);

    expect(mockHidratacionInstance.obtener).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith(mockData);
  });

  test('debería responder con error 500 si la consulta falla', async () => {
    mockHidratacionInstance.obtener.mockRejectedValue(new Error('DB Error'));

    await obtenerHidratacion(req, res);

    expect(mockHidratacionInstance.obtener).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith('Error al obtener hidratación');
  });
});
