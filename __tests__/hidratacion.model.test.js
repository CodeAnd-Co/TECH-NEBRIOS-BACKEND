//RF40: Editar un tipo de hidratación en el sistema - https://codeandco-wiki.netlify.app/docs/next/proyectos/larvas/documentacion/requisitos/RF40

// RF40 Editar un tipo de hidratación en el sistema
const { Hidratacion } = require('../models/hidratacion.model');

// Objeto contenedor de mocks
const mockPrismaHandlers = {};

jest.mock('../generated/prisma', () => {
  mockPrismaHandlers.findMany = jest.fn();
  mockPrismaHandlers.update = jest.fn();

  return {
    PrismaClient: jest.fn().mockImplementation(() => ({
      HIDRATACION: {
        findMany: mockPrismaHandlers.findMany,
        update: mockPrismaHandlers.update,
      },
    })),
  };
});

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

describe('Modelo Hidratacion', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('obtener', () => {
    test('debe devolver una lista de hidrataciones', async () => {
      const mockData = [
        { hidratacionId: 1, nombre: 'Agua', descripcion: 'Líquido esencial' },
        { hidratacionId: 2, nombre: 'Jugo', descripcion: 'Fruta líquida' },
      ];

      mockPrismaHandlers.findMany.mockResolvedValue(mockData);

      const modelo = new Hidratacion();
      const resultado = await modelo.obtener();

      expect(mockPrismaHandlers.findMany).toHaveBeenCalled();
      expect(resultado).toEqual(mockData);
    });
  });

  describe('actualizar', () => {
    test('debe actualizar y devolver el registro de hidratación', async () => {
      const datosEntrada = {
        idHidratacion: 1,
        nombreHidratacion: 'Electrolitos',
        descripcionHidratacion: 'Rehidratación oral',
      };

      const mockActualizado = {
        hidratacionId: 1,
        nombre: 'Electrolitos',
        descripcion: 'Rehidratación oral',
      };

      mockPrismaHandlers.update.mockResolvedValue(mockActualizado);

      const modelo = new Hidratacion(
        datosEntrada.idHidratacion,
        datosEntrada.nombreHidratacion,
        datosEntrada.descripcionHidratacion
      );

      const resultado = await modelo.actualizar();

      expect(mockPrismaHandlers.update).toHaveBeenCalledWith({
        where: { hidratacionId: datosEntrada.idHidratacion },
        data: {
          nombre: datosEntrada.nombreHidratacion,
          descripcion: datosEntrada.descripcionHidratacion,
        },
      });

      expect(resultado).toEqual(mockActualizado);
    });
  });
});
