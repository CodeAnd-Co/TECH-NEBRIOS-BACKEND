const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('../generated/prisma');
const dotenv = require('dotenv');

dotenv.config();
const prisma = new PrismaClient();

module.exports = class Usuario {
  /**
   * @description Intenta iniciar sesión buscando al usuario en la base de datos.
   * @param {Object} datos - Objeto con el nombre de usuario y contraseña.
   * @returns {String|Object} - Token de JWT o mensaje de error.
   */
  static async iniciarSesion(datos) {
    const usuario = await prisma.USUARIO.findFirst({
      where: { user: datos.usuario },
    });

    if (!usuario) {
      return { error: 'Usuario inexistente' };
    }

    const contrasenaCorrecta = await bcrypt.compare(
      datos.contrasena,
      usuario.contrasena
    );

    if (!contrasenaCorrecta) {
      return { error: 'Contraseña incorrecta' };
    }

    // Verifica si también es administrador
    const admin = await prisma.ADMINISTRADOR.findFirst({
      where: { usuarioId: usuario.usuarioId },
    });

    const token = jwt.sign(
      {
        id: usuario.usuarioId,
        nombreDeUsuario: usuario.user,
        rol: admin ? 'admin' : 'usuario',
      },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );
    return token;
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
      console.error('Error al buscar usuario:', error);
      throw error;
    }
  }

  /**
   * @description Registra al usuario nuevo en la base de datos.
   * @param {Object} usuarioNuevo - Objeto con información del nuevo usuario.
   * @returns {Object} Resultado de la creación del usuario.
   */
  static async registrarUsuario(usuarioNuevo) {
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
}
  /**
   * @description Extrae todos los usuarios de la base de datos y especifica sus roles
   * @returns {Array} Resultado de la consulta.
   */
  static async obtenerUsuarios(){
    const usuarios = await prisma.USUARIO.findMany({
      include: {
        ADMINISTRADOR: true,
      },
    });

    const resultado = usuarios.map(usuario => ({
      usuarioId: usuario.usuarioId,
      nombre: usuario.nombre,
      apellido_p: usuario.apellido_p,
      apellido_m: usuario.apellido_m,
      user: usuario.user,
      tipo_usuario: usuario.ADMINISTRADOR.length > 0 ? 'Administrador' : 'Usuario',
    }));

    return resultado;
  }

    /**
   * @description Edita la informacion de un usuario
   * @param {Object} infoUsuario - Objeto con información del usuario.
   * @param {int} usuarioId - Id del usuario a editar.
   * @returns {Array} Resultado de la consulta
   */
  static async editarUsuario(usuarioId, infoUsuario){
    const contrasenaHash = await bcrypt.hash(infoUsuario.contrasena, 12);

    await prisma.USUARIO.update({
      where: {
        usuarioId: usuarioId
      },
      data: {
        user: infoUsuario.usuario,
        contrasena: contrasenaHash,
        nombre: infoUsuario.nombre,
        apellido_m: infoUsuario.apellido_m,
        apellido_p: infoUsuario.apellido_p,
      }
    })
  }

  /**
   * @description Elimina la informacion de un usuario
   * @param {int} usuarioId - Id del usuario a editar.
  */
  static async eliminarUsuario(usuarioId){
    await prisma.USUARIO.delete({
      where: {
        usuarioId: usuarioId
      }
    })
  }

  /**
   * @description Obtiene el id de un usuario apartir de su nombre
   * @param {String} nombreUsuario Nombre del usuario
   * @returns {int} Resultado de la consulta
   */
  static async obtenerId(nombreUsuario) {
    return await prisma.USUARIO.findFirst({
      where: {
        user: nombreUsuario
      },
      select: {
        usuarioId: true
      }
    })
  }

  /**
   * @description Cambia la contraseña de un usuario 
   * @param {int} usuarioId Id del usuario
   * @param {String} contrasena Contraseña nueva
   * @returns {int} Resultado de la consulta
   */
  static async cambiarContrasena(usuarioId, contrasena) {
    const contrasenaHash = await bcrypt.hash(contrasena, 12);

    await prisma.USUARIO.update({
      where: {
        usuarioId: usuarioId
      },
      data: {
        contrasena: contrasenaHash
      }
    });
  }
};
