const Charola = require("../models/charola.model");
const db = require("../utils/database");

jest.mock("../utils/database", () => ({
  createPool: jest.fn(() => ({
    query: jest.fn(),
    end: jest.fn(),
  })),
}));

describe("Modelo Charola - registrarCharola", () => {
  let connection;

  beforeEach(() => {
    connection = {
      query: jest.fn(),
      beginTransaction: jest.fn(),
      commit: jest.fn(),
      rollback: jest.fn(),
      end: jest.fn(),
    };
    db.mockResolvedValue(connection);
  });

  afterEach(() => {
    connection.end();
  });

  test("Debe registrar una charola correctamente", async () => {
    const datosSimulados = {
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

    connection.query
      .mockResolvedValueOnce({ insertId: 1 }) // Respuesta para insertar en CHAROLA
      .mockResolvedValueOnce([{ comidaId: 2 }]) // Respuesta para SELECT comidaId
      .mockResolvedValueOnce([{ hidratacionId: 3 }]) // Respuesta para SELECT hidratacionId
      .mockResolvedValueOnce() // Respuesta para insertar en CHAROLA_COMIDA
      .mockResolvedValueOnce(); // Respuesta para insertar en CHAROLA_HIDRATACION

    const result = await Charola.registrarCharola(datosSimulados);

    expect(connection.beginTransaction).toHaveBeenCalled();
    expect(connection.query).toHaveBeenCalledWith(
      "INSERT INTO CHAROLA (nombreCharola, comidaCiclo, hidratacionCiclo, estado, pesoCharola, densidadLarva, fechaCreacion) VALUES (?, ?, ?, ?, ?, ?, ?)",
      ["Charola Test", 5, 10, "activa", 1.5, 2.5, "2025-04-30"]
    );
    expect(connection.query).toHaveBeenCalledWith(
      "SELECT comidaId FROM COMIDA WHERE nombre = ?",
      ["Papa"]
    );
    expect(connection.query).toHaveBeenCalledWith(
      "INSERT INTO CHAROLA_COMIDA (charolaId, comidaId, cantidadOtorgada) VALUES (?, ?, ?)",
      [1, 2, 5]
    );
    expect(connection.query).toHaveBeenCalledWith(
      "SELECT hidratacionId FROM HIDRATACION WHERE nombre = ?",
      ["Agua"]
    );
    expect(connection.query).toHaveBeenCalledWith(
      "INSERT INTO CHAROLA_HIDRATACION (charolaId, hidratacionId, cantidadOtorgada) VALUES (?, ?, ?)",
      [1, 3, 10]
    );
    expect(connection.commit).toHaveBeenCalled();
    expect(result).toEqual({ charolaId: 1 });
  });
});
