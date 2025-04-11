const fs = require('fs');

const logPath = './logs/reinicios.log';
const lines = fs.readFileSync(logPath, 'utf-8').trim().split('\n');

let totalDowntimeMs = 0;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes(' Error crítico')) {
    const startTime = new Date(line.slice(1, 25));
    const nextLine = lines[i + 1];
    if (nextLine && nextLine.includes('⚠️ Proceso finalizó')) {
      const endTime = new Date(nextLine.slice(1, 25));
      const diff = endTime - startTime; // en milisegundos
      totalDowntimeMs += diff;
    }
  }
}

const totalSeconds = Math.round(totalDowntimeMs / 1000);
const totalMinutes = (totalSeconds / 60).toFixed(2);
const totalHours = (totalSeconds / 3600).toFixed(2);

console.log(' Resultados de tolerancia de inactividad');
console.log(`- Total de tiempo fuera de servicio: ${totalSeconds} segundos (${totalMinutes} min / ${totalHours} hrs)`);
console.log(`- ¿Supera las 48 horas?: ${totalHours > 48 ? ' SÍ' : ' NO'}`);
