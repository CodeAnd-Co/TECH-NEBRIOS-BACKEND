const { Hidratacion } = require('../models/hidratacion.model');
const { PrismaClient } = require('../generated/prisma');

jest.mock('../generated/prisma', () => {
  const deleteMock = jest.fn();
  return {
    PrismaClient: jest.fn(() => ({
      HIDRATACION: {
        delete: deleteMock,
      },
    })),
  };
});

describe('Modelo Hidratacion - eliminar()', () => {
  let prismaInstance;

  beforeEach(() => {
    jest.clearAllMocks();
    // Crea una nueva instancia simulada
    prismaInstance = new PrismaClient();
  });

  it('debe eliminar correctamente el registro', async () => {
    const mockResultado = { hidratacionId: 1, nombre: 'Agua' };

    prismaInstance.HIDRATACION.delete.mockResolvedValue(mockResultado);

    const hidratacion = new Hidratacion(1);
    const resultado = await hidratacion.eliminar();

    expect(prismaInstance.HIDRATACION.delete).toHaveBeenCalledWith({
      where: { hidratacionId: 1 },
    });
    expect(resultado).toEqual(mockResultado);
  });

  it('debe lanzar un error si la eliminación falla', async () => {
    prismaInstance.HIDRATACION.delete.mockRejectedValue(new Error('Error de BD'));

    const hidratacion = new Hidratacion(1);

    await expect(hidratacion.eliminar()).rejects.toThrow('Error de BD');
  });
});
