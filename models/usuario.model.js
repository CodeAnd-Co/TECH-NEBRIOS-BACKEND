const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('../generated/prisma');
const dotenv = require("dotenv");

dotenv.config();
const prisma = new PrismaClient();

module.exports = class Usuario {
  /**
   * @description Intenta iniciar sesión buscando al usuario en la base de datos.
   * @param {Object} datos - Objeto con el nombre de usuario y contraseña.
   * @returns {String|Object} - Token de JWT o mensaje de error.
   */
  static async iniciarSesion(datos) {
    try {
      const usuario = await prisma.USUARIO.findFirst({
        where: { user: datos.usuario },
      });

      if (!usuario) {
        return { error: "Usuario inexistente" };
      }

      const contrasenaCorrecta = await bcrypt.compare(
        datos.contrasena,
        usuario.contrasena
      );

      if (!contrasenaCorrecta) {
        return { error: "Contraseña incorrecta" };
      }

      // Verifica si también es administrador
      const admin = await prisma.ADMINISTRADOR.findFirst({
        where: { usuarioId: usuario.usuarioId },
      });

      const token = jwt.sign(
        {
          id: usuario.usuarioId,
          nombreDeUsuario: usuario.user,
          rol: admin ? "admin" : "usuario",
        },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );

      return token;
    } catch (error) {
      console.log("Error al iniciar sesión:", error);
      throw error;
    }
  }

  /**
   * @description Busca un usuario en la base de datos a partir de su nombre de usuario.
   * @param {String} usuario - Nombre de usuario a buscar.
   * @returns {Object|null} - Usuario encontrado o null.
   */
  static async buscarUsuario(usuario) {
    try {
      return await prisma.USUARIO.findFirst({
        where: { user: usuario },
        select: { user: true },
      });
    } catch (error) {
      console.error("Error al buscar usuario:", error);
      throw error;
    }
  }

  /**
   * @description Registra al usuario nuevo en la base de datos.
   * @param {Object} usuarioNuevo - Objeto con información del nuevo usuario.
   * @returns {Object} Resultado de la creación del usuario.
   */
  static async registrarUsuario(usuarioNuevo) {
    try {
      const contrasenaHash = await bcrypt.hash(usuarioNuevo.contrasena, 12);

      const nuevo = await prisma.USUARIO.create({
        data: {
          user: usuarioNuevo.usuario,
          contrasena: contrasenaHash,
          nombre: usuarioNuevo.nombre,
          apellido_m: usuarioNuevo.apellido_m,
          apellido_p: usuarioNuevo.apellido_p,
        },
      });

      return nuevo;
    } catch (error) {
      console.log("Error al registrar usuario:", error);
      throw error;
    }
  }
};
