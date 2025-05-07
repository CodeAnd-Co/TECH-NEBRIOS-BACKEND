const { describe, test, expect, beforeEach } = require("@jest/globals");
const charolaController = require("../controllers/charola.controller");
const Charola = require("../models/charola.model");

jest.mock("../models/charola.model");

describe("Controlador Charola", () => {
  let req, res;

  beforeEach(() => {
    req = {
      body: {},
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  test("Debe registrar correctamente una charola con datos válidos", async () => {
    const datosSimulados = {
      nombre: "Charola Test",
      nombreComida: "Harina",
      nombreHidratacion: "Agua",
      estado: "activa",
      pesoCharola: 0.5,
      densidadLarva: 1.2,
      fechaCreacion: "2025-05-06",
      comidaCiclo: 3.0,
      hidratacionCiclo: 2.5,
    };

    Charola.registrarCharola.mockResolvedValue({ charolaId: 123 });

    req.body = datosSimulados;

    await charolaController.registrarCharola(req, res);

    expect(Charola.registrarCharola).toHaveBeenCalledWith(datosSimulados);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      message: "Charola registrada con éxito",
      charolaId: "123",
    });
  });

  test("Debe retornar error 409 si el nombre ya existe", async () => {
    req.body = {
      nombre: "Charola Existente",
      nombreComida: "Harina",
      nombreHidratacion: "Agua",
      pesoCharola: 0.5,
      densidadLarva: 1.2,
      fechaCreacion: "2025-05-06",
      comidaCiclo: 3.0,
      hidratacionCiclo: 2.5,
    };

    // Simular que el nombre ya existe
    Charola.verificarNombre = jest.fn().mockResolvedValue(true);

    await charolaController.registrarCharola(req, res);

    expect(Charola.verificarNombre).toHaveBeenCalledWith("Charola Existente");
    expect(res.status).toHaveBeenCalledWith(409);
    expect(res.json).toHaveBeenCalledWith({
      status: "error",
      message: "El nombre ya existe en la base de datos.",
    });
  });
});
