// __tests__/alimento.controller.test.js
const controller = require('../controllers/alimento.controller');
const { Alimento } = require('../models/alimento.model');

jest.mock('../models/alimento.model', () => ({
  /**
   * Mock de la clase Alimento para poder espiar sus métodos.
   */
  Alimento: jest.fn()
}));

/**
 * Pruebas unitarias para el controlador `Alimento`.
 * @group Tests - Controlador Alimento
 */
describe('Controlador Alimento', () => {
  let req, res, instanciaMock;

  beforeEach(() => {
    instanciaMock = {
      obtener: jest.fn().mockResolvedValue([{ comidaId: 1 }]),
      eliminar: jest.fn().mockResolvedValue()
    };
    Alimento.mockImplementation((id) => instanciaMock);

    req = { params: { idAlimento: '1' } };
    res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };
  });

  describe('obtenerAlimentos', () => {
    it('debe responder con JSON de alimentos', async () => {
      await controller.obtenerAlimentos(req, res);

      expect(Alimento).toHaveBeenCalledWith();
      expect(instanciaMock.obtener).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith([{ comidaId: 1 }]);
    });

    it('debe responder 500 si falla la obtención', async () => {
      instanciaMock.obtener.mockRejectedValue(new Error('fail'));
      await controller.obtenerAlimentos(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith('Error al obtener alimentos');
    });
  });

  describe('eliminarAlimento', () => {
    it('debe responder con éxito al eliminar', async () => {
      await controller.eliminarAlimento(req, res);

      expect(Alimento).toHaveBeenCalledWith('1');
      expect(instanciaMock.eliminar).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: 'Alimento eliminado'
      });
    });

    it('debe responder 500 si falla el DELETE', async () => {
      instanciaMock.eliminar.mockRejectedValue(new Error('delete error'));
      await controller.eliminarAlimento(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith('Error al eliminar alimento');
    });
  });
});
