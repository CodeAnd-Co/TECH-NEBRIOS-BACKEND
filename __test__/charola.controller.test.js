const charolaController = require("../controllers/charola.controller");
const Charola = require("../models/charola.model");

jest.mock("../models/charola.model");

describe("Controlador Charola - registrarCharola", () => {
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
    req.body = {
      nombre: "Charola Test",
      comidaCiclo: 5,
      hidratacionCiclo: 10,
      estado: "activa",
      pesoCharola: 1.5,
      densidadLarva: 2.5,
      fechaCreacion: "2025-04-30",
      nombreComida: "Papa",
      nombreHidratacion: "Agua",
    };

    Charola.registrarCharola.mockResolvedValue({ charolaId: 1 });

    await charolaController.registrarCharola(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      message: "Charola registrada con éxito",
      charolaId: "1",
    });
  });

  test("Debe retornar error 500 si ocurre un error interno", async () => {
    req.body = {
      nombre: "Charola Test",
    };

    Charola.registrarCharola.mockRejectedValue(new Error("Error interno"));

    await charolaController.registrarCharola(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      error: "Error al registrar la charola",
    });
  });
});
