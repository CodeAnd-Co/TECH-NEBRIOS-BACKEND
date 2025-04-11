const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const session = require("express-session");

const app = express();

// Monitor de errores y reinicios automáticos
require('./utils/monitor');

// Variables de entorno
dotenv.config();

const db = require('./utils/database');

// Ruta para simular fallo del servidor
const testCrashRoute = require('./routes/testCrash.routes');
app.use('/', testCrashRoute);

async function testDB(){
    try {
        const test = await db();
        console.log('Conexión exitosa. Resultado:', test);
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
    }
}

testDB();

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Route 404 Error
app.use((req, res, next) => {
    res.status(404).render("404", { title: "404 - Not Found" });
});
app.use((req, res) => {
    console.log("invalid url");
    res.redirect("/");
});
  
/* Start server */
const port = process.env.PORT || 3000;
app.listen(port, () => {
console.log(`Servidor corriendo en http://localhost:${port}`);
});
  

