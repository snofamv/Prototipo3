const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
app.use(morgan('dev')); // 'dev' es una de las opciones predefinidas para el formato de registro

// Configurar Express para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));
app.use('/pages',express.static(path.join(__dirname, 'pages')));

// Ruta para la página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Configurar el puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
