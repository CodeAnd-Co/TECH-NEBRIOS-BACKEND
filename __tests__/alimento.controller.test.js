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
      actualizar: jest.fn().mockResolvedValue()
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

  describe('editarAlimento', () => {
    beforeEach(() => {
      req.body = { nombreAlimento: 'Pera', descripcionAlimento: 'Fruta verde' };
    });

    it('debe editar un alimento y responder con éxito', async () => {
      await controller.editarAlimento(req, res);

      expect(Alimento).toHaveBeenCalledWith(1, 'Pera', 'Fruta verde');
      expect(instanciaMock.actualizar).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith({ success: true, message: 'Alimento actualizado' });
    });

    it('debe responder 400 si el ID no es válido', async () => {
      req.params.idAlimento = 'invalid';
      await controller.editarAlimento(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith('ID de alimento inválido');
    });

    it('debe responder 500 si falla la edición', async () => {
      instanciaMock.actualizar.mockRejectedValue(new Error('fail'));
      await controller.editarAlimento(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith('Error al editar alimento');
    });
  });
});
