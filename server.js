/* Dependencias */
const express = require('express');
const path = require('path');
const db = require('./utils/database');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sesionActiva = require('./utils/middlewares/sesionActiva');
const limitarAPI = require('./utils/middlewares/limitarAPI');
/* ------------ */

/* Rutas */
const charolaRoutes = require('./routes/charola.routes');
const usuarioRoutes = require('./routes/usuario.routes');
const alimentoRoutes = require('./routes/alimento.routes');
const hidratacionRoutes = require('./routes/hidratacion.routes');
const frasRoutes = require('./routes/fras.routes');
const charolaTamizadoRoutes = require('./routes/charolaTamizado.routes');
const historialCharlolaRoutes = require('./routes/historialCharola.routes');
const reporteRoutes = require('./routes/reporte.routes');
/* ----- */

/* Rutas de la API */
app.use('/charola', sesionActiva, limitarAPI, charolaRoutes);
app.use('/usuario', sesionActiva, limitarAPI, usuarioRoutes);
 app.use('/alimentacion', sesionActiva, limitarAPI, alimentoRoutes);
app.use('/alimentacion', sesionActiva, limitarAPI, alimentoRoutes);
app.use('/hidratacion', sesionActiva, limitarAPI, hidratacionRoutes);
app.use('/fras', sesionActiva, limitarAPI, frasRoutes);
app.use('/charolaTamizado', sesionActiva, limitarAPI, charolaTamizadoRoutes);
app.use('/historialCharola', sesionActiva, limitarAPI, historialCharlolaRoutes);
app.use('/reporte', sesionActiva, limitarAPI, reporteRoutes);
/* ----- */

/* Conexion a la base de datos*/
async function testDB() {
  try {
    const test = await db();
    console.log('Conexión exitosa. Resultado:', test);
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
  }
}

testDB();
/* ----- */

/* Inicializar express */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

/* ----- */

/* Route 404 Error */
app.use((req, res, next) => {
  res.status(404).render('404', { title: '404 - Not Found' });
});
app.use((req, res) => {
  console.log('invalid url');
  res.redirect('/');
});
/* ----- */

/* Iniciar server */
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
/* -------- */
