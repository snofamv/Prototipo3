// Importa Express
const express = require("express");

// Crea una instancia de la aplicación Express
const app = express();

const router = require(".");
// Usa el enrutador principal
app.use("/", router);

// Escucha en un puerto específico
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
