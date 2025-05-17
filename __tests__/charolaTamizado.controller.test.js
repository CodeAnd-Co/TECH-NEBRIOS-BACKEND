// RF20: Seleccionar Charolas Para Tamizar y Registrar sus Datos - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF37

const { describe, test, expect, beforeEach} = require('@jest/globals');
const { tamizarCharolas } = require('../controllers/charolaTamizado.controller');
const tamizadoController = require('../controllers/charolaTamizado.controller');
const tamizadoCharola = require('../models/charolaTamizado.model');

jest.mock('../models/charolaTamizado.model');

describe('Controlador de Tamizado Individual', () => {
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
            exito: false,
            mensaje: 'Datos no válidos',
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
            exito: false,
            mensaje: 'Error interno del servidor',
        });
    });

    test('Debería devolver un error 200 si el tamizado se realiza correctamente', async () => {

            req.body = {
                charolas: ['E-031-03'],
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
            exito: true,
            mensaje: 'Tamizado registrado correctamente',
        });
    });
});

describe('Controlador de Tamizado Multiple', () => {
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
        await tamizadoController.tamizarMultiplesCharolas(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({
            exito: false,
            mensaje: 'Datos no válidos',
        });
    });

    test('Debería devolver un error 500 si ocurre un error interno', async () => {

        const mockTamizado = {
            tamizadoMultiple: jest.fn().mockRejectedValue(new Error('Error interno')),
        };

        tamizadoCharola.mockImplementation(() => mockTamizado);

        await tamizadoController.tamizarMultiplesCharolas(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({
            exito: false,
            mensaje: 'Error interno del servidor',
        });
    });

    test('Debería devolver un error 200 si el tamizado se realiza correctamente', async () => {

            req.body = {
                charolas: ["E-107-09", "E-057-10", "E-104-04"],
                pupa: 100,
                fras: 500,
                fecha: new Date(),
            };

        const mockTamizado = {
            tamizadoMultiple: jest.fn().mockResolvedValue(true),
        };

        tamizadoCharola.mockImplementation(() => mockTamizado);

        await tamizadoController.tamizarMultiplesCharolas(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            exito: true,
            mensaje: 'Tamizado registrado correctamente',
        });
    });
});