/* Dependencias */
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const session = require("express-session");
const db = require("./utils/database");

const app = express();
/* ------------ */

/* Rutas */
const charolaRoutes = require("./routes/charola.routes");
const usuarioRoutes = require("./routes/usuario.routes");
/* ----- */

/* Rutas de la API */
app.use("/charola", charolaRoutes);
app.use("/usuario", usuarioRoutes);
/* ----- */

/* Conexion a la base de datos*/
async function testDB() {
  try {
    const test = await db();
    console.log("Conexión exitosa. Resultado:", test);
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error);
  }
}

testDB();
/* ----- */

/* Inicializar express */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
/* ----- */

/* Route 404 Error */
app.use((req, res, next) => {
  res.status(404).render("404", { title: "404 - Not Found" });
});
app.use((req, res) => {
  console.log("invalid url");
  res.redirect("/");
});
/* ----- */

/* Iniciar server */
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
/* -------- */
