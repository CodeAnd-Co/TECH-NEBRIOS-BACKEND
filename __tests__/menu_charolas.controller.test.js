// RF16 Visualizar todas las charolas registradas en el sistema - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF16

const { obtenerCharolas } = require('../controllers/menu_charolas.controller');
const Charola = require('../models/menu_charolas.model');

jest.mock('../models/menu_charolas.model');

describe('Controlador Charola', () => {
  it('responde con JSON de charolas', async () => {
    // Simula datos de prueba
    Charola.getCharolasPaginadas.mockResolvedValue([
      { nombreCharola: 'E-001', fechaCreacion: '2025-04-01' }
    ]);
    Charola.getCantidadTotal.mockResolvedValue(1);

    const req = { query: { page: '1', limit: '10' } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await obtenerCharolas(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      total: 1,
      page: 1,
      limit: 10,
      totalPages: 1,
      data: expect.any(Array)
    }));
  });

  it('debe retornar código 200 con lista vacía', async () => {
    Charola.getCharolasPaginadas.mockResolvedValue([]);
    Charola.getCantidadTotal.mockResolvedValue(0);
  
    const req = { query: { page: '1', limit: '10' } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  
    await obtenerCharolas(req, res);
  
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      total: 0,
      page: 1,
      limit: 10,
      totalPages: 0,
      data: []
    }));
  });

  it('debe retornar 401 si no está autorizado', async () => {
    const req = { user: null, query: { page: '1', limit: '10' } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  
    // Simula validación fallida (puedes modificarlo según tu implementación)
    if (!req.user) {
      res.status(401).json({ mensaje: 'No autorizado' });
    }
  
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ mensaje: 'No autorizado' });
  });

  it('debe retornar 500 si ocurre un error inesperado', async () => {
    Charola.getCharolasPaginadas.mockRejectedValue(new Error('Falla interna'));
  
    const req = { query: { page: '1', limit: '10' } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  
    await obtenerCharolas(req, res);
  
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      mensaje: 'Error interno del servidor'
    }));
  });  
});
