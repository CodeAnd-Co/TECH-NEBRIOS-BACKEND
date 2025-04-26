// RF16 Visualizar todas las charolas registradas en el sistema - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF16

const Charola = require('../models/menu_charolas.model');

jest.mock('../utils/database', () => {
  return async () => ({
    query: jest.fn().mockResolvedValue([
      { nombreCharola: 'C-105', fechaCreacion: '2025-04-18' }
    ]),
    release: jest.fn()
  });
});

describe('Modelo Charola', () => {
  it('debe retornar una lista de charolas', async () => {
    const datos = await Charola.getCharolasPaginadas(10, 0);
    expect(datos).toBeInstanceOf(Array);
    expect(datos[0]).toHaveProperty('nombreCharola', 'C-105');
    expect(datos[0]).toHaveProperty('fechaCreacion', '2025-04-18');
  });
});
