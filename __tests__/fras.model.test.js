// RF29: Visualizar la información del Frass obtenido - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF29

/**
 * @fileoverview
 * Pruebas unitarias para el modelo Fras (fras.model.js).
 * Se “mockea” internamente a PrismaClient para no depender de una BD real.
 */

const { Fras } = require('../models/fras.model');

// Jest provee un mecanismo para interceptar el require de '../generated/prisma'
jest.mock('../generated/prisma', () => {
  // Creamos un “mock” de lo que exporta nuestro cliente generado:
  // - PrismaClient: un constructor que al instanciarlo devuelve un objeto con cHAROLA_FRAS.findMany.
  const findManyMock = jest.fn();
  const prismaMock = {
    cHAROLA_FRAS: {
      findMany: findManyMock,
    },
  };
  return {
    PrismaClient: jest.fn(() => prismaMock),
  };
});

describe('Modelo Fras – método obtener()', () => {
  let frasModel;
  let mockFindMany;

  beforeAll(() => {
    // Importamos la función “mockeada” de PrismaClient:
    const { PrismaClient } = require('../generated/prisma');
    // Guardamos la referencia al mock de findMany para configurar su comportamiento
    mockFindMany = new PrismaClient().cHAROLA_FRAS.findMany;
  });

  beforeEach(() => {
    // Cada vez que arranque una prueba, instanciamos un nuevo Fras
    frasModel = new Fras();
    // Limpiamos el historial de llamadas y return values del mock
    mockFindMany.mockReset();
  });

  test('• debería invocar a prisma.cHAROLA_FRAS.findMany() sin parámetros extraños', async () => {
    // Preparamos el retorno simulado (un arreglo vacío)
    mockFindMany.mockResolvedValueOnce([]);

    const resultado = await frasModel.obtener();

    // 1) Verificamos que findMany fue llamado exactamente una vez
    expect(mockFindMany).toHaveBeenCalledTimes(1);

    // 2) Verificamos que no se le pasaron parámetros inesperados
    expect(mockFindMany).toHaveBeenCalledWith({
      select: {
        CHAROLA: {
          select: {
            charolaId: true,
            nombreCharola: true,
          },
        },
        FRAS: {
          select: {
            fechaRegistro: true,
            frasId: true,
            gramosGenerados: true,
          },
        },
      },
    });

    // 3) Como findMany devolvió [], el método obtener() debe retornar []
    expect(resultado).toEqual([]);
  });

  test('• debería retornar los datos exactamente como los provee findMany', async () => {
    // Creamos un array simulado que represente varias filas:
    const filasSimuladas = [
      {
        CHAROLA: { nombreCharola: 'Charola A' },
        FRAS: { fechaRegistro: new Date('2025-06-01'), gramosGenerados: 12.5 },
      },
      {
        CHAROLA: { nombreCharola: 'Charola B' },
        FRAS: { fechaRegistro: new Date('2025-06-02'), gramosGenerados:  7.8 },
      },
    ];
    mockFindMany.mockResolvedValueOnce(filasSimuladas);

    const resultado = await frasModel.obtener();

    // El método en sí no transforma los datos, solo devuelve tal cual lo que findMany retorna
    expect(resultado).toEqual(filasSimuladas);
  });

  test('• debería propagar el error si findMany arroja una excepción', async () => {
    // Simulamos que findMany lanza un error
    const errorSimulado = new Error('fallo en la BD');
    mockFindMany.mockRejectedValueOnce(errorSimulado);

    // Usamos async/await y catch implícito de Jest para promesas que rechazan
    await expect(frasModel.obtener()).rejects.toThrow('fallo en la BD');

    // Verificamos que findMany se haya ejecutado
    expect(mockFindMany).toHaveBeenCalledTimes(1);
  });
});