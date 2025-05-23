const rules = [];
const output = document.getElementById('output');
const input = document.getElementById('commandInput');
const terminalBody = document.getElementById('terminalBody');

function printLine(text) {
  output.textContent += text + '\n';
  terminalBody.scrollTop = terminalBody.scrollHeight;
}

function parseCommand(cmd) {
  cmd = cmd.trim();
  if (!cmd) return;

  const parts = cmd.toLowerCase().split(' ');
  if (parts.length < 3) {
    printLine(`Hata: Geçersiz komut! Örnek: blokla ip 192.168.1.5`);
    return;
  }

  const action = parts[0]; // blokla / izinver
  const field = parts[1];  // ip / port / protocol
  const value = parts.slice(2).join(' ');

  if (!['blokla', 'izinver', 'izin-ver', 'izin'].includes(action)) {
    printLine(`Hata: Geçersiz işlem '${action}'. 'blokla' veya 'izinver' kullan.`);
    return;
  }
  if (!['ip', 'port', 'protocol'].includes(field)) {
    printLine(`Hata: Geçersiz alan '${field}'. Sadece ip, port veya protocol olabilir.`);
    return;
  }

  rules.push({ action: action.startsWith('blokla') ? 'block' : 'allow', field, value });
  printLine(`Kural eklendi: ${action} ${field} ${value}`);
}

function simulateTraffic() {
  const ips = ['192.168.1.5', '10.0.0.3', '172.16.0.10', '8.8.8.8', '203.0.113.45'];
  const ports = [22, 80, 443, 8080, 21, 3306];
  const protocols = ['tcp', 'udp', 'icmp'];
  const results = [];

  for (let i = 0; i < 10; i++) {
    const traffic = {
      ip: ips[Math.floor(Math.random() * ips.length)],
      port: ports[Math.floor(Math.random() * ports.length)],
      protocol: protocols[Math.floor(Math.random() * protocols.length)],
    };
    results.push(traffic);
  }
  return results;
}

function checkTraffic(traffic) {
  for (const rule of rules) {
    if (rule.field === 'ip' && traffic.ip === rule.value) {
      return rule.action;
    }
    if (rule.field === 'port' && traffic.port.toString() === rule.value) {
      return rule.action;
    }
    if (rule.field === 'protocol' && traffic.protocol === rule.value.toLowerCase()) {
      return rule.action;
    }
  }
  return 'allow';
}

function runSimulation() {
  printLine('\n--- Trafik Simülasyonu Başladı ---');
  const traffics = simulateTraffic();
  traffics.forEach(t => {
    const verdict = checkTraffic(t);
    printLine(`${t.ip}:${t.port} [${t.protocol.toUpperCase()}] => ${verdict === 'block' ? 'BLOKLANDI' : 'İZİN VERİLDİ'}`);
  });
  printLine('--- Simülasyon Bitti ---\n');
}

input.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const cmd = input.value;
    if (!cmd.trim()) return;
    printLine(`root@firewall:~$ ${cmd}`);
    if (cmd.toLowerCase() === 'simüle') {
      runSimulation();
    } else {
      parseCommand(cmd);
    }
    input.value = '';
  }
});

// Başlangıç mesajları
printLine('Firewall Kuralları Simülasyonuna Hoşgeldiniz!');
printLine('Kural eklemek için: blokla ip 192.168.1.5 veya izinver port 80');
printLine("Simülasyonu başlatmak için: simüle yazıp Enter'a basın.\n");