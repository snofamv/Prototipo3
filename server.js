const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
app.use(morgan('dev')); // 'dev' es una de las opciones predefinidas para el formato de registro

// Configurar Express para servir archivos estáticos desde la carpeta 'public'
// Configurar los directorios estáticos 'public' y 'pages'
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/pages', express.static(path.join(__dirname, 'pages')));

// Rutas para los archivos estáticos en los directorios 'public' y 'pages'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/cp-admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'admin-dashboard.html'));
});
app.get('/cp-employee', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'employee-dashboard.html'));
});
app.get('/assistance', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'table-assistance.html'));
});
app.get('/logout', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Configurar el puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`SERVER CORRIENDO EN: http://127.0.0.1:${PORT}`);
});
