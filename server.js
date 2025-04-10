const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const session = require("express-session");
const app = express();
const db = require('./utils/database');

async function testDB(){
    try {
        const test = await db();
        console.log('Conexión exitosa. Resultado:', test);
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
    }
}

testDB();

// Pruebas de estres
let concurrentRequests = 0;
const MAX_CONCURRENT = 50;

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Ruta por default
app.get('/', (req, res) => {
    res.status(200).send('Bienvenido al servidor de pruebas');
});
    
app.get('/stress_test', (req, res) => {

    if (concurrentRequests >= MAX_CONCURRENT) {
        return res.status(503).send('Servidor lleno');
    }
    concurrentRequests++;

    const start = Date.now();
    setTimeout(() => {
        const duration = Date.now() - start;
        concurrentRequests--;
        res.send(`Respuesta en ${duration}ms`);
    }, Math.random() * 100);
});

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
app.listen(port, '0.0.0.0', () => {
console.log(`Servidor corriendo en http://localhost:${port}`);
});
  

