//RF36: Registrar un nuevo tipo de hidratación al sistema - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF36

/**
 * @file Controlador de Hidratación.
 * @description Verifica que el controlador maneje correctamente las solicitudes para registrar una hidratación, incluyendo errores esperados.
 * @require jest
 * @require ../controllers/hidratacion.controller
 * @require ../models/hidratacion.model
 */

jest.mock("../models/hidratacion.model", () => {
  return {
    Hidratacion: jest.fn().mockImplementation(() => ({
      agregar: jest.fn(),
    })),
  };
});

const {
  registrarHidratacion,
} = require("../controllers/hidratacion.controller");
const { Hidratacion } = require("../models/hidratacion.model");

describe("Controlador: registrarHidratacion", () => {
  let req, res;

  beforeEach(() => {
    req = {
      body: {
        nombre: "Agua",
        descripcion: "Hidratación básica",
      },
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    jest.clearAllMocks();
  });

  /**
   * Debe responder 200 si los datos son válidos y se registra exitosamente la hidratación.
   */
  test("Debe responder 200 si los datos son válidos", async () => {
    Hidratacion.mockImplementation(() => ({
      agregar: jest.fn().mockResolvedValueOnce(),
    }));

    await registrarHidratacion(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
  });

  /**
   * Debe responder 400 si los datos enviados están vacíos o incompletos.
   */
  test("Debe responder 400 si faltan datos", async () => {
    req.body = { nombre: "", descripcion: "" };

    await registrarHidratacion(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
  });

  /**
   * Debe responder 101 si hay un error de conexión a la base de datos.
   */
  test("Debe responder 101 si hay error de conexión", async () => {
    Hidratacion.mockImplementation(() => ({
      agregar: jest.fn().mockRejectedValueOnce({ code: "ECONNREFUSED" }),
    }));

    await registrarHidratacion(req, res);

    expect(res.status).toHaveBeenCalledWith(101);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: "Sin conexión a internet",
    });
  });

  /**
   * Debe responder 500 si ocurre un error inesperado al registrar la hidratación.
   */
  test("Debe responder 500 si ocurre otro error", async () => {
    Hidratacion.mockImplementation(() => ({
      agregar: jest.fn().mockRejectedValueOnce(new Error("Error inesperado")),
    }));

    await registrarHidratacion(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: "Error del servidor al registrar hidratación",
    });
  });

  test("debería responder con lista de hidratación si la consulta es exitosa", async () => {
    const mockData = [
      {
        idHidratacion: 1,
        nombreHidratacion: "Agua",
        descripcionHidratacion: "Natural",
      },
      {
        idHidratacion: 2,
        nombreHidratacion: "Suero",
        descripcionHidratacion: "Electrolitos",
      },
    ];
    mockHidratacionInstance.obtener.mockResolvedValue(mockData);

    await obtenerHidratacion(req, res);

    expect(mockHidratacionInstance.obtener).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith(mockData);
  });
});
