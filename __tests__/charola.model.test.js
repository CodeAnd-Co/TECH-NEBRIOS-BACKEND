const { describe, test, expect, beforeEach } = require("@jest/globals");
const Charola = require("../models/charola.model");
const db = require("../utils/database");

jest.mock("../utils/database");

describe("Modelo Charola", () => {
  let mockConnection;

  beforeEach(() => {
    jest.clearAllMocks();

    mockConnection = {
      beginTransaction: jest.fn(),
      query: jest.fn(),
      commit: jest.fn(),
      rollback: jest.fn(),
      end: jest.fn(),
    };

    db.mockResolvedValue(mockConnection);
  });

  test("Debe registrar una charola correctamente con datos válidos", async () => {
    const datos = {
      nombre: "C-456",
      comidaCiclo: 10,
      hidratacionCiclo: 5,
      estado: "activa",
      pesoCharola: 0.5,
      densidadLarva: "alta",
      fechaCreacion: "2025-04-30",
      nombreComida: "harina",
      nombreHidratacion: "agua",
    };

    // Simular respuestas esperadas de las queries
    mockConnection.query
      .mockResolvedValueOnce({ insertId: 123 }) // CHAROLA insert
      .mockResolvedValueOnce([{ comidaId: 1 }]) // COMIDA lookup
      .mockResolvedValueOnce({}) // CHAROLA_COMIDA insert
      .mockResolvedValueOnce([{ hidratacionId: 2 }]) // HIDRATACION lookup
      .mockResolvedValueOnce({}); // CHAROLA_HIDRATACION insert

    const resultado = await Charola.registrarCharola(datos);

    expect(resultado).toEqual({ charolaId: 123 });
    expect(mockConnection.beginTransaction).toHaveBeenCalled();
    expect(mockConnection.commit).toHaveBeenCalled();
    expect(mockConnection.rollback).not.toHaveBeenCalled();
    expect(mockConnection.end).toHaveBeenCalled();
  });

  test("Debe hacer rollback si no se encuentra la comida", async () => {
    const datos = {
      nombre: "C-000",
      comidaCiclo: 10,
      hidratacionCiclo: 5,
      estado: "activa",
      pesoCharola: 0.5,
      densidadLarva: "media",
      fechaCreacion: "2025-04-30",
      nombreComida: "no_existe",
      nombreHidratacion: "agua",
    };

    mockConnection.query
      .mockResolvedValueOnce({ insertId: 456 }) // CHAROLA insert
      .mockResolvedValueOnce([]); // COMIDA lookup falla

    await expect(Charola.registrarCharola(datos)).rejects.toThrow(
      "No se encontró una comida con el nombre: no_existe"
    );

    expect(mockConnection.rollback).toHaveBeenCalled();
    expect(mockConnection.end).toHaveBeenCalled();
  });

  test("Debe hacer rollback si no se encuentra la hidratación", async () => {
    const datos = {
      nombre: "C-001",
      comidaCiclo: 10,
      hidratacionCiclo: 5,
      estado: "activa",
      pesoCharola: 0.5,
      densidadLarva: "media",
      fechaCreacion: "2025-04-30",
      nombreComida: "harina",
      nombreHidratacion: "no_existe",
    };

    mockConnection.query
      .mockResolvedValueOnce({ insertId: 789 }) // CHAROLA insert
      .mockResolvedValueOnce([{ comidaId: 1 }]) // COMIDA lookup
      .mockResolvedValueOnce({}) // CHAROLA_COMIDA insert
      .mockResolvedValueOnce([]); // HIDRATACION lookup falla

    await expect(Charola.registrarCharola(datos)).rejects.toThrow(
      "No se encontró una hidratación con el nombre: no_existe"
    );

    expect(mockConnection.rollback).toHaveBeenCalled();
    expect(mockConnection.end).toHaveBeenCalled();
  });

  test("Debe devolver true si el nombre ya existe en la base de datos", async () => {
    // Simular que el nombre ya existe
    mockConnection.query.mockResolvedValueOnce([{ count: 1 }]);

    const resultado = await Charola.verificarNombre("Charola Existente");

    expect(mockConnection.query).toHaveBeenCalledWith(
      "SELECT COUNT(*) AS count FROM CHAROLA WHERE nombreCharola = ?",
      ["Charola Existente"]
    );
    expect(resultado).toBe(true);
    expect(mockConnection.end).toHaveBeenCalled();
  });

  test("Debe devolver false si el nombre no existe en la base de datos", async () => {
    // Simular que el nombre no existe
    mockConnection.query.mockResolvedValueOnce([{ count: 0 }]);

    const resultado = await Charola.verificarNombre("Charola Nueva");

    expect(mockConnection.query).toHaveBeenCalledWith(
      "SELECT COUNT(*) AS count FROM CHAROLA WHERE nombreCharola = ?",
      ["Charola Nueva"]
    );
    expect(resultado).toBe(false);
    expect(mockConnection.end).toHaveBeenCalled();
  });

  test("Debe lanzar un error si ocurre un problema en la consulta", async () => {
    // Simular un error en la consulta
    mockConnection.query.mockRejectedValueOnce(
      new Error("Error en la base de datos")
    );

    await expect(Charola.verificarNombre("Charola Error")).rejects.toThrow(
      "Error en la base de datos"
    );

    expect(mockConnection.query).toHaveBeenCalledWith(
      "SELECT COUNT(*) AS count FROM CHAROLA WHERE nombreCharola = ?",
      ["Charola Error"]
    );
    expect(mockConnection.end).toHaveBeenCalled();
  });
});
