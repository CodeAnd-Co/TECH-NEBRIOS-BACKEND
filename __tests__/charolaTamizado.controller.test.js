// RF20: Seleccionar Charolas Para Tamizar y Registrar sus Datos - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF37

const { describe, test, expect, beforeEach} = require('@jest/globals');
const { tamizarCharolas } = require('../controllers/charolaTamizado.controller');
const tamizadoController = require('../controllers/charolaTamizado.controller');
const tamizadoCharola = require('../models/charolaTamizado.model');

jest.mock('../models/charolaTamizado.model');

describe('Controlador de Tamizado', () => {
    let req, res;
    beforeEach(() => {
        // Simulaciones básicas de req y res para probar controladores
        req = {
          body: {},
          params: {},
          query: {},
        };
        res = {
          status: jest.fn().mockReturnThis(),
          json: jest.fn(),
        };
      });
    test('Debería devolver un error 400 si no se proporcionan datos', async () => {

        req.body = null;
        //tamizadoCharola.tamizarIndividual.mockResolvedValue(false);
        await tamizadoController.tamizarCharolaIndividual(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({
            success: false,
            message: 'Datos no válidos',
        });
    });

    test('Debería devolver un error 500 si ocurre un error interno', async () => {

        const mockTamizado = {
            tamizarIndividual: jest.fn().mockRejectedValue(new Error('Error interno')),
        };

        tamizadoCharola.mockImplementation(() => mockTamizado);

        await tamizadoController.tamizarCharolaIndividual(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({
            success: false,
            message: 'Error interno del servidor',
        });
    });

    test('Debería devolver un error 200 si el tamizado se realiza correctamente', async () => {

            req.body = {
                charolas: ['E-121-08'],
                alimento: 'Salvado',
                hidratacion: 'Zanahoria',
                alimentoCantidad: 100,
                hidratacionCantidad: 50,
                pupa: 100,
                fras: 500,
                fecha: new Date(),
            };

        const mockTamizado = {
            tamizarIndividual: jest.fn().mockResolvedValue(true),
        };

        tamizadoCharola.mockImplementation(() => mockTamizado);

        await tamizadoController.tamizarCharolaIndividual(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            success: true,
            message: 'Tamizado registrado correctamente',
        });
    });
});