const controller = require('../controllers/alimento.controller');
const { Alimento, CharolaComida } = require('../models/alimento.model');

jest.mock('../models/alimento.model');

const mockRequest = (body = {}, params = {}) => ({ body, params });
const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
};

describe('Controlador de Alimento', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('obtenerAlimentos', () => {
    it('debería retornar lista de alimentos', async () => {
      const req = {};
      const res = mockResponse();
      const mockAlimento = { obtener: jest.fn().mockResolvedValue(['comida1', 'comida2']) };
      Alimento.mockImplementation(() => mockAlimento);

      await controller.obtenerAlimentos(req, res);

      expect(res.json).toHaveBeenCalledWith(['comida1', 'comida2']);
    });

    it('debería retornar error 500 al fallar', async () => {
      const req = {};
      const res = mockResponse();
      Alimento.mockImplementation(() => ({ obtener: jest.fn().mockRejectedValue(new Error()) }));

      await controller.obtenerAlimentos(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith('Error al obtener alimentos');
    });
  });

  describe('registrarAlimento', () => {
    it('debería retornar 400 si faltan datos', async () => {
      const req = mockRequest({ nombre: '' });
      const res = mockResponse();

      await controller.registrarAlimento(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ success: false, message: 'Datos no válidos' });
    });

    it('debería registrar correctamente', async () => {
      const req = mockRequest({ nombre: 'Pepino', descripcion: 'Fresco' });
      const res = mockResponse();
      const mockAgregar = jest.fn().mockResolvedValue();
      Alimento.mockImplementation(() => ({ agregar: mockAgregar }));

      await controller.registrarAlimento(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: 'Alimento registrado exitosamente',
      });
    });

    it('debería manejar error de conexión', async () => {
      const req = mockRequest({ nombre: 'Zanahoria', descripcion: 'Raíz' });
      const res = mockResponse();
      const error = new Error('Sin conexión');
      error.code = 'ECONNREFUSED';

      Alimento.mockImplementation(() => ({
        agregar: jest.fn().mockRejectedValue(error),
      }));

      await controller.registrarAlimento(req, res);

      expect(res.status).toHaveBeenCalledWith(101);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: 'Sin conexión a internet',
      });
    });

    it('debería manejar error general del servidor', async () => {
      const req = mockRequest({ nombre: 'Zanahoria', descripcion: 'Raíz' });
      const res = mockResponse();

      Alimento.mockImplementation(() => ({
        agregar: jest.fn().mockRejectedValue(new Error()),
      }));

      await controller.registrarAlimento(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: 'Error del servidor al registrar alimento',
      });
    });
  });

  describe('editarAlimento', () => {
    it('debería retornar 400 si el id no es válido', async () => {
      const req = mockRequest({}, { idAlimento: 'abc' });
      const res = mockResponse();

      await controller.editarAlimento(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'ID de alimento no válido' });
    });

    it('debería editar correctamente el alimento', async () => {
      const req = mockRequest(
        { nombreAlimento: 'Fruta', descripcionAlimento: 'Natural' },
        { idAlimento: 1 }
      );
      const res = mockResponse();

      Alimento.mockImplementation(() => ({ actualizar: jest.fn().mockResolvedValue() }));

      await controller.editarAlimento(req, res);

      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: 'Alimento actualizado',
      });
    });

    it('debería retornar error 500 si falla la edición', async () => {
      const req = mockRequest({}, { idAlimento: 1 });
      const res = mockResponse();

      Alimento.mockImplementation(() => ({
        actualizar: jest.fn().mockRejectedValue(new Error()),
      }));

      await controller.editarAlimento(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith('Error al editar alimento');
    });
  });

  describe('eliminarAlimento', () => {
    it('debería retornar 400 si el id no es válido', async () => {
      const req = mockRequest({}, { idAlimento: 'invalido' });
      const res = mockResponse();

      await controller.eliminarAlimento(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'ID de alimento no válido' });
    });

    it('debería eliminar correctamente el alimento', async () => {
      const req = mockRequest({}, { idAlimento: 1 });
      const res = mockResponse();

      Alimento.mockImplementation(() => ({ eliminar: jest.fn().mockResolvedValue() }));

      await controller.eliminarAlimento(req, res);

      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: 'Alimento eliminado',
      });
    });

    it('debería retornar error 500 si falla la eliminación', async () => {
      const req = mockRequest({}, { idAlimento: 1 });
      const res = mockResponse();

      Alimento.mockImplementation(() => ({
        eliminar: jest.fn().mockRejectedValue(new Error()),
      }));

      await controller.eliminarAlimento(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith('Error al eliminar alimento');
    });
  });

  describe('registrarCharolaComida', () => {
    it('debería retornar 400 si faltan campos', async () => {
      const req = mockRequest({ comidaId: 1 }); // Falta info
      const res = mockResponse();

      await controller.registrarCharolaComida(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: 'Datos incompletos',
      });
    });

    it('debería registrar correctamente una charola-comida', async () => {
      const req = mockRequest({
        charolaId: 1,
        comidaId: 2,
        cantidadOtorgada: 10,
        fechaOtorgada: '2024-05-01',
      });
      const res = mockResponse();

      CharolaComida.mockImplementation(() => ({
        agregar: jest.fn().mockResolvedValue(),
      }));

      await controller.registrarCharolaComida(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: 'Registro creado exitosamente',
      });
    });

    it('debería retornar error 500 si falla el registro', async () => {
      const req = mockRequest({
        charolaId: 1,
        comidaId: 2,
        cantidadOtorgada: 10,
        fechaOtorgada: '2024-05-01',
      });
      const res = mockResponse();

      CharolaComida.mockImplementation(() => ({
        agregar: jest.fn().mockRejectedValue(new Error()),
      }));

      await controller.registrarCharolaComida(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: 'Error del servidor',
      });
    });
  });
});
