// RF16 Visualizar todas las charolas registradas en el sistema - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF16

// Pruebas del controlador de charolas.
// Se asegura que las funciones del controlador respondan correctamente a solicitudes válidas o inválidas.

const { describe, test, expect, beforeEach, jest } = require('@jest/globals');
const charolaController = require('../../controllers/menu_charolas.controller');
const Charola = require('../../models/charola.model');

jest.mock('../../models/charola.model');

describe('Controlador Charola', () => {
  let req, res;

  beforeEach(() => {
    // Simulaciones básicas de req y res para probar controladores
    req = {
      body: {},
      params: {},
      query: {},
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  test('Debe registrar correctamente una charola con datos válidos', async () => {
    const datos = {
      nombre: 'C-321',
      comidaCiclo: 'harina',
      hidratacionCiclo: 'agua',
      pesoCharola: 0.8,
      densidadLarva: 'media',
      fechaCreacion: '2025-04-30',
    };

    req.body = datos;

    Charola.registrarCharola.mockResolvedValue({ charolaId: 1 });

    await charolaController.registrarCharola(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ mensaje: 'Charola registrada correctamente', id: 1 });
  });

  test('Debe retornar error 500 si ocurre una excepción interna', async () => {
    req.body = { nombre: 'C-000' };

    Charola.registrarCharola.mockRejectedValue(new Error('Error interno'));

    await charolaController.registrarCharola(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ mensaje: 'Ocurrió un error al registrar la charola' });
  });
});
