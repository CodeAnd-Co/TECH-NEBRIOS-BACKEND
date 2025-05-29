const { hidratarCharola } = require('../controllers/charola.controller');
const Charola = require('../models/charola.model');

jest.mock('../models/charola.model');

describe('Controlador hidratarCharola', () => {
  const mockRequest = (body) => ({ body });
  const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debería responder 400 si faltan parámetros', async () => {
    const req = mockRequest({ charolaId: 1, cantidadOtorgada: 10 }); // Falta hidratacionId
    const res = mockResponse();

    await hidratarCharola(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Faltan parámetros obligatorios.' });
  });

  it('debería responder 200 si la hidratación fue exitosa', async () => {
    const req = mockRequest({ charolaId: 1, hidratacionId: 5, cantidadOtorgada: 20 });
    const res = mockResponse();

    const fakeResult = {
      relacion: {
        charolaId: 1,
        hidratacionId: 5,
        cantidadOtorgada: 20,
        fechaOtorgada: new Date(),
        HIDRATACION: { nombre: 'Agua', descripcion: 'Hidratación básica' }
      },
      charola: {
        charolaId: 1,
        hidratacionCiclo: 60,
        fechaActualizacion: new Date()
      }
    };

    Charola.hidratar.mockResolvedValue(fakeResult);

    await hidratarCharola(req, res);

    expect(Charola.hidratar).toHaveBeenCalledWith({
      charolaId: 1,
      hidratacionId: 5,
      cantidadOtorgada: 20
    });

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ data: fakeResult });
  });

  it('debería responder 500 si ocurre un error interno', async () => {
    const req = mockRequest({ charolaId: 1, hidratacionId: 5, cantidadOtorgada: 20 });
    const res = mockResponse();

    Charola.hidratar.mockRejectedValue(new Error('Fallo de prueba'));

    await hidratarCharola(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Error interno al alimentar charola.' });
  });
});
