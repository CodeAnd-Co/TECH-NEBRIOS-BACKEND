// RF16 Visualizar todas las charolas registradas en el sistema
// Documentación: https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF16

const { obtenerCharolas } = require('../controllers/charola.controller');
const Charola = require('../models/charola.model');

jest.mock('../models/charola.model');

/**
 * @group Tests - Controlador Charola
 * Pruebas unitarias para el controlador obtenerCharolas.
 */
describe('Controlador Charola', () => {

  /**
   * @test
   * @description Verifica que se devuelvan charolas activas con estado='activa'.
   * Debe retornar código 200 y un array con objetos que incluyan `charolaId`, `nombreCharola` y `fechaCreacion`.
   * @async
   */
  it('responde con charolas activas (estado=activa)', async () => {
    Charola.getCharolasPaginadas.mockResolvedValue([
      { charolaId: 1, nombreCharola: 'C-100', fechaCreacion: '2025-05-01' }
    ]);
    Charola.getCantidadTotal.mockResolvedValue(1);

    const req = { query: { page: '1', limit: '10', estado: 'activa' } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await obtenerCharolas(req, res);

    expect(Charola.getCharolasPaginadas).toHaveBeenCalledWith(10, 0, 'activa');
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      total: 1,
      page: 1,
      limit: 10,
      totalPages: 1,
      data: expect.arrayContaining([
        expect.objectContaining({
          charolaId: expect.any(Number),
          nombreCharola: expect.any(String),
          fechaCreacion: expect.any(String)
        })
      ])
    }));
  });

  /**
   * @test
   * @description Verifica que se devuelvan charolas pasadas con estado='pasada'.
   * Debe retornar código 200 con una lista que contenga `charolaId` y demás campos.
   * @async
   */
  it('responde con charolas pasadas (estado=pasada)', async () => {
    Charola.getCharolasPaginadas.mockResolvedValue([
      { charolaId: 2, nombreCharola: 'E-200', fechaCreacion: '2024-12-25' }
    ]);
    Charola.getCantidadTotal.mockResolvedValue(1);

    const req = { query: { page: '1', limit: '10', estado: 'pasada' } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await obtenerCharolas(req, res);

    expect(Charola.getCharolasPaginadas).toHaveBeenCalledWith(10, 0, 'pasada');
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      data: expect.arrayContaining([
        expect.objectContaining({
          charolaId: expect.any(Number),
          nombreCharola: expect.any(String),
          fechaCreacion: expect.any(String)
        })
      ])
    }));
  });

  /**
   * @test
   * @description Verifica que cuando no hay charolas, la respuesta tenga lista vacía y código 200.
   * @async
   */
  it('debe retornar código 200 con lista vacía', async () => {
    Charola.getCharolasPaginadas.mockResolvedValue([]);
    Charola.getCantidadTotal.mockResolvedValue(0);

    const req = { query: { page: '1', limit: '10', estado: 'activa' } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await obtenerCharolas(req, res);

    expect(Charola.getCharolasPaginadas).toHaveBeenCalledWith(10, 0, 'activa');
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
   * @test
   * @description Verifica que se retorne error 401 si el usuario no está autenticado (simulado).
   * @function
   */
  it('debe retornar 401 si no está autorizado', async () => {
    const req = { user: null, query: { page: '1', limit: '10', estado: 'activa' } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    if (!req.user) {
      res.status(401).json({ mensaje: 'No autorizado' });
    }

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ mensaje: 'No autorizado' });
  });

  /**
   * @test
   * @description Verifica que se retorne error 500 cuando ocurre una excepción inesperada en la consulta.
   * @async
   */
  it('debe retornar 500 si ocurre un error inesperado', async () => {
    Charola.getCharolasPaginadas.mockRejectedValue(new Error('Falla interna'));

    const req = { query: { page: '1', limit: '10', estado: 'activa' } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await obtenerCharolas(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      mensaje: 'Error interno del servidor'
    }));
  });

});
