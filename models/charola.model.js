const db = require("../utils/database");

module.exports = class Charola {
  static async registrarCharola(data) {
    const connection = await db();
    try {
      await connection.beginTransaction();
      if (!/^\d{4}-\d{2}-\d{2}$/.test(data.fechaRegistro)) {
        throw new Error(
          "El formato de la fecha es inválido. Debe ser yyyy-mm-dd."
        );
      }
      const charolaResult = await connection.query(
        "INSERT INTO CHAROLA (nombreCharola, comidaCiclo, hidratacionCiclo, estado, pesoCharola, densidadLarva, fechaCreacion) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [
          data.nombre,
          data.comidaCiclo,
          data.hidratacionCiclo,
          data.estado || "activa", // valor por defecto
          data.pesoCharola,
          data.densidadLarva,
          data.fechaCreacion,
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

      // Insertar la relación en la tabla CHAROLA_HIDRATACION
      for (const hidratacion of data.hidrataciones) {
        await connection.query(
          "INSERT INTO CHAROLA_HIDRATACION (charolaId, hidratacionId, cantidadOtorgada) VALUES (?, ?, ?)",
          [
            charolaId,
            hidratacion.hidratacionId,
            hidratacion.cantidadHidratacion,
          ]
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
