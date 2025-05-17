const controller = require('../controllers/alimento.controller.js');
const { Alimento } = require('../models/alimento.model.js');

jest.mock('../models/alimento.model.js');

describe('Controlador eliminarAlimento', () => {
  let req, res;

  beforeEach(() => {
    req = {
      params: { idAlimento: '1' }
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      send: jest.fn()
    };
    jest.clearAllMocks();
  });

  test('✅ Debe eliminar correctamente y responder con código 200', async () => {
    const eliminarMock = jest.fn();
    Alimento.mockImplementation(() => ({
      eliminar: eliminarMock
    }));

    await controller.eliminarAlimento(req, res);

    expect(Alimento).toHaveBeenCalledWith(1);
    expect(eliminarMock).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      message: 'Alimento eliminado'
    });
  });

  test('❌ Debe responder con código 400 si el id es inválido', async () => {
    req.params.idAlimento = '-5';

    await controller.eliminarAlimento(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'ID de alimento no válido' });
  });

  test('❌ Debe responder con código 500 si ocurre un error al eliminar', async () => {
    Alimento.mockImplementation(() => ({
      eliminar: jest.fn().mockRejectedValue(new Error('Error'))
    }));

    await controller.eliminarAlimento(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith('Error al eliminar alimento');
  });
});
