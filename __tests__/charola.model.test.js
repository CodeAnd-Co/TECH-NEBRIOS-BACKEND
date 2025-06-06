// RF10 Consultar charola - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF10
// Pruebas del modelo de charola

// tests/charola.model.test.js
const Charola = require('../models/charola.model');

// Mock del PrismaClient y sus métodos
jest.mock('../generated/prisma', () => {
  const findUnique = jest.fn();
  const create = jest.fn();
  const update = jest.fn();
  const findFirst = jest.fn();
  const deleteMany = jest.fn();
  const deleteFn = jest.fn();
  const findMany = jest.fn();
  const count = jest.fn();
  const $transaction = jest.fn(cb => cb(prisma));
  const createComida = jest.fn();
  const updateCharola = jest.fn();

  const CHAROLA_COMIDA = {
    create: createComida,
    update: jest.fn(),
    findFirst: jest.fn(),
    deleteMany: jest.fn(),
  };

  const CHAROLA = {
    findUnique,
    create,
    update,
    findFirst,
    delete: deleteFn,
    deleteMany,
    findMany,
    count,
  };

  const prisma = {
    CHAROLA,
    CHAROLA_COMIDA,
    CHAROLA_HIDRATACION: {
      create: jest.fn(),
      update: jest.fn(),
      findFirst: jest.fn(),
      deleteMany,
    },
    $transaction,
  };

  return {
    PrismaClient: jest.fn(() => prisma),
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

    test('debe devolver un mensaje de error si ocurre una excepción', async () => {
      prisma.CHAROLA.findUnique.mockRejectedValue(new Error('Error de base de datos'));

      const resultado = await Charola.getCharola(1004);

      expect(resultado).toEqual({
        error: 'Error de base de datos',
      });
    });
  });
});

describe('Charola.registrar', () => {
  test('debe registrar una nueva charola con comidas e hidrataciones', async () => {
    const mockData = {
      nombre: 'Charola Test',
      fechaCreacion: '2025-05-30T00:00:00.000Z',
      densidadLarva: 100,
      comidas: [
        { comidaId: 1, cantidadOtorgada: 50, fechaOtorgada: '2025-05-30T00:00:00.000Z' }
      ],
      hidrataciones: [
        { hidratacionId: 2, cantidadOtorgada: 30, fechaOtorgada: '2025-05-30T00:00:00.000Z' }
      ]
    };

    const mockCharolaCreada = {
      charolaId: 1,
      nombreCharola: 'Charola Test',
      fechaCreacion: new Date('2025-05-30T00:00:00.000Z'),
      fechaActualizacion: new Date('2025-05-30T00:00:00.000Z'),
      densidadLarva: 100,
      estado: 'activa',
      comidaCiclo: 50,
      hidratacionCiclo: 30,
      CHAROLA_COMIDA: [
        {
          cantidadOtorgada: 50,
          fechaOtorgada: new Date('2025-05-30T00:00:00.000Z'),
          COMIDA: { comidaId: 1, nombre: 'Comida Test' }
        }
      ],
      CHAROLA_HIDRATACION: [
        {
          cantidadOtorgada: 30,
          fechaOtorgada: new Date('2025-05-30T00:00:00.000Z'),
          HIDRATACION: { hidratacionId: 2, nombre: 'Hidratación Test' }
        }
      ]
    };

    prisma.CHAROLA.create.mockResolvedValue(mockCharolaCreada);

    const resultado = await Charola.registrar(mockData);

    expect(prisma.CHAROLA.create).toHaveBeenCalledWith(expect.objectContaining({
      data: expect.objectContaining({
        nombreCharola: 'Charola Test',
        densidadLarva: 100,
        comidaCiclo: 50,
        hidratacionCiclo: 30
      })
    }));

    expect(resultado).toEqual(mockCharolaCreada);
  });
});

describe('Charola.editarCharola', () => {
  test('debe editar una charola existente y sus relaciones', async () => {
    const mockCharola = {
      get: jest.fn((prop) => {
        const data = {
          charolaId: 1,
          nombreCharola: 'Charola Editada',
          fechaCreacion: new Date('2025-05-30T00:00:00.000Z'),
          densidadLarva: 120,
          estado: 'activa',
          fechaActualizacion: new Date('2025-05-31T00:00:00.000Z')
        };
        return data[prop];
      })
    };

    const mockAlimento = {
      get: jest.fn((prop) => {
        const data = {
          alimentoId: 2,
          cantidadOtorgada: 60,
          fechaOtorgada: new Date('2025-05-31T00:00:00.000Z')
        };
        return data[prop];
      })
    };

    const mockHidratacion = {
      get: jest.fn((prop) => {
        const data = {
          hidratacionId: 3,
          cantidadOtorgada: 40,
          fechaOtorgada: new Date('2025-05-31T00:00:00.000Z')
        };
        return data[prop];
      })
    };

    prisma.CHAROLA.update.mockResolvedValue({});
    prisma.CHAROLA_COMIDA.findFirst.mockResolvedValue({ id: 10 });
    prisma.CHAROLA_COMIDA.update.mockResolvedValue({});
    prisma.CHAROLA_HIDRATACION.findFirst.mockResolvedValue({ id: 20 });
    prisma.CHAROLA_HIDRATACION.update.mockResolvedValue({});

    const resultado = await Charola.editarCharola(mockCharola, mockAlimento, mockHidratacion);

    expect(prisma.CHAROLA.update).toHaveBeenCalled();
    expect(prisma.CHAROLA_COMIDA.update).toHaveBeenCalled();
    expect(prisma.CHAROLA_HIDRATACION.update).toHaveBeenCalled();
    expect(resultado).toBe(200);
  });
});

describe('Charola.eliminarCharola', () => {
  test('debe eliminar una charola existente y sus relaciones', async () => {
    prisma.CHAROLA.findUnique.mockResolvedValue({ charolaId: 1 });
    prisma.CHAROLA_HIDRATACION.deleteMany.mockResolvedValue({});
    prisma.CHAROLA_COMIDA.deleteMany.mockResolvedValue({});
    prisma.CHAROLA.delete.mockResolvedValue({});

    const resultado = await Charola.eliminarCharola(1);

    expect(prisma.CHAROLA.findUnique).toHaveBeenCalledWith({ where: { charolaId: 1 } });
    expect(prisma.CHAROLA_HIDRATACION.deleteMany).toHaveBeenCalledWith({ where: { charolaId: 1 } });
    expect(prisma.CHAROLA_COMIDA.deleteMany).toHaveBeenCalledWith({ where: { charolaId: 1 } });
    expect(prisma.CHAROLA.delete).toHaveBeenCalledWith({ where: { charolaId: 1 } });

    expect(resultado).toEqual({
      mensaje: 'Charola eliminada correctamente',
      idEliminado: 1
    });
  });

  test('debe devolver un error si la charola no existe', async () => {
    prisma.CHAROLA.findUnique.mockResolvedValue(null);

    const resultado = await Charola.eliminarCharola(999);

    expect(resultado).toEqual({
      error: 'No se encontró la charola para eliminar.'
    });
  });
});

describe('Charola.getCharolasPaginadas', () => {
  test('debe devolver una lista paginada de charolas', async () => {
    const mockCharolas = [
      { charolaId: 1, nombreCharola: 'Charola 1', fechaCreacion: new Date('2025-05-30T00:00:00.000Z') },
      { charolaId: 2, nombreCharola: 'Charola 2', fechaCreacion: new Date('2025-05-29T00:00:00.000Z') }
    ];

    prisma.CHAROLA.findMany.mockResolvedValue(mockCharolas);

    const resultado = await Charola.getCharolasPaginadas(2, 0, 'activa');

    expect(prisma.CHAROLA.findMany).toHaveBeenCalledWith(expect.objectContaining({
      where: { estado: 'activa' },
      skip: 0,
      take: 2
    }));

    expect(resultado).toEqual(mockCharolas);
  });
});

describe('Charola.getCantidadTotal', () => {
  test('debe devolver el total de charolas con estado activo', async () => {
    prisma.CHAROLA.count.mockResolvedValue(5);

    const resultado = await Charola.getCantidadTotal('activa');

    expect(prisma.CHAROLA.count).toHaveBeenCalledWith({ where: { estado: 'activa' } });
    expect(resultado).toBe(5);
  });
});

describe('Charola.hidratar', () => {
  test('debe crear relación de hidratación y actualizar la charola', async () => {
    const mockRelacion = {
      charolaId: 1,
      hidratacionId: 2,
      cantidadOtorgada: 30,
      fechaOtorgada: expect.any(Date),
      HIDRATACION: { hidratacionId: 2, nombre: 'Agua' }
    };

    const mockCharolaActualizada = {
      charolaId: 1,
      hidratacionCiclo: 60,
      fechaActualizacion: expect.any(Date)
    };

    prisma.CHAROLA_HIDRATACION.create.mockResolvedValue(mockRelacion);
    prisma.CHAROLA.update.mockResolvedValue(mockCharolaActualizada);

    const resultado = await Charola.hidratar({
      charolaId: 1,
      hidratacionId: 2,
      cantidadOtorgada: 30
    });

    expect(prisma.CHAROLA_HIDRATACION.create).toHaveBeenCalledWith(expect.objectContaining({
      data: expect.objectContaining({
        charolaId: 1,
        hidratacionId: 2,
        cantidadOtorgada: 30,
        fechaOtorgada: expect.any(Date)
      }),
      include: { HIDRATACION: true }
    }));

    expect(prisma.CHAROLA.update).toHaveBeenCalledWith({
      where: { charolaId: 1 },
      data: {
        hidratacionCiclo: { increment: 30 },
        fechaActualizacion: expect.any(Date)
      }
    });

    expect(resultado).toEqual({
      relacion: mockRelacion,
      charola: mockCharolaActualizada
    });
  });
});

describe('Charola.alimentar', () => {
  test('debe crear relación de comida y actualizar la charola', async () => {
    const mockRelacion = {
      charolaId: 1,
      comidaId: 3,
      cantidadOtorgada: 50,
      fechaOtorgada: expect.any(Date),
      COMIDA: { comidaId: 3, nombre: 'Maíz' }
    };

    const mockCharolaActualizada = {
      charolaId: 1,
      comidaCiclo: 150,
      fechaActualizacion: expect.any(Date)
    };

    prisma.CHAROLA_COMIDA.create.mockResolvedValue(mockRelacion);
    prisma.CHAROLA.update.mockResolvedValue(mockCharolaActualizada);

    const resultado = await Charola.alimentar({
      charolaId: 1,
      comidaId: 3,
      cantidadOtorgada: 50
    });

    expect(prisma.CHAROLA_COMIDA.create).toHaveBeenCalledWith(expect.objectContaining({
      data: expect.objectContaining({
        charolaId: 1,
        comidaId: 3,
        cantidadOtorgada: 50,
        fechaOtorgada: expect.any(Date)
      }),
      include: { COMIDA: true }
    }));

    expect(prisma.CHAROLA.update).toHaveBeenCalledWith({
      where: { charolaId: 1 },
      data: {
        comidaCiclo: { increment: 50 },
        fechaActualizacion: expect.any(Date)
      }
    });

    expect(resultado).toEqual({
      relacion: mockRelacion,
      charola: mockCharolaActualizada
    });
  });
});
