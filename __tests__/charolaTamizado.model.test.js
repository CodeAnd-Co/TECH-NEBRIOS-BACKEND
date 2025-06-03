// 👇 Debe ir primero: declara el mock ANTES de importar el módulo a testear
jest.mock('../generated/prisma', () => {
  const mockCreate = jest.fn().mockResolvedValue({ frasId: 1, pupaId: 1, charolaId: 1 });
  const mockUpdate = jest.fn().mockResolvedValue({});
  
  const mockTx = {
    fRAS: { create: mockCreate },
    cHAROLA_FRAS: { create: mockCreate },
    pUPA: { create: mockCreate },
    cHAROLA_PUPA: { create: mockCreate },
    cHAROLA_COMIDA: { create: mockCreate },
    cHAROLA_HIDRATACION: { create: mockCreate },
    cHAROLA: {
      create: mockCreate,
      update: mockUpdate,
    },
    CHAROLA: {
      create: mockCreate,
      update: mockUpdate,
    },
    cHAROLA_CHAROLA: { create: mockCreate },
  };

  return {
    PrismaClient: jest.fn().mockImplementation(() => ({
      $transaction: (fn) => fn(mockTx),
    })),
  };
});

const Tamizado = require('../models/charolaTamizado.model');

describe('Tamizado', () => {
  const baseData = {
    charolas: [
      {
        nombre: 'CharolaTest',
        fechaCreacion: new Date(),
        fechaActualizacion: new Date(),
        densidadLarva: 100,
        pesoCharola: 200,
        comidas: [{ cantidadOtorgada: 10, comidaId: 1 }],
        hidrataciones: [{ cantidadOtorgada: 20, hidratacionId: 1 }],
      },
    ],
    tipoComida: 1,
    tipoHidratacion: 1,
    cantidadComida: 10,
    cantidadHidratacion: 5,
    cantidadPupa: 2,
    cantidadFras: 30,
    fecha: new Date(),
    charolasParaTamizar: [{ charolaId: 1 }],
  };

  it('debe ejecutar tamizarIndividual sin errores', async () => {
    const proceso = new Tamizado(baseData);
    const result = await proceso.tamizarIndividual();
    expect(result).toBe(true);
  });

  it('debe ejecutar tamizadoMultiple sin errores', async () => {
    const proceso = new Tamizado(baseData);
    const result = await proceso.tamizadoMultiple();
    expect(result).toBe(true);
  });
});
