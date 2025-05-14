/**
 * @file Pruebas unitarias del controlador registrarAlimento.
 * @description Verifica que el controlador maneje correctamente las solicitudes para agregar un alimento, incluyendo errores esperados.
 * @require jest
 * @require ../controllers/agregar-alimentacion.controller
 * @require ../models/alimento.model
 */

jest.mock('../models/alimento.model', () => {
    return {
      Alimento: jest.fn().mockImplementation(() => ({
        agregar: jest.fn(),
      })),
    };
  });
  
  const { registrarAlimento } = require('../controllers/alimento.controller');
  const { Alimento } = require('../models/alimento.model');
  
  describe('Controlador: registrarAlimento', () => {
    let req, res;
  
    beforeEach(() => {
      req = {
        body: {
          nombre: 'Pera',
          descripcion: 'Fruta verde',
        },
      };
      res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
  
      jest.clearAllMocks();
    });

  /**
   * Debe responder 200 si los datos son válidos y se registra exitosamente el alimento.
   */
    test('Debe responder 200 si los datos son válidos', async () => {
      Alimento.mockImplementation(() => ({
        agregar: jest.fn().mockResolvedValueOnce(),
      }));
  
      await registrarAlimento(req, res);
  
      expect(res.status).toHaveBeenCalledWith(200);
    });

  /**
   * Debe responder 400 si los datos enviados están vacíos o incompletos.
   */
    test('Debe responder 400 si faltan datos', async () => {
      req.body = { nombre: '', descripcion: '' };
  
      await registrarAlimento(req, res);
  
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: expect.stringContaining('Datos no válidos'),
      });
    });


  /**
   * Debe responder 101 si hay error de conexión a la base de datos o red.
   */
    test('Debe responder 101 si hay error de conexión', async () => {
      Alimento.mockImplementation(() => ({
        agregar: jest.fn().mockRejectedValueOnce({ code: 'ECONNREFUSED' }),
      }));
  
      await registrarAlimento(req, res);
  
      expect(res.status).toHaveBeenCalledWith(101);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: expect.stringContaining('Sin conexión a internet'),
      });
    });

  /**
   * Debe responder 500 si ocurre un error inesperado del servidor.
   */
    test('Debe responder 500 si ocurre otro error', async () => {
      Alimento.mockImplementation(() => ({
        agregar: jest.fn().mockRejectedValueOnce(new Error('Error desconocido')),
      }));
  
      await registrarAlimento(req, res);
  
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: expect.stringContaining('Error del servidor'),
      });
    });
  });
  