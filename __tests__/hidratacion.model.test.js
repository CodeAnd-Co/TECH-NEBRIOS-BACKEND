//RF40: Editar un tipo de hidratación en el sistema - https://codeandco-wiki.netlify.app/docs/next/proyectos/larvas/documentacion/requisitos/RF40

const { Hidratacion } = require('../models/hidratacion.model');

// Mock de PrismaClient directamente desde el archivo generado
jest.mock('../generated/prisma', () => {
  const findManyMock = jest.fn();
  const updateMock = jest.fn();
  return {
    PrismaClient: jest.fn().mockImplementation(() => ({
      HIDRATACION: {
        findMany: findManyMock,
        update: updateMock,
      },
    })),
  };
});

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

describe('Modelo Hidratacion', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debe obtener una lista de registros de hidratación', async () => {
    const registrosMock = [
      { hidratacionId: 1, nombre: 'Agua', descripcion: 'Líquido esencial' },
    ];
    prisma.HIDRATACION.findMany.mockResolvedValue(registrosMock);

    const instancia = new Hidratacion();
    const resultado = await instancia.obtener();

    expect(resultado).toEqual(registrosMock);
    expect(prisma.HIDRATACION.findMany).toHaveBeenCalled();
  });

  it('debe actualizar correctamente un registro de hidratación', async () => {
    const instancia = new Hidratacion(2, 'Suero', 'Hidratante oral');
    const resultadoEsperado = {
      hidratacionId: 2,
      nombre: 'Suero',
      descripcion: 'Hidratante oral',
    };

    prisma.HIDRATACION.update.mockResolvedValue(resultadoEsperado);

    const resultado = await instancia.actualizar();

    expect(resultado).toEqual(resultadoEsperado);
    expect(prisma.HIDRATACION.update).toHaveBeenCalledWith({
      where: { hidratacionId: 2 },
      data: {
        nombre: 'Suero',
        descripcion: 'Hidratante oral',
      },
    });
  });

  it('debe lanzar un error si falla el método obtener', async () => {
    prisma.HIDRATACION.findMany.mockRejectedValue(new Error('Error de BD'));
    const instancia = new Hidratacion();
    await expect(instancia.obtener()).rejects.toThrow('Error de BD');
  });

  it('debe lanzar un error si falla el método actualizar', async () => {
    prisma.HIDRATACION.update.mockRejectedValue(new Error('Error de actualización'));
    const instancia = new Hidratacion(3, 'Gatorade', 'Bebida energética');
    await expect(instancia.actualizar()).rejects.toThrow('Error de actualización');
  });
});

