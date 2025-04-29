const db = require("../utils/database");
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();

module.exports = class Usuario {

  static async iniciarSesion(data) {
    try {
      const connection = await db();
      const [resultado] = await connection.query(
        "SELECT usuarioId, user, contrasena FROM USUARIO WHERE user = ?",
        [data.usuario]
      );

      if(resultado.length == 0){
        return {error: "Usuario inexistente"}
      }

      const usuario = resultado[0];

      data.contrasena == usuario.contrasena ? contrasenaCorrecta = true : contrasenaCorrecta = false

      if(!contrasenaCorrecta){
        return {error: "Contraseña incorrecta"}
      }

      const [admin] = await connection.query(
        "SELECT * FROM ADMINISTRADOR WHERE usuarioId = ?",
        [usuario.usuarioId]
      );

      if(admin.length > 0){
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
      console.error("Error al iniciar sesión:", error);
      throw error;
    }
  }
};
