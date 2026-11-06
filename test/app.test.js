const test = require('node:test');
const assert = require('node:assert');
const http = require('node:http');

// 1. Prueba Unitaria
test('Prueba Unitaria: Suma básica de verificación', () => {
  const suma = (a, b) => a + b;
  assert.strictEqual(suma(2, 2), 4, 'La suma de 2 + 2 debe ser 4');
});

// 2. Prueba de Integración HTTP
test('Prueba de Integración: Endpoint principal debe responder 200 OK', (t, done) => {
  const PORT = process.env.PORT || 3000;

  const httpReq = http.get(`http://localhost:${PORT}/`, (res) => {
    assert.strictEqual(res.statusCode, 200, 'El servidor debe responder con código 200');
    done();
  });

  httpReq.on('error', (err) => {
    assert.fail(`No se pudo conectar al servidor en el puerto ${PORT}: ${err.message}`);
    done();
  });
});
