// RF10 Consultar charola - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF10
// Pruebas del controlador de charola
// Se asegura que las funciones del controlador respondan correctamente a solicitudes válidas o inválidas

const charolaController = require('../controllers/charola.controller');
const Charola = require('../models/charola.model');

jest.mock('../models/charola.model');

describe('Controlador Charola - consultarCharola', () => {
  let req, res;

  beforeEach(() => {
    req = {
      params: {}
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
  });

  test('Debe devolver correctamente los datos de una charola existente', async () => {
    const fakeCharola = {
        charola: {
            charolaId: 1004,
            nombreCharola: 'testxd',
            comidaCiclo: 10,
            hidratacionCiclo: 15,
            fechaActualizacion: null,
            estado: 'activa',
            densidadLarva: 10,
            fechaCreacion: '2025-04-29T06:00:00.000Z',
            pesoCharola: 10
        },
            hidratacion: {
            hidratacionId: 1,
            nombre: 'Zanahoria',
            descripcion: 'Vegetal'
        },
            comida: {
            comidaId: 1,
            nombre: 'Manzana',
            descripcion: 'fruta roja'
        }
    };
  
    req.params.id = '1004';
    Charola.getCharola.mockResolvedValue(fakeCharola);
  
    await charolaController.consultarCharola(req, res);
  
    expect(Charola.getCharola).toHaveBeenCalledWith(1004);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      data: fakeCharola
    });
  });

  test('Debe retornar 404 si no se encuentra la charola', async () => {
    req.params.id = '-1';
    Charola.getCharola.mockResolvedValue({ error: 'No se encontró la charola con el ID proporcionado.' });

    await charolaController.consultarCharola(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: 'No se encontró la charola con el ID proporcionado.' });
  });

  test('Debe retornar 500 si ocurre una excepción interna', async () => {
    req.params.id = '123';
    Charola.getCharola.mockRejectedValue(new Error('Fallo inesperado'));

    await charolaController.consultarCharola(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Fallo inesperado' });
  });
});