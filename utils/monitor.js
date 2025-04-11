// utils/monitor.js
const fs = require('fs');
const logPath = './logs/reinicios.log';

// Crear carpeta de logs si no existe
if (!fs.existsSync('./logs')) {
  fs.mkdirSync('./logs');
}

// Log cuando ocurre un error crítico
process.on('uncaughtException', (err) => {
  const mensaje = `[${new Date().toISOString()}] 🔴 Error crítico: ${err.message}\n`;
  fs.appendFileSync(logPath, mensaje);
  process.exit(1); // PM2 lo reiniciará
});

// Log cuando el proceso termina (por error u otra causa)
process.on('exit', (code) => {
  const mensaje = `[${new Date().toISOString()}] ⚠️ Proceso finalizó con código ${code}. Reinicio por PM2...\n`;
  fs.appendFileSync(logPath, mensaje);
});
