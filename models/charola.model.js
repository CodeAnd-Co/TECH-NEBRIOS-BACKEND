const db = require("../utils/database");

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

/**
 * Obtiene todos los datos correspondientes a una charola a partir de su ID.
 * @async
 * @function
 * @param {number|string} charolaID - ID de la charola a consultar.
 * @returns {Promise<Object>} Un objeto JSON que contiene la información de la charola, hidratación y comida asociadas,
 * o un objeto con un mensaje de error si no se encuentra la charola.
 */

  static async getCharola(charolaID) {
    const connection = await db();
    try {

      // query de charola
      const [charola] = await connection.query(
        'SELECT * FROM CHAROLA WHERE charolaId = ?',
        [charolaID]
      );
  
      // si la charola no existe regresa un mensaje de error
      if (!charola || charola.length === 0) {
        return { error: 'No se encontró la charola con el ID proporcionado.' };
      }
  
      // query de charola_hisratacion
      var [relacionHidratacion] = await connection.query(
        'SELECT * FROM CHAROLA_HIDRATACION WHERE charolaId = ?',
        [charolaID]
      );
  
      // query de charola_comida
      var [relacionComida] = await connection.query(
        'SELECT * FROM CHAROLA_COMIDA WHERE charolaId = ?',
        [charolaID]
      );

      // si no esta definida la relación la define
      if (relacionHidratacion === undefined){
        relacionHidratacion = {
          charolaId : 0,
          hidratacionId : 0,
          cantidadOtorgada : 0
        }
      }

      // si no esta definida la relación la define
      if (relacionComida === undefined){
        relacionComida = {
          charolaId : 0,
          comidaId : 0,
          cantidadOtorgada : 0
        }
      }

      // query de hidratacion
      const [hidratacion] = await connection.query(
        'SELECT * FROM HIDRATACION WHERE hidratacionId = ?',
        [relacionHidratacion.hidratacionId]
      );

      // query de comida
      const [comida] = await connection.query(
        'SELECT * FROM COMIDA WHERE comidaId = ?',
        [relacionComida.comidaId]
      );

      return {
        relacionComida,
        relacionHidratacion,
        charola,
        hidratacion,
        comida
      };

    } catch (error) {
      return { error: error.message };
    } finally {
      connection.release();
    }
  }

  static async eliminarCharola(charolaID){

  }
};
