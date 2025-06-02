const { PrismaClient } = require('../generated/prisma');
const HistorialCharola = require('../models/historialCharola.model');

// Mocks
jest.mock('../generated/prisma', () => {
  const mPrisma = {
    cHAROLA: {
      findUnique: jest.fn(),
    },
    CHAROLA_CHAROLA: {
      findMany: jest.fn(),
      create: jest.fn(),
    },
    CHAROLA_COMIDA: {
      findMany: jest.fn(),
    },
    CHAROLA_HIDRATACION: {
      findMany: jest.fn(),
    },
    CHAROLA: {
      findUnique: jest.fn(),
    },
  };
  return {
    PrismaClient: jest.fn(() => mPrisma),
  };
});

describe('HistorialCharola', () => {
  const prisma = new PrismaClient();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('obtenerFechaCreacion debe retornar la fecha si se encuentra la charola', async () => {
    const fecha = new Date('2024-01-01');
    prisma.cHAROLA.findUnique.mockResolvedValue({ fechaCreacion: fecha });

    const resultado = await HistorialCharola.obtenerFechaCreacion(1);
    expect(resultado).toEqual([{ fechaCreacion: fecha }]);
  });

  test('obtenerFechaCreacion debe retornar [] si no encuentra la charola', async () => {
    prisma.cHAROLA.findUnique.mockResolvedValue(null);
    const resultado = await HistorialCharola.obtenerFechaCreacion(1);
    expect(resultado).toEqual([]);
  });

  test('historialAlimentacion debe retornar lista formateada', async () => {
    prisma.CHAROLA_COMIDA.findMany.mockResolvedValue([
      {
        cantidadOtorgada: 100,
        fechaOtorgada: new Date('2024-01-01'),
        COMIDA: { nombre: 'Harina' },
      },
    ]);
    const resultado = await HistorialCharola.historialAlimentacion(1);
    expect(resultado).toEqual([
      {
        cantidadOtorgada: '100',
        fechaOtorgada: '01/01/2024',
        nombre: 'Harina',
      },
    ]);
  });

  test('historialHidratacion debe retornar lista formateada', async () => {
    prisma.CHAROLA_HIDRATACION.findMany.mockResolvedValue([
      {
        cantidadOtorgada: 50,
        fechaOtorgada: new Date('2024-01-01'),
        HIDRATACION: { nombre: 'Agua' },
      },
    ]);
    const resultado = await HistorialCharola.historialHidratacion(1);
    expect(resultado).toEqual([
      {
        cantidadOtorgada: '50',
        fechaOtorgada: '01/01/2024',
        nombre: 'Agua',
      },
    ]);
  });

  test('estadoCharola debe retornar estado y fecha formateada', async () => {
    prisma.CHAROLA.findUnique.mockResolvedValue({
      estado: 'activo',
      fechaActualizacion: new Date('2024-01-01'),
    });
    const resultado = await HistorialCharola.estadoCharola(1);
    expect(resultado).toEqual({
      estado: 'activo',
      fechaActualizacion: '01/01/2024',
    });
  });

  test('asignarAncestro debe llamar a create correctamente', async () => {
    prisma.CHAROLA_CHAROLA.create.mockResolvedValue({ charolaHija: 2, charolaAncestro: 1 });
    const resultado = await HistorialCharola.asignarAncestro({ charolaHija: 2, charolaAncestro: 1 });
    expect(resultado).toEqual({ charolaHija: 2, charolaAncestro: 1 });
    expect(prisma.CHAROLA_CHAROLA.create).toHaveBeenCalledWith({
      data: { charolaHija: 2, charolaAncestro: 1 },
    });
  });
});
