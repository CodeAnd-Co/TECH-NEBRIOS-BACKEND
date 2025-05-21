// alimentarCharola.model.test.js

const Charola = require('../models/charola.model');
const prisma = require('../prisma/prismaClient');

jest.mock('../prisma/prismaClient', () => {
    return {
        $transaction: jest.fn()
    };
});

describe('alimentar', () => {
    it('debería crear la relación y actualizar la charola', async () => {
        const mockFecha = new Date('2025-05-19T00:00:00.000Z');

        const relMock = {
            charolaId: 100,
            comidaId: 2,
            cantidadOtorgada: 100,
            fechaOtorgada: mockFecha,
            COMIDA: { comidaId: 2, nombre: 'Pera Verde', descripcion: 'Fruta jugosa y refrescante' }
        };

        const updatedCharolaMock = {
            charolaId: 100,
            comidaCiclo: 200,
            fechaActualizacion: mockFecha
        };

        const createMock = jest.fn().mockResolvedValue(relMock);
        const updateMock = jest.fn().mockResolvedValue(updatedCharolaMock);

        prisma.$transaction.mockImplementation(async (cb) => {
            const fakeClient = {
                CHAROLA_COMIDA: { create: createMock },
                CHAROLA: {
                    update: updateMock,
                    findUnique: jest.fn().mockResolvedValue({ charolaId: 100 })
                },
                COMIDA: {
                    findUnique: jest.fn().mockResolvedValue({ comidaId: 2 })
                }
            };
            return cb(fakeClient);
        });

        const result = await Charola.alimentar({
            charolaId: 100,
            comidaId: 2,
            cantidadOtorgada: 100
        });

        expect(result.relacion).toMatchObject({
            charolaId: 100,
            comidaId: 2,
            cantidadOtorgada: 100,
            COMIDA: {
                comidaId: 2,
                nombre: 'Pera Verde',
                descripcion: 'Fruta jugosa y refrescante'
            }
        });
    });
});
