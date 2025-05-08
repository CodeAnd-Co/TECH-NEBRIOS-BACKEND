// RF16 Visualizar todas las charolas registradas en el sistema
// Documentación: https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF16

const Charola = require('../models/menu_charolas.model');

jest.mock('../utils/database', () => {
  return async () => ({
    /**
     * Mock de la función `query` que simula una respuesta de la base de datos.
     * Devuelve una lista de charolas con datos ficticios.
     */
    query: jest.fn().mockResolvedValue([
      { nombreCharola: 'C-105', fechaCreacion: '2025-04-18' }
    ]),

    /**
     * Mock de `release`, simula liberar la conexión (sin acción real).
     */
    release: jest.fn()
  });
});

/**
 * Pruebas unitarias para el modelo `Charola`.
 * @group Tests - Modelo Charola
 */
describe('Modelo Charola', () => {
  /**
   * Prueba: verifica que `getCharolasPaginadas` retorne una lista con los campos esperados.
   * @async
   * @function
   * @returns {Promise<void>}
   */
  it('debe retornar una lista de charolas', async () => {
    const datos = await Charola.getCharolasPaginadas(10, 0);

    expect(datos).toBeInstanceOf(Array);
    expect(datos[0]).toHaveProperty('nombreCharola', 'C-105');
    expect(datos[0]).toHaveProperty('fechaCreacion', '2025-04-18');
  });
});
