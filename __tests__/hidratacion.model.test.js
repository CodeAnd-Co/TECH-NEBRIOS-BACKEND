//RF36: Registrar un nuevo tipo de hidratación al sistema - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF36

/**
 * @file Pruebas unitarias del modelo Hidratación.
 * @description Verifica que la clase Hidratación pueda ser instanciada correctamente con diferentes combinaciones de datos.
 * @require @jest/globals
 * @require ../models/hidratacion.model.js
 */

const { describe, test, expect } = require("@jest/globals");
const { Hidratacion } = require("../models/hidratacion.model.js");

describe("Modelo Hidratación", () => {
  /**
   * Prueba que se pueda crear una hidratación sin ID (usualmente para inserción en BD con autoincremento).
   */
  test("Debe crear una instancia válida de Hidratación sin ID (autoincremental)", () => {
    const hidratacion = new Hidratacion(null, "Agua", "Hidratación básica");

    expect(hidratacion.idHidratacion).toBeNull();
    expect(hidratacion.nombreHidratacion).toBe("Agua");
    expect(hidratacion.descripcionHidratacion).toBe("Hidratación básica");
  });
  /**
   * Prueba la creación de una instancia sin ID explícito.
   */
  test("Debe permitir instanciar con solo nombre y descripción", () => {
    const hidratacion = new Hidratacion(
      undefined,
      "Jugo de Naranja",
      "Hidratación cítrica"
    );
    expect(hidratacion.nombreHidratacion).toBe("Jugo de Naranja");
    expect(hidratacion.descripcionHidratacion).toBe("Hidratación cítrica");
  });
  /**
   * Prueba la creación con un ID explícito, como lo devolvería la base de datos.
   */
  test("Debe permitir ID numérico (cuando es asignado desde DB)", () => {
    const hidratacion = new Hidratacion(5, "Leche", "Hidratación láctea");
    expect(hidratacion.idHidratacion).toBe(5);
  });
  /**
   * Prueba que los campos puedan ser vacíos sin lanzar error, aunque se consideraría inválido lógicamente.
   */
  test("Debe manejar valores vacíos (aunque no lanza error)", () => {
    const hidratacion = new Hidratacion(null, "", "");
    expect(hidratacion.nombreHidratacion).toBe("");
    expect(hidratacion.descripcionHidratacion).toBe("");
  });
});
