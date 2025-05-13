const db = require('../utils/database');
const Charola = require('../models/charola.model.js');

jest.mock('../utils/database');

describe('Funciones de historial de charola en el modelo', () => {
  let mockConnection;

  beforeEach(() => {
    mockConnection = { query: jest.fn(), release: jest.fn() };
    db.mockResolvedValue(mockConnection);
    jest.clearAllMocks();
  });

  describe('obtenerFechaCreacion', () => {
    test('debe consultar la fecha de creación de la charola', async () => {
      const example = [{ fechaCreacion: '2024-11-24T06:00:00.000Z' }];
      mockConnection.query.mockResolvedValue(example);

      const result = await Charola.obtenerFechaCreacion(1);

      expect(mockConnection.query).toHaveBeenCalledWith(
        "SELECT fechaCreacion FROM CHAROLA WHERE charolaId = ?",
        [1]
      );
      expect(mockConnection.release).toHaveBeenCalled();
      expect(result).toEqual(example);
    });

    test('lanza error si la consulta falla', async () => {
      const error = new Error('DB error');
      mockConnection.query.mockRejectedValue(error);

      await expect(Charola.obtenerFechaCreacion(1)).rejects.toThrow('DB error');
      expect(mockConnection.release).toHaveBeenCalled();
    });
  });

  describe('obtenerAncestros', () => {
    test('debe devolver la lista de ancestros', async () => {
      const exampleAncestros = [
        { charolaAncestro: 2, nombreCharola: 'T3-050-09' },
        { charolaAncestro: 3, nombreCharola: 'T2-053-06' },
        { charolaAncestro: 4, nombreCharola: 'C-115' },
        { charolaAncestro: 5, nombreCharola: 'T1-049-03' }
      ];
      mockConnection.query.mockResolvedValue(exampleAncestros);

      const result = await Charola.obtenerAncestros(1);

      expect(mockConnection.query).toHaveBeenCalledWith(
        "SELECT a.charolaAncestro, c.nombreCharola FROM CHAROLA_CHAROLA a JOIN CHAROLA c ON a.charolaAncestro = c.charolaId WHERE a.charolaHija = ?",
        [1]
      );
      expect(mockConnection.release).toHaveBeenCalled();
      expect(result).toEqual(exampleAncestros);
    });

    test('lanza error si la consulta de ancestros falla', async () => {
      const error = new Error('DB error');
      mockConnection.query.mockRejectedValue(error);

      await expect(Charola.obtenerAncestros(1)).rejects.toThrow('DB error');
      expect(mockConnection.release).toHaveBeenCalled();
    });
  });
});
