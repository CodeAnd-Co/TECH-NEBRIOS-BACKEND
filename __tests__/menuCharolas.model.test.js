// RF16 Visualizar todas las charolas registradas en el sistema
// Documentación: https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF16

const Charola = require('../models/charola.model');

jest.mock('../utils/database', () => {
  return async () => ({
    /**
     * Mock de la función `query` que simula una respuesta de la base de datos.
     * Devuelve una lista de charolas con datos ficticios incluyendo `charolaId`.
     */
    query: jest.fn().mockResolvedValue([
      {
        charolaId: 1,
        nombreCharola: 'C-105',
        fechaCreacion: '2025-04-18'
      }
    ]),
    /**
     * Mock de `release`, simula liberar la conexión (sin acción real).
     */
    release: jest.fn()
  });
});

/**
 * @group Tests - Modelo Charola
 * Pruebas unitarias para la capa de modelo `Charola`.
 */
describe('Modelo Charola', () => {

  /**
   * @test
   * @description Verifica que `getCharolasPaginadas()` retorne un arreglo con objetos
   * que incluyan `charolaId`, `nombreCharola` y `fechaCreacion`.
   * @async
   */
  it('debe retornar una lista de charolas con charolaId incluido', async () => {
    const datos = await Charola.getCharolasPaginadas(10, 0, 'activa');

    expect(datos).toBeInstanceOf(Array);

      // Validaciones flexibles
    expect(datos[0]).toHaveProperty('charolaId');
    expect(typeof datos[0].charolaId).toBe('number');

    expect(datos[0]).toHaveProperty('nombreCharola');
    expect(typeof datos[0].nombreCharola).toBe('string');

    expect(datos[0]).toHaveProperty('fechaCreacion');
    expect(typeof datos[0].fechaCreacion).toBe('object');
    });

  /**
   * @test
   * @description Verifica que al consultar charolas pasadas también se incluya `charolaId`.
   * @async
   */
  it('debe retornar charolas pasadas correctamente con charolaId', async () => {
    const datos = await Charola.getCharolasPaginadas(5, 0, 'pasada');

    expect(datos).toBeInstanceOf(Array);
    expect(datos[0]).toHaveProperty('charolaId');
    expect(datos[0]).toHaveProperty('nombreCharola');
    expect(datos[0]).toHaveProperty('fechaCreacion');
  });
});
