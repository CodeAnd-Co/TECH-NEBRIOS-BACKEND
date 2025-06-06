const { Hidratacion } = require('../models/hidratacion.model');

jest.mock('../generated/prisma', () => {
  const updateMock = jest.fn();
  return {
    PrismaClient: jest.fn().mockImplementation(() => ({
      HIDRATACION: {
        update: updateMock
      }
    })),
    __mocks__: { updateMock }
  };
});

const { __mocks__ } = require('../generated/prisma');

describe('Hidratacion.actualizar', () => {
  beforeEach(() => {
    __mocks__.updateMock.mockClear();
  });

  it('debe actualizar la hidratación correctamente', async () => {
    __mocks__.updateMock.mockResolvedValue({
      hidratacionId: 1,
      nombre: 'Te',
      descripcion: 'Verde'
    });

    const hidratacion = new Hidratacion(1, 'Te', 'Verde');
    const resultado = await hidratacion.actualizar();

    expect(__mocks__.updateMock).toHaveBeenCalledWith({
      where: { hidratacionId: 1 },
      data: { nombre: 'Te', descripcion: 'Verde' }
    });

    expect(resultado).toEqual({
      hidratacionId: 1,
      nombre: 'Te',
      descripcion: 'Verde'
    });
  });

  it('debe lanzar error si la base de datos falla', async () => {
    __mocks__.updateMock.mockRejectedValue(new Error('DB Error'));

    const hidratacion = new Hidratacion(1, 'Te', 'Verde');

    await expect(hidratacion.actualizar()).rejects.toThrow('DB Error');
  });
});
