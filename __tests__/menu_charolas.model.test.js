// RF16 Visualizar todas las charolas registradas en el sistema - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/RF16

// Pruebas unitarias para el modelo Charola.
// Se asegura que la creación del modelo con datos simulados funcione correctamente.

const { describe, test, expect } = require('@jest/globals');
const Charola = require('../../models/charola.model'); // Ajusta según estructura real

describe('Modelo Charola', () => {
  test('Debe crear una instancia válida de Charola con datos completos', () => {
    const datosSimulados = {
      nombreCharola: 'C-123',
      comidaCiclo: 'harina',
      hidratacionCiclo: 'agua',
      estado: 'activa',
      pesoCharola: 0.5,
      densidadLarva: 'alta',
      fechaCreacion: '2025-04-30',
    };

    const nuevaCharola = new Charola(datosSimulados);

    // Validaciones de propiedades
    expect(nuevaCharola.nombreCharola).toBe('C-123');
    expect(nuevaCharola.estado).toBe('activa');
    expect(nuevaCharola.fechaCreacion).toBe('2025-04-30');
  });

  test('Debe lanzar error si falta algún campo obligatorio', () => {
    const datosIncompletos = {
      comidaCiclo: 'harina',
      hidratacionCiclo: 'agua',
    };

    // Se espera que falle al construir el modelo
    expect(() => new Charola(datosIncompletos)).toThrow();
  });
});
