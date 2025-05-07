const db = require("../utils/database");

module.exports = class Charola {
  static async verificarNombre(nombre) {
    const connection = await db();
    try {
      const [result] = await connection.query(
        "SELECT COUNT(*) AS count FROM CHAROLA WHERE nombreCharola = ?",
        [nombre]
      );
      return result.count > 0; // Devuelve true si el nombre ya existe
    } catch (error) {
      throw error;
    } finally {
      connection.end();
    }
  }

  static async registrarCharola(data) {
    const connection = await db();
    try {
      await connection.beginTransaction();

      // Validar formato de la fecha
      if (!/^\d{4}-\d{2}-\d{2}$/.test(data.fechaCreacion)) {
        throw new Error(
          "El formato de la fecha es inválido. Debe ser yyyy-mm-dd."
        );
      }

      // Insertar en la tabla CHAROLA
      const charolaResult = await connection.query(
        "INSERT INTO CHAROLA (nombreCharola, comidaCiclo, hidratacionCiclo, estado, pesoCharola, densidadLarva, fechaCreacion) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [
          data.nombre,
          data.comidaCiclo,
          data.hidratacionCiclo,
          data.estado || "activa",
          data.pesoCharola,
          data.densidadLarva,
          data.fechaCreacion,
        ]
      );

      // Obtener el ID de la charola recién insertada
      const charolaId = charolaResult.insertId;

      // Obtener el ID de la comida desde la tabla COMIDA
      const comidaResult = await connection.query(
        "SELECT comidaId FROM COMIDA WHERE nombre = ?",
        [data.nombreComida]
      );

      if (!comidaResult || comidaResult.length === 0) {
        throw new Error(
          `No se encontró una comida con el nombre: ${data.nombreComida}`
        );
      }

      const comidaId = comidaResult[0].comidaId; // ID de la comida obtenida

      // Insertar en la tabla CHAROLA_COMIDA
      if (data.comidaCiclo > 0) {
        await connection.query(
          "INSERT INTO CHAROLA_COMIDA (charolaId, comidaId, cantidadOtorgada) VALUES (?, ?, ?)",
          [charolaId, comidaId, data.comidaCiclo]
        );
      }

      // Obtener el ID de la hidratación desde la tabla HIDRATACION
      const hidratacionResult = await connection.query(
        "SELECT hidratacionId FROM HIDRATACION WHERE nombre = ?",
        [data.nombreHidratacion]
      );

      if (!hidratacionResult || hidratacionResult.length === 0) {
        throw new Error(
          `No se encontró una hidratación con el nombre: ${data.nombreHidratacion}`
        );
      }

      const hidratacionId = hidratacionResult[0].hidratacionId; // ID de la hidratación obtenida

      // Insertar en la tabla CHAROLA_HIDRATACION
      if (data.hidratacionCiclo > 0) {
        await connection.query(
          "INSERT INTO CHAROLA_HIDRATACION (charolaId, hidratacionId, cantidadOtorgada) VALUES (?, ?, ?)",
          [charolaId, hidratacionId, data.hidratacionCiclo] // hidratacionId puede ser un valor fijo o dinámico
        );
      }

      // Confirmar la transacción
      await connection.commit();

      return { charolaId };
    } catch (error) {
      // Revertir la transacción en caso de error
      await connection.rollback();
      throw error;
    } finally {
      // Cerrar la conexión
      connection.end();
    }
  }
};
