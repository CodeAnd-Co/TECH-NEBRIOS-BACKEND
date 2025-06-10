const { registrarHidratacion } = require('../controllers/hidratacion.controller');
const { Hidratacion } = require('../models/hidratacion.model');

jest.mock('../models/hidratacion.model');

describe('registrarHidratacion', () => {
  let req, res;

  beforeEach(() => {
    req = {
      body: {}
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  it('debe regresar 400 si faltan campos', async () => {
    req.body = { nombre: '', descripcion: '' };

    await registrarHidratacion(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: 'Datos no válidos',
    });
  });

  it('debe registrar correctamente y regresar 200', async () => {
    req.body = { nombre: 'Agua', descripcion: 'Natural' };
    Hidratacion.mockImplementation(() => ({ agregar: jest.fn().mockResolvedValue() }));

    await registrarHidratacion(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      message: 'Hidratación registrada exitosamente',
    });
  });

  it('debe manejar error de conexión y regresar 101', async () => {
    req.body = { nombre: 'Agua', descripcion: 'Natural' };
    Hidratacion.mockImplementation(() => ({ agregar: jest.fn().mockRejectedValue({ code: 'ETIMEDOUT' }) }));

    await registrarHidratacion(req, res);

    expect(res.status).toHaveBeenCalledWith(101);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: 'Sin conexión a internet',
    });
  });

  it('debe manejar error genérico y regresar 500', async () => {
    req.body = { nombre: 'Agua', descripcion: 'Natural' };
    Hidratacion.mockImplementation(() => ({ agregar: jest.fn().mockRejectedValue({}) }));

    await registrarHidratacion(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: 'Error del servidor al registrar hidratación',
    });
  });
});