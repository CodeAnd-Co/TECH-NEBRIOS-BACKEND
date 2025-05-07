const Charola = require('../models/charola.model');
const mockDb = require('../utils/database');

jest.mock('../utils/database');

describe('Modelo Charola', () => {
  let fakeConnection;

  beforeEach(() => {
    fakeConnection = {
      query: jest.fn(),
      release: jest.fn()
    };
    mockDb.mockResolvedValue(fakeConnection);
  });

  describe('getCharola', () => {
    test('debe devolver un objeto con datos completos si existe la charola', async () => {
        const charolaID = 1004;

        fakeConnection.query
            .mockResolvedValueOnce([[{
                charolaId: 1004,
                nombreCharola: 'testxd',
                comidaCiclo: 10,
                hidratacionCiclo: 15,
                fechaActualizacion: null,
                estado: 'activa',
                densidadLarva: 10,
                fechaCreacion: '2025-04-29T06:00:00.000Z',
                pesoCharola: 10
            }]]) // CHAROLA
            .mockResolvedValueOnce([[{ 
                charolaId: 1004, 
                hidratacionId: 1, 
                cantidadOtorgada: 50 
            }]]) // CHAROLA_HIDRATACION
            .mockResolvedValueOnce([[{ 
                charolaId: 1004, 
                comidaId: 1, 
                cantidadOtorgada: 30 
            }]]) // CHAROLA_COMIDA
            .mockResolvedValueOnce([[{ 
                hidratacionId: 1, 
                nombre: 'Zanahoria', 
                descripcion: 'Vegetal'
            }]]) // HIDRATACION
            .mockResolvedValueOnce([[{ 
                comidaId: 1, 
                nombre: 'Manzana', 
                descripcion: 'fruta roja' 
            }]]); // COMIDA
      
        const resultado = await Charola.getCharola(charolaID);
      
        expect(resultado).toEqual({
            charola: [{
              charolaId: 1004,
              nombreCharola: 'testxd',
              comidaCiclo: 10,
              hidratacionCiclo: 15,
              fechaActualizacion: null,
              estado: 'activa',
              densidadLarva: 10,
              fechaCreacion: '2025-04-29T06:00:00.000Z',
              pesoCharola: 10
            }],
            hidratacion: [{
              hidratacionId: 1,
              nombre: 'Zanahoria',
              descripcion: 'Vegetal'
            }],
            comida: [{
              comidaId: 1,
              nombre: 'Manzana',
              descripcion: 'fruta roja'
            }]
          });
          
    });

    test('debe devolver un mensaje de error si no se encuentra la charola', async () => {
      fakeConnection.query.mockResolvedValueOnce([[]]);

      const resultado = await Charola.getCharola(-1);
      expect(resultado).toEqual({
        error: 'No se encontró la charola con el ID proporcionado.'
      });
    });
  });
});
