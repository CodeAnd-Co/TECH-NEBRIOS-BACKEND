// RF1 Iniciar Sesión - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/rf1/
// Pruebas unitarias para el modelo de Usuarios.
// Se asegura que la creación del modelo con datos simulados funcione correctamente.

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/usuario.model");

jest.mock("../generated/prisma", () => {
  const mPrisma = {
    USUARIO: {
      create: jest.fn(),
      findFirst: jest.fn(),
    },
    ADMINISTRADOR: {
      findFirst: jest.fn(),
    },
  };
  return {
    PrismaClient: jest.fn(() => mPrisma),
  };
});

describe("Modelo Usuario", () => {
  let prisma;

  beforeEach(() => {
    const { PrismaClient } = require("../generated/prisma");
    prisma = new PrismaClient();
    jest.clearAllMocks();
  });

  test("Debe crear un token jwt", async () => {
  const datosSimulados = {
    usuario: "EmiVa",
    contrasena: "123",
  };

  const userFromDB = {
    ID_USUARIO: 1,
    usuario: datosSimulados.usuario,
    contrasena: await bcrypt.hash(datosSimulados.contrasena, 10),
  };

  prisma.USUARIO.findFirst.mockResolvedValue(userFromDB);
  prisma.ADMINISTRADOR.findFirst.mockResolvedValue({}); // admin

  const nuevaSesion = await Usuario.iniciarSesion(datosSimulados);

  expect(typeof nuevaSesion).toBe("string");

  const decoded = jwt.verify(nuevaSesion, process.env.JWT_SECRET);

  expect(decoded).toHaveProperty("rol", "admin");
  expect(decoded).not.toHaveProperty("id");
  expect(decoded).not.toHaveProperty("nombreDeUsuario");
});


  test("Debe lanzar error si la contraseña es incorrecta", async () => {
    const userFromDB = {
      ID_USUARIO: 1,
      usuario: "EmiVa",
      contrasena: await bcrypt.hash("correcta", 10),
    };

    prisma.USUARIO.findFirst.mockResolvedValue(userFromDB);

    const datos = {
      usuario: "EmiVa",
      contrasena: "incorrecta",
    };

    const nuevaSesion = await Usuario.iniciarSesion(datos);
    expect(nuevaSesion).toEqual({ error: "Contraseña incorrecta" });
  });

  test("Debe lanzar error si ocurre al registrar usuario", async () => {
    const datosUsuario = {
      usuario: "ErrorUsuario",
      contrasena: "pass",
      nombre: "Nombre",
      apellido_m: "M",
      apellido_p: "P",
    };

    prisma.USUARIO.create.mockRejectedValue(new Error("DB Error"));

    await expect(Usuario.registrarUsuario(datosUsuario)).rejects.toThrow("DB Error");
  });

  test("Debe registrar un nuevo usuario correctamente", async () => {
    const datosUsuario = {
      usuario: "NuevoUsuario",
      contrasena: "password123",
      nombre: "Nuevo",
      apellido_m: "ApellidoM",
      apellido_p: "ApellidoP",
    };

    const usuarioMock = {
      user: datosUsuario.usuario,
      nombre: datosUsuario.nombre,
      apellido_m: datosUsuario.apellido_m,
      apellido_p: datosUsuario.apellido_p,
    };

    jest.spyOn(bcrypt, "hash").mockResolvedValue("hashedpass123");
    prisma.USUARIO.create.mockResolvedValue(usuarioMock);

    const resultado = await Usuario.registrarUsuario(datosUsuario);
    expect(resultado).toEqual(usuarioMock);
  });

  test("Debe buscar un usuario y devolverlo si existe", async () => {
    const usuarioMock = { user: "EmiVa" };
    prisma.USUARIO.findFirst.mockResolvedValue(usuarioMock);

    const resultado = await Usuario.buscarUsuario("EmiVa");
    expect(resultado).toEqual(usuarioMock);
  });

  test("Debe lanzar error si ocurre al buscar usuario", async () => {
    prisma.USUARIO.findFirst.mockRejectedValue(new Error("Error de BD"));

    await expect(Usuario.buscarUsuario("EmiVa")).rejects.toThrow("Error de BD");
  });
});
