//RF23: Registrar un nuevo tipo de comida en el sistema - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF23
/**
 * @file Pruebas unitarias del modelo Alimento.
 * @description Verifica la funcionalidad del modelo Alimento con cobertura completa.
 */

const { Alimento, CharolaComida } = require('../models/alimento.model.js');

// Mock explícito de prisma para pruebas
jest.mock('../generated/prisma', () => {
  const findMany = jest.fn();
  const createComida = jest.fn();
  const update = jest.fn();
  const deleteMock = jest.fn();
  const createCharola = jest.fn();

  return {
    PrismaClient: jest.fn().mockImplementation(() => ({
      COMIDA: {
        findMany,
        create: createComida,
        update,
        delete: deleteMock,
      },
      CHAROLA_COMIDA: {
        create: createCharola,
      },
    })),
  };
});

const { PrismaClient } = require('../generated/prisma');
const prismaMock = new PrismaClient();

describe('Modelo Alimento', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Debe crear una instancia válida de Alimento sin ID (autoincremental)', () => {
    const alimento = new Alimento(null, 'Manzana', 'Fruta dulce y roja');
    expect(alimento.idAlimento).toBeNull();
    expect(alimento.nombreAlimento).toBe('Manzana');
    expect(alimento.descripcionAlimento).toBe('Fruta dulce y roja');
  });

  test('Debe permitir instanciar con solo nombre y descripción', () => {
    const alimento = new Alimento(undefined, 'Papaya', 'Fruta tropical');
    expect(alimento.nombreAlimento).toBe('Papaya');
    expect(alimento.descripcionAlimento).toBe('Fruta tropical');
  });

  test('Debe permitir ID numérico (cuando es asignado desde DB)', () => {
    const alimento = new Alimento(10, 'Mango', 'Dulce');
    expect(alimento.idAlimento).toBe(10);
  });

  test('Debe manejar valores vacíos (aunque no lanza error)', () => {
    const alimento = new Alimento(null, '', '');
    expect(alimento.nombreAlimento).toBe('');
    expect(alimento.descripcionAlimento).toBe('');
  });

  // ------------------- Cobertura de métodos CRUD ------------------------

  test('Debe obtener todos los alimentos desde la BD', async () => {
    const mockData = [{ comidaId: 1, nombre: 'Zanahoria', descripcion: 'Verdura' }];
    prismaMock.COMIDA.findMany.mockResolvedValue(mockData);

    const alimento = new Alimento();
    const resultado = await alimento.obtener();

    expect(prismaMock.COMIDA.findMany).toHaveBeenCalledTimes(1);
    expect(resultado).toEqual(mockData);
  });

  test('Debe agregar un nuevo alimento', async () => {
    const mockInsertado = { comidaId: 99, nombre: 'Pepino', descripcion: 'Verde y fresco' };
    prismaMock.COMIDA.create.mockResolvedValue(mockInsertado);

    const alimento = new Alimento(null, 'Pepino', 'Verde y fresco');
    const resultado = await alimento.agregar();

    expect(prismaMock.COMIDA.create).toHaveBeenCalledWith({
      data: {
        nombre: 'Pepino',
        descripcion: 'Verde y fresco',
      },
    });
    expect(resultado).toEqual(mockInsertado);
  });

  test('Debe actualizar un alimento existente', async () => {
    const mockActualizado = { comidaId: 3, nombre: 'Pera', descripcion: 'Jugosa' };
    prismaMock.COMIDA.update.mockResolvedValue(mockActualizado);

    const alimento = new Alimento(3, 'Pera', 'Jugosa');
    const resultado = await alimento.actualizar();

    expect(prismaMock.COMIDA.update).toHaveBeenCalledWith({
      where: { comidaId: 3 },
      data: {
        nombre: 'Pera',
        descripcion: 'Jugosa',
      },
    });
    expect(resultado).toEqual(mockActualizado);
  });

  test('Debe eliminar un alimento por ID', async () => {
    const mockEliminado = { comidaId: 5, nombre: 'Sandía', descripcion: 'Grande' };
    prismaMock.COMIDA.delete.mockResolvedValue(mockEliminado);

    const alimento = new Alimento(5);
    const resultado = await alimento.eliminar();

    expect(prismaMock.COMIDA.delete).toHaveBeenCalledWith({
      where: { comidaId: 5 },
    });
    expect(resultado).toEqual(mockEliminado);
  });
});


/**
 * @file Pruebas unitarias del modelo CharolaComida.
 * @description Verifica el comportamiento del modelo CharolaComida.
 */

describe('Modelo CharolaComida', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Debe crear una instancia válida de CharolaComida', () => {
    const instancia = new CharolaComida(1, 10, 20, 3.5, new Date('2025-06-01'));
    expect(instancia.id).toBe(1);
    expect(instancia.charolaId).toBe(10);
    expect(instancia.comidaId).toBe(20);
    expect(instancia.cantidadOtorgada).toBe(3.5);
    expect(instancia.fechaOtorgada).toEqual(new Date('2025-06-01'));
  });

  test('Debe agregar correctamente una relación charola-comida', async () => {
    const mockInsertado = {
      id: 99,
      charolaId: 1,
      comidaId: 2,
      cantidadOtorgada: 5,
      fechaOtorgada: new Date('2025-06-01'),
    };

    prismaMock.CHAROLA_COMIDA.create.mockResolvedValue(mockInsertado);

    const instancia = new CharolaComida(null, 1, 2, 5, new Date('2025-06-01'));
    const resultado = await instancia.agregar();

    expect(prismaMock.CHAROLA_COMIDA.create).toHaveBeenCalledWith({
      data: {
        charolaId: 1,
        comidaId: 2,
        cantidadOtorgada: 5,
        fechaOtorgada: new Date('2025-06-01'),
      },
    });

    expect(resultado).toEqual(mockInsertado);
  });

  test('Debe lanzar error si prisma.create falla', async () => {
    prismaMock.CHAROLA_COMIDA.create.mockRejectedValue(new Error('Error en BD'));

    const instancia = new CharolaComida(null, 1, 2, 5, new Date());

    await expect(instancia.agregar()).rejects.toThrow('Error en BD');
  });
});
