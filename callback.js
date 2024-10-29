const express = require('express');
const app = express();
const PORT = 3000;

// Sirve archivos estáticos desde el directorio actual
app.use(express.static(__dirname));

// Ruta para el archivo index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
