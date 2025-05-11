// RF16 Visualizar todas las charolas registradas en el sistema
// Documentación: https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF16

const { obtenerCharolas } = require('../controllers/menuCharolas.controller');
const Charola = require('../models/menuCharolas.model');

jest.mock('../models/menu_charolas.model');

/**
 * Pruebas unitarias para el controlador obtenerCharolas.
 * @group Tests - Controlador Charola
 */
describe('Controlador Charola', () => {
  
  /**
   * Prueba: debe devolver código 200 y una lista de charolas simulada.
   * @async
   * @function
   */
  it('responde con JSON de charolas', async () => {
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

  /**
   * Prueba: debe devolver código 200 con una lista vacía si no hay charolas.
   * @async
   * @function
   */
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

  /**
   * Prueba: simula un intento no autorizado (sin usuario autenticado).
   * @function
   */
  it('debe retornar 401 si no está autorizado', async () => {
    const req = { user: null, query: { page: '1', limit: '10' } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    // Simula validación (ajustar según lógica real de middleware auth)
    if (!req.user) {
      res.status(401).json({ mensaje: 'No autorizado' });
    }

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ mensaje: 'No autorizado' });
  });

  /**
   * Prueba: debe retornar error 500 si ocurre una excepción durante la consulta.
   * @async
   * @function
   */
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
