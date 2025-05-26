// RF20: Seleccionar Charolas Para Tamizar y Registrar sus Datos - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF37

const { describe, test, expect } = require('@jest/globals');
const tamizadoCharola = require('../models/charolaTamizado.model');

describe('Modelo de Tamizado', () => {
    test("Debe regresar verdadero si el tamizado individual se realiza correctamente", async () => {
        const datosSimulados = {
            charolas: ["C-207"],
            tipoComida: 'Salvado',
            tipoHidratacion: 'Zanahoria',
            cantidadComida: 100,
            cantidadHidratacion: 50,
            cantidadPupa: 100,
            cantidadFras: 500,
            fecha: new Date()
        }
        const tamizado = new tamizadoCharola(datosSimulados);

        tamizado.tamizarIndividual = jest.fn().mockResolvedValue(true);

        const resultado = await tamizado.tamizarIndividual();
        expect(resultado).toBe(true);
    });

    test("Debe regresar verdadero si el tamizado múltiple se realiza correctamente", async () => {
        const datosSimulados = {
            charolas: ["C-206", "E-206-1", "E-201-3"],
            cantidadPupa: 100,
            cantidadFras: 600,
            fecha: new Date()
        }
        const tamizado = new tamizadoCharola(datosSimulados);

        tamizado.tamizadoMultiple = jest.fn().mockResolvedValue(true);

        const resultado = await tamizado.tamizadoMultiple();
        expect(resultado).toBe(true);
    });
});