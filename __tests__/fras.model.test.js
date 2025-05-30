const { Fras } = require('../models/fras.model');
const { PrismaClient } = require('../generated/prisma');

jest.mock('../generated/prisma', () => {
  const mPrisma = {
    FRAS: {
      findMany: jest.fn()
    }
  };
  return {
    PrismaClient: jest.fn(() => mPrisma)
  };
});

describe('Fras', () => {
  let frasInstance;
  let prisma;

  beforeEach(() => {
    prisma = new PrismaClient();
    frasInstance = new Fras(1, 100, 2);
  });

  test('constructor debería asignar propiedades correctamente', () => {
    expect(frasInstance.frasId).toBe(1);
    expect(frasInstance.gramosGenerados).toBe(100);
    expect(frasInstance.charolaId).toBe(2);
  });

  test('obtener() debería retornar una lista de registros', async () => {
    const mockData = [
      { frasId: 1, gramosGenerados: 50, charolaId: 1 },
      { frasId: 2, gramosGenerados: 75, charolaId: 2 }
    ];
    prisma.FRAS.findMany.mockResolvedValue(mockData);

    const result = await frasInstance.obtener();
    expect(result).toEqual(mockData);
    expect(prisma.FRAS.findMany).toHaveBeenCalledTimes(1);
  });

  test('obtener() debería lanzar error si la consulta falla', async () => {
    const mockError = new Error('Error de conexión');
    prisma.FRAS.findMany.mockRejectedValue(mockError);

    await expect(frasInstance.obtener()).rejects.toThrow('Error de conexión');
    expect(prisma.FRAS.findMany).toHaveBeenCalledTimes(2);
  });
});
