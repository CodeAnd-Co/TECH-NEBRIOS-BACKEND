const bcrypt = require("bcryptjs");
const db = require("../utils/database");
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");

dotenv.config();

module.exports = class Usuario {
  static async iniciarSesion(datos) {
    let connection;
    try {
      connection = await db();
      let rows = await connection.query(
        "SELECT usuarioId, user, contrasena FROM USUARIO WHERE user = ?",
        [datos.usuario]
      );

      if(rows.length == 0){
        return {error: "Usuario inexistente"}
      }

      const usuario = rows[0];

      const contrasenaCorrecta = await bcrypt.compare(datos.contrasena, usuario.contrasena);

      if(!contrasenaCorrecta){
        return {error: "Contraseña incorrecta"}
      }

      rows = await connection.query(
        "SELECT * FROM ADMINISTRADOR WHERE usuarioId = ?",
        [usuario.usuarioId]
      );

      if(rows.length > 0){
        const token = jwt.sign({ id: usuario.usuarioId, nombreDeUsuario: usuario.user, rol: "admin" }, process.env.JWT_SECRET, {
            expiresIn: '1d',
          });
        return token;
      }
      else{
        const token = jwt.sign({ id: usuario.usuarioId, nombreDeUsuario: usuario.user, rol: "usuario" }, process.env.JWT_SECRET, {
            expiresIn: '1d',
          });
        return token;
      }

    } catch (error) {
      console.log("Error al iniciar sesión:", error);
      throw error;
    }finally {
      if (connection) {
        connection.release();
      }
    }
  }

  static async buscarUsuario(usuario){
    let connection;
    try {
      connection = await db();
      const rows = await connection.query(
        "SELECT user FROM USUARIO WHERE user = ?",
        [usuario]
      );
      return rows[0];
    } catch (error) {
      console.error("Error al buscar usuario:", error);
      throw error;
    }finally {
      if (connection) {
        connection.release();
      }
    }
  }

  static async registrarUsuario(usuarioNuevo) {
    try {
        const connection = await db();
        const contrasenaHash = await bcrypt.hash(usuarioNuevo.contrasena, 12)
        const usuario = await connection.execute(
        `INSERT INTO USUARIO (user, contrasena, nombre, apellido_m, apellido_p) VALUES (?, ?, ?, ?, ?)`,
        [usuarioNuevo.usuario, contrasenaHash, usuarioNuevo.nombre, usuarioNuevo.apellido_m, usuarioNuevo.apellido_p]
        );
        await connection.release();
        return usuario;
    } catch (error) {
      console.log("Error al registrar usuario:", error);
        throw error; 
    }
}
};
