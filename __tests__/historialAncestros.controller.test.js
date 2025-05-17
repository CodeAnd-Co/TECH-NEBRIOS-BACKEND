const historialController = require('../controllers/historialCharola.controller');
const historialModel = require('../models/historialCharola.model');

jest.mock('../models/historialCharola.model');

describe('Controlador: historialCharola', () => {
  let req, res;

  beforeEach(() => {
    req = { params: {}, query: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    jest.clearAllMocks();
  });

  describe('obtenerHistorialAncestros', () => {
    test('✅ 200 si se encuentra la charola y tiene ancestros', async () => {
      req.params.charolaId = '101';
      const mockFecha = [{ fechaCreacion: '2024-05-01' }];
      const mockAncestros = [
        { charolaId: 1001, relacion: 'abuela' },
        { charolaId: 1005, relacion: 'madre' }
      ];

      historialModel.obtenerFechaCreacion.mockResolvedValue(mockFecha);
      historialModel.obtenerAncestros.mockResolvedValue(mockAncestros);

      await historialController.obtenerHistorialAncestros(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        fechaCreacion: '2024-05-01',
        ancestros: mockAncestros
      });
    });

    test('❌ 400 si el charolaId no es válido', async () => {
      req.params.charolaId = 'abc';

      await historialController.obtenerHistorialAncestros(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'ID de charola inválido' });
    });

    test('❌ 404 si no se encuentra la charola', async () => {
      req.params.charolaId = '999';
      historialModel.obtenerFechaCreacion.mockResolvedValue([]);

      await historialController.obtenerHistorialAncestros(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: 'Charola no encontrada' });
    });

    test('❌ 500 si ocurre un error inesperado', async () => {
      req.params.charolaId = '5';
      historialModel.obtenerFechaCreacion.mockRejectedValue(new Error('Error')); 

      await historialController.obtenerHistorialAncestros(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'Error interno del servidor' });
    });
  });
});