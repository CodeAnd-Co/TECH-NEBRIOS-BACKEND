const { Alimento, CharolaComida } = require('../models/alimento.model');

jest.mock('../generated/prisma', () => {
  const mockCreate = jest.fn();
  const mockFindMany = jest.fn();
  const mockUpdate = jest.fn();
  const mockDelete = jest.fn();

  return {
    PrismaClient: jest.fn().mockImplementation(() => ({
      COMIDA: {
        create: mockCreate,
        findMany: mockFindMany,
        update: mockUpdate,
        delete: mockDelete
      },
      CHAROLA_COMIDA: {
        create: mockCreate
      }
    }))
  };
});

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

describe('Modelo Alimento', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('obtener debe devolver todos los alimentos', async () => {
    const mockAlimentos = [
      { comidaId: 1, nombre: 'Salvado', descripcion: 'A base de trigo' }
    ];
    prisma.COMIDA.findMany.mockResolvedValueOnce(mockAlimentos);

    const alimento = new Alimento();
    const resultado = await alimento.obtener();

    expect(resultado).toEqual(mockAlimentos);
    expect(prisma.COMIDA.findMany).toHaveBeenCalled();
  });

  test('agregar debe insertar un nuevo alimento', async () => {
    const nuevo = { comidaId: 2, nombre: 'Zanahoria', descripcion: 'Hidratación' };
    prisma.COMIDA.create.mockResolvedValueOnce(nuevo);

    const alimento = new Alimento(null, 'Zanahoria', 'Hidratación');
    const resultado = await alimento.agregar();

    expect(resultado).toEqual(nuevo);
    expect(prisma.COMIDA.create).toHaveBeenCalledWith({
      data: { nombre: 'Zanahoria', descripcion: 'Hidratación' }
    });
  });

  test('actualizar debe modificar un alimento existente', async () => {
    const actualizado = { comidaId: 1, nombre: 'Salvado', descripcion: 'Modificado' };
    prisma.COMIDA.update.mockResolvedValueOnce(actualizado);

    const alimento = new Alimento(1, 'Salvado', 'Modificado');
    const resultado = await alimento.actualizar();

    expect(resultado).toEqual(actualizado);
    expect(prisma.COMIDA.update).toHaveBeenCalledWith({
      where: { comidaId: 1 },
      data: { nombre: 'Salvado', descripcion: 'Modificado' }
    });
  });

  test('eliminar debe remover un alimento', async () => {
    const eliminado = { comidaId: 1, nombre: 'Salvado', descripcion: 'Desc' };
    prisma.COMIDA.delete.mockResolvedValueOnce(eliminado);

    const alimento = new Alimento(1);
    const resultado = await alimento.eliminar();

    expect(resultado).toEqual(eliminado);
    expect(prisma.COMIDA.delete).toHaveBeenCalledWith({
      where: { comidaId: 1 }
    });
  });
});

describe('Modelo CharolaComida', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('agregar debe registrar una relación charola-comida', async () => {
    const mockRegistro = {
      id: 10,
      charolaId: 1,
      comidaId: 2,
      cantidadOtorgada: 100,
      fechaOtorgada: new Date()
    };

    prisma.CHAROLA_COMIDA.create.mockResolvedValueOnce(mockRegistro);

    const relacion = new CharolaComida(
      null, 1, 2, 100, mockRegistro.fechaOtorgada
    );

    const resultado = await relacion.agregar();

    expect(resultado).toEqual(mockRegistro);
    expect(prisma.CHAROLA_COMIDA.create).toHaveBeenCalledWith({
      data: {
        charolaId: 1,
        comidaId: 2,
        cantidadOtorgada: 100,
        fechaOtorgada: mockRegistro.fechaOtorgada
      }
    });
  });
});
