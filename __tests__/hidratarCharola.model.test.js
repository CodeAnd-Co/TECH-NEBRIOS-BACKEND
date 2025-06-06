const Charola = require('../models/charola.model');

jest.mock('../generated/prisma', () => {
  const createMock = jest.fn();
  const updateMock = jest.fn();

  return {
    PrismaClient: jest.fn().mockImplementation(() => ({
      $transaction: jest.fn(async (callback) => {
        const fakeClient = {
          CHAROLA_HIDRATACION: { create: createMock },
          CHAROLA: { update: updateMock }
        };
        return callback(fakeClient);
      })
    })),
    __mocks__: {
      createMock,
      updateMock
    }
  };
});

const { __mocks__ } = require('../generated/prisma');

const mockFecha = new Date('2025-05-28T00:00:00.000Z');

beforeAll(() => {
  jest.useFakeTimers().setSystemTime(mockFecha);
});

afterAll(() => {
  jest.useRealTimers();
});

describe('Charola.hidratar', () => {
  it('debería crear la relación y actualizar la charola', async () => {
    // Setup de mocks
    __mocks__.createMock.mockResolvedValue({
      charolaId: 107,
      hidratacionId: 5,
      cantidadOtorgada: 80,
      fechaOtorgada: mockFecha,
      HIDRATACION: {
        hidratacionId: 5,
        nombre: 'Horchata',
        descripcion: 'Fruta'
      }
    });

    __mocks__.updateMock.mockResolvedValue({
      charolaId: 107,
      nombreCharola: '1',
      comidaCiclo: 11,
      hidratacionCiclo: 34,
      fechaActualizacion: mockFecha,
      estado: 'activa',
      densidadLarva: 1,
      fechaCreacion: mockFecha,
      pesoCharola: null
    });

    // Llamada real al método del modelo
    const result = await Charola.hidratar({
      charolaId: 107,
      hidratacionId: 5,
      cantidadOtorgada: 80
    });

    // Validaciones
    expect(result.relacion).toMatchObject({
      charolaId: 107,
      hidratacionId: 5,
      cantidadOtorgada: 80,
      fechaOtorgada: mockFecha,
      HIDRATACION: {
        hidratacionId: 5,
        nombre: 'Horchata',
        descripcion: 'Fruta'
      }
    });

    expect(result.charola).toMatchObject({
      charolaId: 107,
      nombreCharola: '1',
      comidaCiclo: 11,
      hidratacionCiclo: 34,
      fechaActualizacion: mockFecha,
      estado: 'activa',
      densidadLarva: 1,
      fechaCreacion: mockFecha,
      pesoCharola: null
    });

    expect(__mocks__.createMock).toHaveBeenCalledTimes(1);
    expect(__mocks__.updateMock).toHaveBeenCalledTimes(1);
  });
});
