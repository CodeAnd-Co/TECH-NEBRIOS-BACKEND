const HistorialCharola = require('../models/historialCharola.model');
const { PrismaClient } = require('../generated/prisma');

jest.mock('../generated/prisma', () => {
  const mPrisma = {
    cHAROLA: { findUnique: jest.fn() },
    cHAROLA_CHAROLA: { findMany: jest.fn() }
  };
  return { PrismaClient: jest.fn(() => mPrisma) };
});

describe('HistorialCharola', () => {
  const prisma = new PrismaClient();

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('obtenerFechaCreacion', () => {
    it('debería devolver la fecha de creación si existe la charola', async () => {
      const fechaMock = new Date('2024-05-01');
      prisma.cHAROLA.findUnique.mockResolvedValueOnce({ fechaCreacion: fechaMock });

      const resultado = await HistorialCharola.obtenerFechaCreacion(1);

      expect(prisma.cHAROLA.findUnique).toHaveBeenCalledWith({
        where: { charolaId: 1 },
        select: { fechaCreacion: true }
      });
      expect(resultado).toEqual([{ fechaCreacion: fechaMock }]);
    });

    it('debería devolver un arreglo vacío si no existe la charola', async () => {
      prisma.cHAROLA.findUnique.mockResolvedValueOnce(null);

      const resultado = await HistorialCharola.obtenerFechaCreacion(999);

      expect(resultado).toEqual([]);
    });
  });

  describe('obtenerAncestros', () => {
    it('debería devolver la lista de ancestros correctamente', async () => {
      prisma.cHAROLA_CHAROLA.findMany.mockResolvedValueOnce([
        {
          charolaAncestro: 1001,
          CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA: { nombreCharola: 'Charola Madre' }
        },
        {
          charolaAncestro: 1002,
          CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA: { nombreCharola: 'Charola Abuela' }
        }
      ]);

      const resultado = await HistorialCharola.obtenerAncestros(123);

      expect(prisma.cHAROLA_CHAROLA.findMany).toHaveBeenCalledWith({
        where: { charolaHija: 123 },
        select: {
          charolaAncestro: true,
          CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA: {
            select: { nombreCharola: true }
          }
        }
      });

      expect(resultado).toEqual([
        { charolaAncestro: 1001, nombreCharola: 'Charola Madre' },
        { charolaAncestro: 1002, nombreCharola: 'Charola Abuela' }
      ]);
    });
  });
});