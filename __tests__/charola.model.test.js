// RF10 Consultar charola - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF10
// Pruebas del modelo de charola

const Charola = require('../models/charola.model');

// Mock del PrismaClient y sus métodos
jest.mock('../generated/prisma', () => {
  const findUnique = jest.fn();

  return {
    PrismaClient: jest.fn().mockImplementation(() => ({
      CHAROLA: {
        findUnique,
      },
    })),
  };
});

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

describe('Modelo Charola', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getCharola', () => {
    test('debe devolver un objeto con datos completos si existe la charola', async () => {
      const mockCharola = {
        charolaId: 1004,
        nombreCharola: 'testxd',
        comidaCiclo: 10,
        hidratacionCiclo: 15,
        fechaActualizacion: null,
        estado: 'activa',
        densidadLarva: 10,
        fechaCreacion: '2025-04-29T06:00:00.000Z',
        pesoCharola: 10,
        CHAROLA_COMIDA: [
          {
            charolaId: 1004,
            comidaId: 1,
            cantidadOtorgada: 10,
            COMIDA: {
              comidaId: 1,
              nombre: 'Manzana',
              descripcion: 'fruta roja',
            },
          },
        ],
        CHAROLA_HIDRATACION: [
          {
            charolaId: 1004,
            hidratacionId: 1,
            cantidadOtorgada: 15,
            HIDRATACION: {
              hidratacionId: 1,
              nombre: 'Zanahoria',
              descripcion: 'Vegetal',
            },
          },
        ],
      };

      prisma.CHAROLA.findUnique.mockResolvedValue(mockCharola);

      const resultado = await Charola.getCharola(1004);

      expect(resultado).toEqual({
        charola: mockCharola,
        relacionComida: mockCharola.CHAROLA_COMIDA[0],
        comida: mockCharola.CHAROLA_COMIDA[0].COMIDA,
        relacionHidratacion: mockCharola.CHAROLA_HIDRATACION[0],
        hidratacion: mockCharola.CHAROLA_HIDRATACION[0].HIDRATACION,
      });
    });

    test('debe devolver un mensaje de error si no se encuentra la charola', async () => {
      prisma.CHAROLA.findUnique.mockResolvedValue(null);

      const resultado = await Charola.getCharola(-1);

      expect(resultado).toEqual({
        error: 'No se encontró la charola con el ID proporcionado.',
      });
    });
  });
});
