const { Hidratacion } = require('../models/hidratacion.model');
const { PrismaClient } = require('../generated/prisma');

jest.mock('../generated/prisma', () => {
  const mPrisma = {
    HIDRATACION: {
      findMany: jest.fn()
    }
  };
  return {
    PrismaClient: jest.fn(() => mPrisma)
  };
});

describe('Hidratacion', () => {
  let hidratacionInstance;
  let prisma;

  beforeEach(() => {
    prisma = new PrismaClient();
    hidratacionInstance = new Hidratacion(1, 'Agua Mineral', 'Hidratación con gas');
  });

  test('constructor debería asignar propiedades correctamente', () => {
    expect(hidratacionInstance.idHidratacion).toBe(1);
    expect(hidratacionInstance.nombreHidratacion).toBe('Agua Mineral');
    expect(hidratacionInstance.descripcionHidratacion).toBe('Hidratación con gas');
  });

  test('obtener() debería retornar una lista de registros', async () => {
    const mockData = [
      { idHidratacion: 1, nombreHidratacion: 'Agua', descripcionHidratacion: 'Simple' },
      { idHidratacion: 2, nombreHidratacion: 'Suero', descripcionHidratacion: 'Electrolitos' }
    ];
    prisma.HIDRATACION.findMany.mockResolvedValue(mockData);

    const result = await hidratacionInstance.obtener();
    expect(result).toEqual(mockData);
    expect(prisma.HIDRATACION.findMany).toHaveBeenCalledTimes(1);
  });

  test('obtener() debería lanzar error si la consulta falla', async () => {
    const mockError = new Error('Error en consulta');
    prisma.HIDRATACION.findMany.mockRejectedValue(mockError);

    await expect(hidratacionInstance.obtener()).rejects.toThrow('Error en consulta');
    expect(prisma.HIDRATACION.findMany).toHaveBeenCalledTimes(2);
  });
});
