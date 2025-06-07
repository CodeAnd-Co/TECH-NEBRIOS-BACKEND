/* Dependencias */
const express = require("express");
const router = express.Router();
/* ------------ */

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

/* INCLUDE CONTROLLERS */
const usuarioController = require("../controllers/usuario.controller");
const autenticacionController = require("../controllers/autenticacion.controller");
/* ------------------- */

/* GET METHODS */
router.get("/obtenerUsuarios", usuarioController.obtenerUsuarios);
/* ----------- */

/* POST METHODS */
router.post("/iniciarSesion", autenticacionController.iniciarSesion);
router.post("/registrarUsuario", usuarioController.registrarUsuario);
router.post("/recuperarContrasena", usuarioController.mandarCorreo);
/* ----------- */

/* PUT METHODS */
router.put("/editarUsuario", usuarioController.editarUsuario);
/* ----------- */

/* DELETE METHODS */
router.delete("/eliminarUsuario", usuarioController.eliminarUsuario);
/* ----------- */

module.exports = router;
