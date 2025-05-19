// utils/logger.js
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info', // puedes cambiar a 'debug' si necesitas más detalle
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message, ...meta }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message} ${Object.keys(meta).length ? JSON.stringify(meta) : ''}`;
    })
  ),
  transports: [
    new winston.transports.Console(), // para ver en terminal
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }) // para guardar errores
  ],
});

module.exports = logger;
