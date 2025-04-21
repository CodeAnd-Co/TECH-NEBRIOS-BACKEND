const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const session = require("express-session");
const app = express();

const charolasRoutes = require('./routes/charolas.ruta');
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

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json()); 

app.use('/api', charolasRoutes);

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
  

