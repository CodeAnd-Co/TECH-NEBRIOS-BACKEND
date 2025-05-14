//RF23: Registrar un nuevo tipo de comida en el sistema - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF23
/**
 * @file Pruebas unitarias del modelo Alimento.
 * @description Verifica que la clase Alimento pueda ser instanciada correctamente con diferentes combinaciones de datos.
 * @require @jest/globals
 * @require ../models/alimento.model.js
 */
const { describe, test, expect } = require('@jest/globals');
const { Alimento } = require('../models/alimento.model.js');

describe('Modelo Alimento', () => {
  /**
   * Prueba que se pueda crear un alimento sin ID (usualmente para inserción en BD con autoincremento).
   */
  test('Debe crear una instancia válida de Alimento sin ID (autoincremental)', () => {
    const alimento = new Alimento(null, 'Manzana', 'Fruta dulce y roja');

    expect(alimento.idAlimento).toBeNull();
    expect(alimento.nombreAlimento).toBe('Manzana');
    expect(alimento.descripcionAlimento).toBe('Fruta dulce y roja');
  });

 /**
   * Prueba la creación de una instancia sin ID explícito.
   */
  test('Debe permitir instanciar con solo nombre y descripción', () => {
    const alimento = new Alimento(undefined, 'Papaya', 'Fruta tropical');
    expect(alimento.nombreAlimento).toBe('Papaya');
    expect(alimento.descripcionAlimento).toBe('Fruta tropical');
  });

  /**
   * Prueba la creación con un ID explícito, como lo devolvería la base de datos.
   */
  test('Debe permitir ID numérico (cuando es asignado desde DB)', () => {
    const alimento = new Alimento(10, 'Mango', 'Dulce');
    expect(alimento.idAlimento).toBe(10);
  });

  /**
   * Prueba que los campos puedan ser vacíos sin lanzar error, aunque se consideraría inválido lógicamente.
   */
  test('Debe manejar valores vacíos (aunque no lanza error)', () => {
    const alimento = new Alimento(null, '', '');
    expect(alimento.nombreAlimento).toBe('');
    expect(alimento.descripcionAlimento).toBe('');
  });
});
