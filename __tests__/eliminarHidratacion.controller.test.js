const { obtenerHidratacion, eliminarHidratacion } = require('../controllers/hidratacion.controller');
const { Hidratacion } = require('../models/hidratacion.model');

jest.mock('../models/hidratacion.model');

describe('Controlador de Hidratación', () => {
  let req, res;

  beforeEach(() => {
    req = { params: {} };
    res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };
  });

  describe('obtenerHidratacion', () => {
    it('debe retornar la lista de hidratación correctamente', async () => {
      const mockData = [{ id: 1, nombre: 'agua' }];
      Hidratacion.mockImplementation(() => ({
        obtener: jest.fn().mockResolvedValue(mockData)
      }));

      await obtenerHidratacion(req, res);

      expect(res.json).toHaveBeenCalledWith(mockData);
    });

    it('debe manejar errores y retornar 500', async () => {
      Hidratacion.mockImplementation(() => ({
        obtener: jest.fn().mockRejectedValue(new Error('fallo'))
      }));

      await obtenerHidratacion(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith('Error al obtener hidratación');
    });
  });

  describe('eliminarHidratacion', () => {
    it('debe retornar 400 si el id es inválido', async () => {
      req.params.idHidratacion = 'abc';

      await eliminarHidratacion(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'ID de hidrato no válido' });
    });

    it('debe eliminar correctamente un hidrato', async () => {
      req.params.idHidratacion = '1';
      Hidratacion.mockImplementation(() => ({
        eliminar: jest.fn().mockResolvedValue({})
      }));

      await eliminarHidratacion(req, res);

      expect(res.json).toHaveBeenCalledWith({ success: true, message: 'Hidrato eliminado' });
    });

    it('debe manejar errores y retornar 500', async () => {
      req.params.idHidratacion = '2';
      Hidratacion.mockImplementation(() => ({
        eliminar: jest.fn().mockRejectedValue(new Error('fallo grave'))
      }));

      await eliminarHidratacion(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith('Error al eliminar hidrato');
    });
  });
});
