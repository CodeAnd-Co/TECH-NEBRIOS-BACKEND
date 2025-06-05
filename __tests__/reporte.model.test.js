const { format } = require('date-fns');

// Simula el cliente Prisma
jest.mock('../generated/prisma', () => {
  const findManyMock = jest.fn();
  return {
    PrismaClient: jest.fn().mockImplementation(() => ({
      CHAROLA: {
        findMany: findManyMock
      }
    })),
    __mocks__: {
      findManyMock
    }
  };
});

const { PrismaClient } = require('../generated/prisma');
const ReporteModel = require('../models/reporte.model');

describe('ReporteModel.obtenerDatos', () => {
    let mockFindMany;

    beforeEach(() => {
      const prismaInstance = new PrismaClient();
      mockFindMany = prismaInstance.CHAROLA.findMany;
      jest.clearAllMocks();
    });


  test('debe devolver los datos formateados correctamente', async () => {
    const now = new Date('2024-01-01T00:00:00Z');
    const resultadoSimulado = [
      {
        nombreCharola: 'Charola A',
        charolaId: 1,
        comidaCiclo: 50,
        hidratacionCiclo: 30,
        fechaCreacion: now,
        fechaActualizacion: now,
        estado: 'activo',
        densidadLarva: 100,
        CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA: [
          {
            CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA: {
              nombreCharola: 'Charola Padre'
            }
          }
        ]
      }
    ];

    mockFindMany.mockResolvedValue(resultadoSimulado);

    const resultado = await ReporteModel.obtenerDatos();

    expect(mockFindMany).toHaveBeenCalledTimes(1);
    expect(resultado).toEqual([
      {
        nombreCharola: 'Charola A',
        charolaId: 1,
        comidaCiclo: 50,
        hidratacionCiclo: 30,
        fechaCreacion: format(now, 'dd/MM/yyyy'),
        fechaActualizacion: format(now, 'dd/MM/yyyy'),
        estado: 'activo',
        densidadLarva: 100,
        charolaAncestros: ['Charola Padre']
      }
    ]);
  });

  test('debe devolver un array vacío si no hay datos', async () => {
    mockFindMany.mockResolvedValue([]);

    const resultado = await ReporteModel.obtenerDatos();

    expect(mockFindMany).toHaveBeenCalledTimes(1);
    expect(resultado).toEqual([]);
  });

  test('debe lanzar error si ocurre una excepción', async () => {
    mockFindMany.mockRejectedValue(new Error('DB error'));

    await expect(ReporteModel.obtenerDatos()).rejects.toThrow('DB error');
    expect(mockFindMany).toHaveBeenCalledTimes(1);
  });
});
