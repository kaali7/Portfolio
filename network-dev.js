const { spawn } = require('child_process');
const os = require('os');

const nets = os.networkInterfaces();
let localIp = '127.0.0.1';

// Find the local network IP address
for (const name of Object.keys(nets)) {
  for (const net of nets[name]) {
    if (net.family === 'IPv4' && !net.internal) {
      if (name.toLowerCase().includes('wi-fi') || name.toLowerCase().includes('ethernet') || localIp === '127.0.0.1') {
        localIp = net.address;
      }
    }
  }
}

console.log('\n\x1b[36m%s\x1b[0m', '=========================================');
console.log('\x1b[32m%s\x1b[0m', ` 🚀 Local:   http://localhost:3000`);
console.log('\x1b[32m%s\x1b[0m', ` 📱 Network: http://${localIp}:3000`);
console.log('\x1b[36m%s\x1b[0m', '=========================================\n');

// Start the Next.js server bound to all interfaces
const nextProcess = spawn('npx', ['next', 'dev', '-H', '0.0.0.0'], { 
  stdio: 'inherit', 
  shell: true 
});

nextProcess.on('close', (code) => {
  process.exit(code);
});
