const { Hidratacion } = require('../models/hidratacion.model');

jest.mock('../generated/prisma', () => {
  const createMock = jest.fn();
  return {
    PrismaClient: jest.fn().mockImplementation(() => ({
      HIDRATACION: {
        create: createMock
      }
    })),
    __mocks__: { createMock }
  };
});

const { __mocks__ } = require('../generated/prisma');

describe('Hidratacion.agregar', () => {
  beforeEach(() => {
    __mocks__.createMock.mockClear();
  });

  it('debe agregar correctamente una hidratación', async () => {
    __mocks__.createMock.mockResolvedValue({
      hidratacionId: 1,
      nombre: 'Agua',
      descripcion: 'Natural'
    });

    const hidratacion = new Hidratacion(null, 'Agua', 'Natural');
    const resultado = await hidratacion.agregar();

    expect(__mocks__.createMock).toHaveBeenCalledWith({
      data: {
        nombre: 'Agua',
        descripcion: 'Natural'
      }
    });

    expect(resultado).toEqual({
      hidratacionId: 1,
      nombre: 'Agua',
      descripcion: 'Natural'
    });
  });

  it('debe lanzar error si ocurre una falla', async () => {
    __mocks__.createMock.mockRejectedValue(new Error('Error BD'));

    const hidratacion = new Hidratacion(null, 'Agua', 'Natural');

    await expect(hidratacion.agregar()).rejects.toThrow('Error BD');
  });
});
