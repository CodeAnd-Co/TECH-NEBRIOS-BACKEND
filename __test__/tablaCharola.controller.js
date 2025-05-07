// RF11 Descargar datos:
// https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF11

const { tablaCharola } = require('../controllers/tablaCharola.controller');
const TablaCharola = require('../models/tablaCharolas.model');

jest.mock('../models/tablaCharolas.model');

/**
 * Pruebas unitarias para el controlador tablaCharola.
 * @group Tests - Controlador Charola
 */
describe('Controlador tablaCharola', () => {
    /**
    * Prueba: debe devolver código 200 y una lista de charolas simulada.
    * @async
    * @function
    */
   
    it('responde con JSON de charolas', async () => {
        Charola.getCharolasPaginadas.mockResolvedValue([
        { nombreCharola: 'E-001', fechaCreacion: '2025-04-01' }
        ]);
        Charola.getCantidadTotal.mockResolvedValue(1);

        const req = { query: { page: '1', limit: '10' } };
        const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
        };

        await obtenerCharolas(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
        total: 1,
        page: 1,
        limit: 10,
        totalPages: 1,
        data: expect.any(Array)
        }));
    });

})