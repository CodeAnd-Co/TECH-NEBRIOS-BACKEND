// RF29: Visualizar la información del Frass obtenido - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF29

/**
 * @fileoverview
 * Pruebas unitarias para el controlador obtenerFras (frs.controller.js).
 * Mockeamos la clase Fras para controlar sus retornos y forzar distintos escenarios.
 */

const { obtenerFras } = require('../controllers/fras.controller');

jest.mock('../models/fras.model', () => {
  // Creamos un objeto que reemplace a la clase real Fras
  // y nos permita configurar el método "obtener" en cada prueba.
  return {
    Fras: jest.fn().mockImplementation(() => ({
      obtener: jest.fn(),
    })),
  };
});

describe('Controlador obtenerFras', () => {
  let FrasMock;       // Referencia al mock de la clase Fras
  let fakeReq;        // Objeto Request simulado (no usamos propiedades concretas por ahora)
  let fakeRes;        // Objeto Response simulado con métodos espiados
  let resJsonSpy;
  let resStatusSpy;

  beforeAll(() => {
    // Importamos la clase mockeada para acceder a su mockImplementation
    const mod = require('../models/fras.model');
    FrasMock = mod.Fras;
  });

  beforeEach(() => {
    // Limpiamos instancias de mocks entre pruebas
    FrasMock.mockClear();

    // Configuramos fakeReq y fakeRes para cada prueba
    fakeReq = {}; // no necesitamos campos específicos en req para este controlador

    // Res simulada con métodos json() y status().json()
    resJsonSpy = jest.fn();
    resStatusSpy = jest.fn(() => ({ json: resJsonSpy }));

    fakeRes = {
      json: resJsonSpy,
      status: resStatusSpy,
    };
  });

  test('• Si Fras.obtener() devuelve un arreglo, debería responder con res.json(data)', async () => {
    // 1) Configuramos el retorno simulado de fras.obtener()
    const datosSimulados = [
      {
        CHAROLA: { nombreCharola: 'Charola A' },
        FRAS: { fechaRegistro: new Date('2025-06-01'), gramosGenerados: 10.5 },
      },
    ];
    // La primera instancia de FrasMock() devolverá un objeto cuya función "obtener" 
    // retorna el arreglo de datosSimulados.
    FrasMock.mockImplementationOnce(() => ({
      obtener: jest.fn().mockResolvedValue(datosSimulados),
    }));

    // 2) Llamamos al controlador
    await obtenerFras(fakeReq, fakeRes);

    // 3) Verificamos que la clase Fras se haya instanciado exactamente una vez
    expect(FrasMock).toHaveBeenCalledTimes(1);

    // 4) Verificamos que res.json() se haya invocado con el arreglo de datosSimulados
    expect(resJsonSpy).toHaveBeenCalledTimes(1);
    expect(resJsonSpy).toHaveBeenCalledWith(datosSimulados);

    // 5) Verificamos que res.status() NO se haya llamado (porque encontro datos)
    expect(resStatusSpy).not.toHaveBeenCalled();
  });

  test('• Si Fras.obtener() devuelve null o undefined, debería responder 404 con el mensaje', async () => {
    // Configuramos que fras.obtener() devuelva undefined (o null)
    FrasMock.mockImplementationOnce(() => ({
      obtener: jest.fn().mockResolvedValue(undefined),
    }));

    await obtenerFras(fakeReq, fakeRes);

    // 1) Como resultado es "falsy", debería ejecutarse el bloque de 404
    expect(resStatusSpy).toHaveBeenCalledTimes(1);
    expect(resStatusSpy).toHaveBeenCalledWith(404);

    // 2) Verificamos que luego se llame a res.json con el mensaje de no encontrados
    expect(resJsonSpy).toHaveBeenCalledTimes(1);
    expect(resJsonSpy).toHaveBeenCalledWith({ message: 'No se encontraron registros de Fras.' });

    // 3) En este caso, res.json fue llamado dentro del objeto que devolvió res.status(404)
    // y no se debe haber invocado el método json "de nivel superior" directamente sin status.
  });

  test('• Si Fras.obtener() lanza un error, debería responder 500 con el mensaje de error', async () => {
    // Simulamos que fras.obtener() arroja una excepción
    FrasMock.mockImplementationOnce(() => ({
      obtener: jest.fn().mockRejectedValue(new Error('fallo en BD')),
    }));

    await obtenerFras(fakeReq, fakeRes);

    // 1) Como se produce un catch, debería invocarse res.status(500)
    expect(resStatusSpy).toHaveBeenCalledTimes(1);
    expect(resStatusSpy).toHaveBeenCalledWith(500);

    // 2) Y luego res.json con el mensaje de error genérico
    expect(resJsonSpy).toHaveBeenCalledTimes(1);
    expect(resJsonSpy).toHaveBeenCalledWith({ message: 'Error al obtener los registros de Fras.' });
  });
});