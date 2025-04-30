const db = require("../utils/database");

// TODO: Revisar el modelo, ya que probablemente no es correcto porque se debe trabajar con mas tablas
module.exports = class Charola {
  static async registrarCharola(data) {
    try {
      const connection = await db();
      const result = await connection.query(
        "INSERT INTO charolas (nombre, fecha, alimentacion, peso, hidratacion) VALUES (?, ?, ?, ?)",
        [data.id, data.nombre, data.descripcion, data.fecha]
      );
      return result;
    } catch (error) {
      console.error("Error al registrar la charola:", error);
      throw error;
    } finally {
      conexion.release();
    }
  }

  static async tablaCharolas(){ 
    try{
      const conexion = await db(); 
      const resultado = await conexion.query("SELECT nombreCharola, charolaId, comidaCiclo, hidratacionCiclo, DATE_FORMAT(fechaActualizacion, '%d/%m/%Y') AS fechaActualizacion, estado, densidadLarva, DATE_FORMAT(fechaCreacion, '%d/%m/%Y') AS fechaCreacion, pesoCharola FROM CHAROLA");
      
      return resultado;
    }catch (error) {
      console.error("[Model]. Error al obtener informacion de las charolas: ", error)
      throw error;
    } finally {
      conexion.release();
    }
  };

  static async buscarPorId(charolaId) {
    const connection = await db();

    try {
      const rows = await connection.query(
        "SELECT * FROM CHAROLA WHERE charolaId = ?",
        [charolaId]
      );
      
      return rows.length ? rows[0] : null;
    } catch (err) {
      console.error("[Model][buscarPorId] error en query:", err);
      throw err;
    } finally {
      connection.release();
    }
  }
  
   
  static async obtenerAncestros(charolaId) {
    const connection = await db();

    try {
      const actual = await this.buscarPorId(charolaId);

      if (!actual) {
        return { actual: null, ancestros: [] };
      }

      const ancestros = [];
      let currentId = charolaId;

      while (true) {
        const relaciones = await connection.query(
          "SELECT charolaAncestro FROM CHAROLA_CHAROLA WHERE charolaHija = ?",
          [currentId]
        );

        if (relaciones.length === 0 || !relaciones[0].charolaAncestro) {
          break;
        }

        const padreId = relaciones[0].charolaAncestro;
        const padre = await this.buscarPorId(padreId);

        if (!padre) {
          break;
        }

        ancestros.push(padre);
        currentId = padre.charolaId;
      }

      return { actual, ancestros };

    } catch (error) {
      console.error("[Model][obtenerAncestros] error general:", error);
      throw error;
    } finally {
      connection.release();
    }
  }
};