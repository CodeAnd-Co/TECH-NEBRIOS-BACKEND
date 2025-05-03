// RF1 Iniciar Sesión - https://codeandco-wiki.netlify.app/docs/proyectos/larvas/documentacion/requisitos/rf1/
// Pruebas unitarias para el modelo de Usuarios.
// Se asegura que la creación del modelo con datos simulados funcione correctamente.
const { describe, test, expect } = require('@jest/globals');
const jwt = require("jsonwebtoken");
const Usuario = require('../models/usuario.model'); 
const e = require('express');

describe('Modelo Usuario', () => {
  test('Debe crear un token jwt', async () => {
    const datosSimulados = {
      usuario: 'EmiVa',
      contrasena: '123',
    };
    const nuevaSesion = await Usuario.iniciarSesion(datosSimulados);
    // Validaciones de propiedades
    expect(typeof nuevaSesion).toBe('string');

    const decoded = jwt.verify(nuevaSesion, process.env.JWT_SECRET); 

    expect(decoded).toHaveProperty('id');
    expect(decoded).toHaveProperty('nombreDeUsuario', datosSimulados.usuario);
    expect(decoded).toHaveProperty('rol');

    expect(typeof decoded.id).toBe('number');
    expect(typeof decoded.rol).toBe('string');
  });
  test('Debe lanzar error si el usuario no existe', async () => {
    const usuarioInexistente = {
      usuario: 'Pili',
      contrasena: '123',
    };
    // Se espera que se regrese un error
    const nuevaSesion = await Usuario.iniciarSesion(usuarioInexistente);
    expect(nuevaSesion).toEqual({ error: "Usuario inexistente" });
  });
  test('Debe lanzar error si la contraseña es incorrecta', async() => {
    const contrasenaIncorrecta = {
      usuario: 'EmiV',
      contrasena: 'asadsada',
    };
    // Se espera que se regrese un error
    const nuevaSesion = await Usuario.iniciarSesion(contrasenaIncorrecta);
    expect(nuevaSesion).toEqual({ error: "Contraseña incorrecta" });
  });
});
