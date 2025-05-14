// RF11 Descargar datos
const tablaCharolaController = require('../controllers/reporte.controller');
const tablaCharolaModel = require('../models/reporte.model');
const excelUtils = require('../utils/excelGenerador');

jest.mock('../models/reporte.model');
jest.mock('../utils/excelGenerador');

describe('Controlador tablaCharola', () => {
  let req, res;

  beforeEach(() => {
    req = {
      body: {},
      params: {},
      query: {},
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      setHeader: jest.fn(),
      send: jest.fn(),
    };
  });

  test('[GET] Debe responder con código 200 y status ok cuando hay información de charolas', async () => {
    const mockResultado = [
      {
        nombreCharola: 'A',
        fechaCreacion: '2024-01-01',
        fechaActualizacion: '2024-01-02',
        pesoCharola: 100,
        comidaCiclo: 50,
        hidratacionCiclo: 20,
        estado: 'activo',
        densidadLarva: 10,
      },
    ];

    tablaCharolaModel.obtenerDatos.mockResolvedValue(mockResultado);

    await tablaCharolaController.getDatos(req, res); 

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ code: 'Ok', resultado: mockResultado });
  });

  test('[GET] Debe responder con código 201 y status ok cuando NO hay información de charolas', async () => {
    tablaCharolaModel.obtenerDatos.mockResolvedValue([]);

    await tablaCharolaController.getDatos(req, res); 

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ code: 'Ok', resultado: [] });
  });

  test('[GET] Debe responder con código 500 y error cuando ocurre algún tipo de error en el flujo', async () => {
    tablaCharolaModel.obtenerDatos.mockRejectedValue(new Error('DB error'));

    await tablaCharolaController.getDatos(req, res); 

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: expect.any(String) });
  });

  test('[POST] Debe responder 200 y enviar un archivo Excel cuando hay datos', async () => {
    const datosMock = [
      {
        nombreCharola: 'A',
        fechaCreacion: '2024-01-01',
        fechaActualizacion: '2024-01-02',
        pesoCharola: 100,
        comidaCiclo: 50,
        hidratacionCiclo: 20,
        estado: 'activo',
        densidadLarva: 10,
      },
    ];
    const bufferMock = Buffer.from('excel data');

    tablaCharolaModel.obtenerDatos.mockResolvedValue(datosMock);
    excelUtils.generarExcelDesdeDatos.mockResolvedValue(bufferMock);

    await tablaCharolaController.postDescargarExcel(req, res);

    expect(res.setHeader).toHaveBeenCalledWith(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    );
    expect(res.setHeader).toHaveBeenCalledWith(
      'Content-Disposition',
      'attachment; filename=charolas.xlsx'
    );
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(expect.any(Buffer));
  });

  test('[POST] Debe responder 201 y con error si no hay datos', async () => {
    tablaCharolaModel.obtenerDatos.mockResolvedValue([]);
    excelUtils.generarExcelDesdeDatos.mockResolvedValue(Buffer.from('')); // evita que falle internamente
  
    await tablaCharolaController.postDescargarExcel(req, res);
  
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ error: 'No hay datos de charolas' });
  });  

  test('[POST] Debe responder 500 y manejar errores del servidor', async () => {
    tablaCharolaModel.obtenerDatos.mockRejectedValue(new Error('DB error'));

    await tablaCharolaController.postDescargarExcel(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ Error: 'Ocurrio un error en el servidor' });
  });
});
