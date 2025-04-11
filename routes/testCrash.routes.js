const express = require('express');
const router = express.Router();

router.get('/test-crash', (req, res) => {
  res.send('Servidor va a fallar en 1 segundo...');
  setTimeout(() => {
    throw new Error('Falla simulada para prueba de disponibilidad');
  }, 1000);
});

module.exports = router;
