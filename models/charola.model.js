const db = require("../utils/database");

// TODO: Revisar el modelo, ya que probablemente no es correcto porque se debe trabajar con mas tablas
module.exports = class Charola {
  static async registrarCharola(data) {
    const connection = await db();
    try {
      // Iniciar una transacción para asegurar consistencia entre las tablas
      await connection.beginTransaction();
      const charolaResult = await connection.query(
        "INSERT INTO CHAROLA (nombreCharola, comidaCiclo, hidratacionCiclo, estado, pesoCharola, densidadLarva) VALUES (?, ?, ?, ?, ?, ?)",
        [
          data.nombre,
          data.comidaCiclo,
          data.hidratacionCiclo,
          data.estado || "activa", // valor por defecto
          data.pesoCharola,
          data.densidadLarva,
        ]
      );

      // Obtener el ID de la charola recién insertada
      const charolaId = charolaResult.insertId;

      // Insertar la relación en la tabla CHAROLA_COMIDA
      for (const comida of data.comidas) {
        await connection.query(
          "INSERT INTO CHAROLA_COMIDA (charolaId, comidaId, cantidadOtorgada) VALUES (?, ?, ?)",
          [charolaId, comida.comidaId, comida.cantidadOtorgada]
        );
      }

      // Confirmar la transacción
      await connection.commit();

      return { charolaId };
    } catch (error) {
      // Revertir la transacción en caso de error
      await connection.rollback();
      console.error(
        "Error al registrar la charola y su relación con comida:",
        error
      );
      throw error;
    } finally {
      // Cerrar la conexión
      connection.end();
    }
  }
};
