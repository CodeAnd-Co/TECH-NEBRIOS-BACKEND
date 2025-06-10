const { editarHidratacion } = require('../controllers/hidratacion.controller');
const { Hidratacion } = require('../models/hidratacion.model');

jest.mock('../models/hidratacion.model');

describe('editarHidratacion', () => {
  let req, res;

  beforeEach(() => {
    req = {
      params: {},
      body: {}
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      send: jest.fn()
    };
  });

  it('debe responder con 400 si el id es inválido', async () => {
    req.params.idHidratacion = 'abc';

    await editarHidratacion(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'ID de hidratante no válido' });
  });

  it('debe editar correctamente y responder con 200', async () => {
    req.params.idHidratacion = '1';
    req.body = { nombreHidratacion: 'Te', descripcionHidratacion: 'Verde' };

    Hidratacion.mockImplementation(() => ({ actualizar: jest.fn().mockResolvedValue() }));

    await editarHidratacion(req, res);

    expect(res.json).toHaveBeenCalledWith({
      success: true,
      message: 'Hidratacion actualizado'
    });
  });

  it('debe manejar error y responder con 500', async () => {
    req.params.idHidratacion = '1';
    req.body = { nombreHidratacion: 'Te', descripcionHidratacion: 'Verde' };

    Hidratacion.mockImplementation(() => ({ actualizar: jest.fn().mockRejectedValue(new Error()) }));

    await editarHidratacion(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith('Error al editar hidratacion');
  });
});
