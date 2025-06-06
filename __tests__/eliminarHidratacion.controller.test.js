const { eliminarHidratacion } = require('../controllers/hidratacion.controller');
const { Hidratacion } = require('../models/hidratacion.model');

jest.mock('../models/hidratacion.model');

describe('eliminarHidratacion', () => {
  let req, res;

  beforeEach(() => {
    req = {
      params: {}
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      send: jest.fn()
    };
  });

  it('debe responder con 400 si el ID no es válido', async () => {
    req.params.idHidratacion = '-1';

    await eliminarHidratacion(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'ID de hidrato no válido' });
  });

  it('debe rechazar si la hidratación está asignada', async () => {
    req.params.idHidratacion = '2';
    Hidratacion.mockImplementation(() => ({
      isAgregada: jest.fn().mockResolvedValue(1)
    }));

    await eliminarHidratacion(req, res);

    expect(res.status).toHaveBeenCalledWith(409);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: 'La hidratación no se puede eliminar porque está asignado a una charola'
    });
  });

  it('debe eliminar correctamente si no está asignada', async () => {
    req.params.idHidratacion = '3';
    Hidratacion.mockImplementation(() => ({
      isAgregada: jest.fn().mockResolvedValue(0),
      eliminar: jest.fn().mockResolvedValue()
    }));

    await eliminarHidratacion(req, res);

    expect(res.json).toHaveBeenCalledWith({
      success: true,
      message: 'Hidrato eliminado'
    });
  });

  it('debe responder con 500 si ocurre un error inesperado', async () => {
    req.params.idHidratacion = '3';
    Hidratacion.mockImplementation(() => ({
      isAgregada: jest.fn().mockRejectedValue(new Error())
    }));

    await eliminarHidratacion(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith('Error al eliminar hidrato');
  });
});
