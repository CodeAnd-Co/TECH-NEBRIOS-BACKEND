const rateLimit = require('express-rate-limit');
/**
 * Middleware para limitar la cantidad de peticiones a la API.
 * 
 * Limita a 200 peticiones por IP cada 15 minutos.
 * 
 * @module apiLimiter
 */
const limitarAPI = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 4000,   
  keyGenerator: (req) => {
    return req.ip;
  },
  handler: (req, res) => {
    res.status(429).json({
      error: 'Demasiadas solicitudes. Intenta de nuevo en 15 minutos.'
    });
  }
});

module.exports = limitarAPI;

