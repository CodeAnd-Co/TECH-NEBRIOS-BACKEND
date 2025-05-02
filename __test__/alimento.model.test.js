const { describe, test, expect } = require('@jest/globals');
const { Alimento } = require('../models/alimento.model.js');

describe('Modelo Alimento', () => {
  test('Debe crear una instancia válida de Alimento sin ID (autoincremental)', () => {
    const alimento = new Alimento(null, 'Manzana', 'Fruta dulce y roja');

    expect(alimento.idAlimento).toBeNull();
    expect(alimento.nombreAlimento).toBe('Manzana');
    expect(alimento.descripcionAlimento).toBe('Fruta dulce y roja');
  });

  test('Debe permitir instanciar con solo nombre y descripción', () => {
    const alimento = new Alimento(undefined, 'Papaya', 'Fruta tropical');
    expect(alimento.nombreAlimento).toBe('Papaya');
    expect(alimento.descripcionAlimento).toBe('Fruta tropical');
  });

  test('Debe permitir ID numérico (cuando es asignado desde DB)', () => {
    const alimento = new Alimento(10, 'Mango', 'Dulce');
    expect(alimento.idAlimento).toBe(10);
  });

  test('Debe manejar valores vacíos (aunque no lanza error)', () => {
    const alimento = new Alimento(null, '', '');
    expect(alimento.nombreAlimento).toBe('');
    expect(alimento.descripcionAlimento).toBe('');
  });
});
