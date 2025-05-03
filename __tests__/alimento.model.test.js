// __tests__/alimento.model.test.js
const { Alimento } = require('../models/alimento.model');

jest.mock('../utils/database', () => {
  return async () => ({
    /**
     * Mock de la función `query` que simula una respuesta de la base de datos.
     * Devuelve una lista de alimentos con datos ficticios.
     */
    query: jest.fn().mockResolvedValue([
      { comidaId: 1, nombre: 'Manzana', descripcion: 'Fruta roja' }
    ]),
    /**
     * Mock de `release`, simula liberar la conexión (sin acción real).
     */
    release: jest.fn()
  });
});

/**
 * Pruebas unitarias para el modelo `Alimento`.
 * @group Tests - Modelo Alimento
 */
describe('Modelo Alimento', () => {
  it('debe retornar una lista de alimentos con los campos esperados', async () => {
    const modelo = new Alimento();
    const datos = await modelo.obtener();

    expect(Array.isArray(datos)).toBe(true);
    expect(datos[0]).toHaveProperty('comidaId', 1);
    expect(datos[0]).toHaveProperty('nombre', 'Manzana');
    expect(datos[0]).toHaveProperty('descripcion', 'Fruta roja');
  });

  it('debe eliminar sin errores para un id dado', async () => {
    const modelo = new Alimento(5);
    await expect(modelo.eliminar()).resolves.toBeUndefined();
  });
});
