// server.js
const express = require('express');
const app = express();

// Servir archivos estáticos desde la carpeta public
app.use(express.static('public'));

// Ruta de ejemplo
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Iniciar servidor en el puerto 80
app.listen(80, () => {
    console.log('Servidor corriendo en http://localhost');
});
