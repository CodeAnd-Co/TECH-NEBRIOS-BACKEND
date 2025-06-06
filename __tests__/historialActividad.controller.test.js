// RF18 Historial de actividad:
// https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF18

const { obtenerHistorialAncestros, obtenerHistorialActividad, postHistorialAncestros } = require('../controllers/historialCharola.controller');
const HistorialCharola = require('../models/historialCharola.model');

jest.mock('../models/historialCharola.model');

describe('Controlador historialCharola.controller', () => {
  const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('obtenerHistorialAncestros', () => {
    it('debería responder 400 si el charolaId no es válido', async () => {
      const req = { params: { charolaId: 'abc' } };
      const res = mockResponse();
      await obtenerHistorialAncestros(req, res);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'ID de charola inválido' });
    });

    it('debería responder 404 si la charola no se encuentra', async () => {
      const req = { params: { charolaId: '1' } };
      const res = mockResponse();
      HistorialCharola.obtenerFechaCreacion.mockResolvedValue([]);
      await obtenerHistorialAncestros(req, res);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: 'Charola no encontrada' });
    });

    it('debería responder 200 con los datos si se encuentra la charola', async () => {
      const req = { params: { charolaId: '1' } };
      const res = mockResponse();
      HistorialCharola.obtenerFechaCreacion.mockResolvedValue([{ fechaCreacion: '2024-05-01' }]);
      HistorialCharola.obtenerAncestros.mockResolvedValue([{ charolaId: 1001, relacion: 'abuela' }]);
      await obtenerHistorialAncestros(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ fechaCreacion: '2024-05-01', ancestros: [{ charolaId: 1001, relacion: 'abuela' }] });
    });

    it('debería responder 500 si ocurre un error inesperado', async () => {
      const req = { params: { charolaId: '1' } };
      const res = mockResponse();
      HistorialCharola.obtenerFechaCreacion.mockRejectedValue(new Error('Error'));
      await obtenerHistorialAncestros(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'Error interno del servidor' });
    });
  });

  describe('obtenerHistorialActividad', () => {
    it('debería responder 200 con historial si hay datos', async () => {
      const req = { query: { charolaId: '1' } };
      const res = mockResponse();

      HistorialCharola.historialAlimentacion.mockResolvedValue([{}]);
      HistorialCharola.historialHidratacion.mockResolvedValue([]);
      HistorialCharola.estadoCharola.mockResolvedValue('activa');

      await obtenerHistorialActividad(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ codigo: 'Ok', estado: 'activa', alimentacion: [{}], hidratacion: [] });
    });

    it('debería responder 201 si no hay datos de historial', async () => {
      const req = { query: { charolaId: '1' } };
      const res = mockResponse();

      HistorialCharola.historialAlimentacion.mockResolvedValue([]);
      HistorialCharola.historialHidratacion.mockResolvedValue([]);
      HistorialCharola.estadoCharola.mockResolvedValue('inactiva');

      await obtenerHistorialActividad(req, res);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ codigo: 'Ok', estado: 'inactiva' });
    });

    it('debería responder 500 en caso de error', async () => {
      const req = { query: { charolaId: '1' } };
      const res = mockResponse();

      HistorialCharola.historialAlimentacion.mockRejectedValue(new Error('Error'));

      await obtenerHistorialActividad(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'Ocurrio un error en el servidor' });
    });
  });

  describe('postHistorialAncestros', () => {
    it('debería responder 400 si el body no contiene un array válido', async () => {
      const req = { params: { charolaId: '1' }, body: { ancestros: null } };
      const res = mockResponse();
      await postHistorialAncestros(req, res);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'Debes enviar un array de IDs en “ancestros”' });
    });

    it('debería responder 200 si se asignan correctamente', async () => {
      const req = { params: { charolaId: '1' }, body: { ancestros: [2, 3] } };
      const res = mockResponse();

      HistorialCharola.asignarAncestro.mockResolvedValue();

      await postHistorialAncestros(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: 'Ancestros asignados correctamente' });
    });

    it('debería responder 500 si ocurre un error', async () => {
      const req = { params: { charolaId: '1' }, body: { ancestros: [2, 3] } };
      const res = mockResponse();

      HistorialCharola.asignarAncestro.mockRejectedValue(new Error('Error'));

      await postHistorialAncestros(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'No se pudieron asignar ancestros' });
    });
  });
});
