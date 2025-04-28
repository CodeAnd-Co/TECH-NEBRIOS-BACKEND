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
    }
  };
   
} 