const Usuario = require("../models/usuario.model.js");
const nodemailer = require("nodemailer");

/**
 * @description Registra un nuevo usuario en la base de datos.
 * @param {*} req - Solicitud HTTP que contiene información del usuario.
 * @param {*} res - Respuesta HTTP que se usa para enviar el resultado.
 * @returns {JSON} Código de respuesta
 */
exports.registrarUsuario = async (req, res) => {
  try {
    await Usuario.registrarUsuario(req.body);
    return res.status(201).json({ code: 201 });
  } catch (error) {
    return res.status(500).json({ code: 500 });
  }
};

exports.mandarCorreo = async (req, res) => {
  // Configura el transporter
  const transporter = nodemailer.createTransport({
      service: "gmail",
    auth: {
      user: "juaneduardorosasceron@gmail.com",
      pass: "958f083f7b",
    },
  });

  // Opciones del correo
  const mailOptions = {
    from: "juaneduardorosasceron@gmail.com",
    to: "A01710168@tec.mx",
    subject: "Asunto del correo",
    text: "Contenido del correo en texto plano",
    html: "<h1>Contenido del correo en HTML</h1>",
  };

  // Enviar el correo
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Correo enviado: " + info.response);
    }
  });
};
