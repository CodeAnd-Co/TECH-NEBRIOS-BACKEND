// RF1 Iniciar Sesión - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/rf1/
// Pruebas del controlador de usuarios.
// Se asegura que las funciones del controlador respondan correctamente a solicitudes válidas o inválidas.
const { describe, test, expect, beforeEach} = require('@jest/globals');
const jwt = require("jsonwebtoken");
const usuarioController = require('../controllers/autenticacion.controller');
const Usuario = require('../models/usuario.model');

jest.mock('../models/usuario.model');

describe('Controlador de Usuarios', () => {
  let req, res;
  beforeEach(() => {
    // Simulaciones básicas de req y res para probar controladores
    req = {
      body: {},
      params: {},
      query: {},
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });
  test('Debe regresar un token de jwt con código 200', async () => {
    const inicioDeSesion = {
      usuario: 'EmiV',
      contrasena: '123',
    };
    req.body = inicioDeSesion;

    const fakeToken = jwt.sign(
        { id: 1, nombreDeUsuario: "EmiV", rol: "usuario" },
        process.env.JWT_SECRET,
        { expiresIn: "20m" }
      );

    Usuario.iniciarSesion.mockResolvedValue(fakeToken);
    await usuarioController.iniciarSesion(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ code: 200, token: expect.any(String) });
  });
  test('Debe retornar error 401 si el usuario no existe', async () => {
    req.body = { usuario: 'Pili' };
    Usuario.iniciarSesion.mockResolvedValue({error: "Usuario inexistente"});
    await usuarioController.iniciarSesion(req, res);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ code: 401 });
  });
  test('Debe retornar error 401 si la contraseña es incorrecta', async () => {
    const inicioDeSesion = {
        usuario: 'EmiV',
        contrasena: 'dddd',
      };
    req.body =  inicioDeSesion;
    Usuario.iniciarSesion.mockResolvedValue({error: "Contraseña incorrecta"});
    await usuarioController.iniciarSesion(req, res);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ code: 401 });
  });
  test('Debe retornar error 500 si hay un error del servidor', async () => {
    const inicioDeSesion = {
        usuario: 'EmiV',
        contrasena: 'dddd',
      };
    req.body =  inicioDeSesion;
    Usuario.iniciarSesion.mockRejectedValue(new Error('Error del servidor'));
    await usuarioController.iniciarSesion(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ code: 500 });
  });
});
