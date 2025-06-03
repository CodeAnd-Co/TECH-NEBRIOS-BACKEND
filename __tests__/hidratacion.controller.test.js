//RF40: Editar un tipo de hidratación en el sistema - https://codeandco-wiki.netlify.app/docs/next/proyectos/larvas/documentacion/requisitos/RF40

const controller = require('../controllers/hidratacion.controller');
const { Hidratacion } = require('../models/hidratacion.model');

/**
 * Mock de la clase Hidratacion para poder espiar sus métodos y simular comportamiento
 * durante pruebas sin necesidad de conexión real con la base de datos.
 */
jest.mock('../models/hidratacion.model', () => ({
  Hidratacion: jest.fn()
}));

/**
 * Pruebas unitarias para el controlador `Hidratacion`.
 *
 * Este bloque valida las funciones `obtenerAlimentos` y `editarHidratacion`,
 * simulando distintas respuestas esperadas ante distintos escenarios.
 *
 * @group Tests - Controlador Hidratacion
 */
describe('Controlador Hidratacion', () => {
  let req, res, instanciaMock;

  /**
   * Se ejecuta antes de cada prueba para inicializar los mocks y objetos comunes.
   */
  beforeEach(() => {
    // Implementación simulada de métodos del modelo
    instanciaMock = {
      obtener: jest.fn().mockResolvedValue([{ hidratacionId: 1 }]),
      actualizar: jest.fn().mockResolvedValue()
    };
    Hidratacion.mockImplementation(() => instanciaMock);

    // Mock de objetos request y response
    req = { params: { idHidratacion: '4' } };
    res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };
  });

  /**
   * Pruebas para la función `obtenerHidratacion`.
   */
  describe('obtenerHidratacion', () => {
    /**
     * Debe responder con un array de Hidratacion si la consulta es exitosa.
     */
    it('debe responder con JSON de hidratacion', async () => {
      await controller.obtenerHidratacion(req, res);

      expect(Hidratacion).toHaveBeenCalledWith();
      expect(instanciaMock.obtener).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith([{ hidratacionId: 1 }]);
    });

    /**
     * Debe responder con un error 500 si ocurre una excepción al obtener datos.
     */
    it('debe responder 500 si falla la obtención', async () => {
      instanciaMock.obtener.mockRejectedValue(new Error('fail'));
      await controller.obtenerHidratacion(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith('Error al obtener hidratación');
    });
  });

  /**
   * Pruebas para la función `editarHidratacion`.
   */
  describe('editarHidratacion', () => {
    /**
     * Inicializa el cuerpo de la solicitud con datos válidos.
     */
    beforeEach(() => {
      req.body = {
        nombreHidratacion: 'Zanahoria',
        descripcionHidratacion: 'Verdura naranja'
      };
    });

    /**
     * Debe actualizar correctamente un alimento cuando los datos son válidos.
     */
    it('debe editar una hidratacion y responder con éxito', async () => {
      await controller.editarHidratacion(req, res);

      expect(Hidratacion).toHaveBeenCalledWith(4, 'Zanahoria', 'Verdura naranja');
      expect(instanciaMock.actualizar).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith({ success: true, message: 'Hidratacion actualizado' });
    });

    /**
     * Debe responder con error 400 si el ID de alimento no es numérico.
     */
    it('debe responder 400 si el ID no es válido', async () => {
      req.params.idHidratacion = 'invalid';
      await controller.editarHidratacion(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'ID de hidratante no válido' });
    });

    /**
     * Debe responder con error 500 si ocurre un fallo al actualizar.
     */
    it('debe responder 500 si falla la edición', async () => {
      instanciaMock.actualizar.mockRejectedValue(new Error('fail'));
      await controller.editarHidratacion(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith('Error al editar hidratacion');
    });
  });
});
