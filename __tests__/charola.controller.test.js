// Pruebas unitarias Jest para los controladores restantes del archivo charola.controller.js

const charolaController = require('../controllers/charola.controller');
const Charola = require('../models/charola.model');

jest.mock('../models/charola.model');

describe('Controlador Charola - registrarCharola', () => {
  let req, res;

  beforeEach(() => {
    req = {
      body: { nombreCharola: 'Charola 1' }
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    jest.clearAllMocks();
  });

  test('Debe registrar una nueva charola correctamente', async () => {
    const nuevaCharola = { charolaId: 1, nombreCharola: 'Charola 1' };
    Charola.registrar.mockResolvedValue(nuevaCharola);

    await charolaController.registrarCharola(req, res);

    expect(Charola.registrar).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ data: nuevaCharola });
  });

  test('Debe retornar 500 en caso de error', async () => {
    Charola.registrar.mockRejectedValue(new Error('Fallo interno'));

    await charolaController.registrarCharola(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ mensaje: 'Error interno del servidor' });
  });
});


describe('Controlador Charola - obtenerCharolas', () => {
  let req, res;

  beforeEach(() => {
    req = { query: { page: '1', limit: '10' } };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    jest.clearAllMocks();
  });

  test('Debe devolver la lista paginada de charolas', async () => {
    Charola.getCharolasPaginadas.mockResolvedValue([{ charolaId: 1 }]);
    Charola.getCantidadTotal.mockResolvedValue(1);

    await charolaController.obtenerCharolas(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      total: 1,
      page: 1,
      limit: 10,
      totalPages: 1,
      data: expect.any(Array)
    }));
  });

  test('Debe retornar 400 si los parámetros son inválidos', async () => {
    req.query.page = 'abc'; // no es un número

    await charolaController.obtenerCharolas(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      mensaje: 'Parámetros inválidos: page y limit deben ser enteros positivos'
    });
  });

  test('Debe retornar 400 si estado es inválido', async () => {
    req.query.estado = 'otro';

    await charolaController.obtenerCharolas(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      mensaje: "Estado inválido. Usa 'activa' o 'pasada'."
    });
  });

  test('Debe retornar 500 en caso de error', async () => {
    Charola.getCharolasPaginadas.mockRejectedValue(new Error('Error inesperado'));

    await charolaController.obtenerCharolas(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ mensaje: 'Error interno del servidor' });
  });
});

describe('Controlador Charola - alimentarCharola', () => {
  let req, res;

  beforeEach(() => {
    req = { body: { charolaId: 1, comidaId: 2, cantidadOtorgada: 50 } };
    res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    jest.clearAllMocks();
  });

  test('Debe alimentar correctamente una charola', async () => {
    Charola.alimentar.mockResolvedValue({ success: true });

    await charolaController.alimentarCharola(req, res);

    expect(Charola.alimentar).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ data: { success: true } });
  });

  test('Debe retornar 400 si faltan parámetros', async () => {
    req.body = { charolaId: 1 };

    await charolaController.alimentarCharola(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Faltan parámetros obligatorios.' });
  });

  test('Debe retornar 500 si ocurre un error', async () => {
    Charola.alimentar.mockRejectedValue(new Error('Error interno'));

    await charolaController.alimentarCharola(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Error interno al alimentar charola.' });
  });
});

describe('Controlador Charola - hidratarCharola', () => {
  let req, res;

  beforeEach(() => {
    req = { body: { charolaId: 1, hidratacionId: 2, cantidadOtorgada: 20 } };
    res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    jest.clearAllMocks();
  });

  test('Debe hidratar correctamente una charola', async () => {
    Charola.hidratar.mockResolvedValue({ success: true });

    await charolaController.hidratarCharola(req, res);

    expect(Charola.hidratar).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ data: { success: true } });
  });

  test('Debe retornar 400 si faltan parámetros', async () => {
    req.body = { charolaId: 1 };

    await charolaController.hidratarCharola(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Faltan parámetros obligatorios.' });
  });

  test('Debe retornar 500 si ocurre un error', async () => {
    Charola.hidratar.mockRejectedValue(new Error('Error interno'));

    await charolaController.hidratarCharola(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Error interno al alimentar charola.' });
  });
});

describe('Controlador Charola - editarCharola', () => {
  let req, res;

  beforeEach(() => {
    req = {
      query: {
        charolaId: '1',
        nuevoNombre: 'Charola Nueva',
        fechaCreacion: '2024-05-01',
        nuevoEstado: 'activa',
        nuevaDensidad: '200',
        fechaActualizacion: '2024-05-02',
        nuevaAlimentacion: '3',
        nuevaAlimentacionOtorgada: '30',
        nuevaHidratacion: '2',
        nuevaHidratacionOtorgada: '15'
      }
    };

    res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    jest.clearAllMocks();
  });

  test('Debe editar la charola exitosamente', async () => {
    Charola.editarCharola.mockResolvedValue(200);

    await charolaController.editarCharola(req, res);

    expect(Charola.editarCharola).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ mensaje: 'Ok' });
  });

  test('Debe devolver 500 si editarCharola falla', async () => {
    Charola.editarCharola.mockResolvedValue(500);

    await charolaController.editarCharola(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Ocurrió un error al editar los datos de la charola' });
  });

  test('Debe manejar excepciones internas con código 500', async () => {
    Charola.editarCharola.mockRejectedValue(new Error('Error de servidor'));

    await charolaController.editarCharola(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ mensaje: 'Error interno del servidor' });
  });
});