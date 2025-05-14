// RF24: Editar un tipo de comida en el sistema - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF24

const controller = require('../controllers/alimento.controller');
const { Alimento } = require('../models/alimento.model');

/**
 * Mock de la clase Alimento para poder espiar sus métodos y simular comportamiento
 * durante pruebas sin necesidad de conexión real con la base de datos.
 */
jest.mock('../models/alimento.model', () => ({
  Alimento: jest.fn()
}));

/**
 * Pruebas unitarias para el controlador `Alimento`.
 *
 * Este bloque valida las funciones `obtenerAlimentos` y `editarAlimento`,
 * simulando distintas respuestas esperadas ante distintos escenarios.
 *
 * @group Tests - Controlador Alimento
 */
describe('Controlador Alimento', () => {
  let req, res, instanciaMock;

  /**
   * Se ejecuta antes de cada prueba para inicializar los mocks y objetos comunes.
   */
  beforeEach(() => {
    // Implementación simulada de métodos del modelo
    instanciaMock = {
      obtener: jest.fn().mockResolvedValue([{ comidaId: 1 }]),
      actualizar: jest.fn().mockResolvedValue()
    };
    Alimento.mockImplementation((id) => instanciaMock);

    // Mock de objetos request y response
    req = { params: { idAlimento: '1' } };
    res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };
  });

  /**
   * Pruebas para la función `obtenerAlimentos`.
   */
  describe('obtenerAlimentos', () => {
    /**
     * Debe responder con un array de alimentos si la consulta es exitosa.
     */
    it('debe responder con JSON de alimentos', async () => {
      await controller.obtenerAlimentos(req, res);

      expect(Alimento).toHaveBeenCalledWith();
      expect(instanciaMock.obtener).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith([{ comidaId: 1 }]);
    });

    /**
     * Debe responder con un error 500 si ocurre una excepción al obtener datos.
     */
    it('debe responder 500 si falla la obtención', async () => {
      instanciaMock.obtener.mockRejectedValue(new Error('fail'));
      await controller.obtenerAlimentos(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith('Error al obtener alimentos');
    });
  });

  /**
   * Pruebas para la función `editarAlimento`.
   */
  describe('editarAlimento', () => {
    /**
     * Inicializa el cuerpo de la solicitud con datos válidos.
     */
    beforeEach(() => {
      req.body = {
        nombreAlimento: 'Pera',
        descripcionAlimento: 'Fruta verde'
      };
    });

    /**
     * Debe actualizar correctamente un alimento cuando los datos son válidos.
     */
    it('debe editar un alimento y responder con éxito', async () => {
      await controller.editarAlimento(req, res);

      expect(Alimento).toHaveBeenCalledWith(1, 'Pera', 'Fruta verde');
      expect(instanciaMock.actualizar).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith({ success: true, message: 'Alimento actualizado' });
    });

    /**
     * Debe responder con error 400 si el ID de alimento no es numérico.
     */
    it('debe responder 400 si el ID no es válido', async () => {
      req.params.idAlimento = 'invalid';
      await controller.editarAlimento(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'ID de alimento no válido' });
    });

    /**
     * Debe responder con error 500 si ocurre un fallo al actualizar.
     */
    it('debe responder 500 si falla la edición', async () => {
      instanciaMock.actualizar.mockRejectedValue(new Error('fail'));
      await controller.editarAlimento(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith('Error al editar alimento');
    });
  });
});
