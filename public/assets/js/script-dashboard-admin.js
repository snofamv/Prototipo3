// Obtener elementos del DOM
var modal = document.getElementById("modal-registrar-hora");
var btn = document.getElementById("abrirModalBtn");
var closeBtn = document.getElementById("cerrarBtn");

// Función para abrir el modal
btn.addEventListener("click", function () {
  modal.style.display = "block";
});

// Función para cerrar el modal
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Cerrar el modal si el usuario hace clic fuera del contenido
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

const grafico = (idElemento, datos) => {
  const canvas = document.getElementById(`${idElemento}`);
  const ctx = canvas.getContext("2d");

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 40;
  const startAngle = 0;
  const porcentaje = datos.porcentaje;
  // const endAngle = Math.PI * 1.5; // 1.5 PI es el ángulo que representa el 100% del gráfico circular
  const endAngle = (Math.PI * 2 * porcentaje) / 100; // 1.5 PI es el ángulo que representa el 100% del gráfico circular

  // Dibujar el arco (gráfico circular)
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 5, 0, endAngle);
  ctx.fillStyle = "rgba(0, 0, 0, 0.3)"; // Color de la sombra
  ctx.lineWidth = 20; // Grosor del borde
  ctx.strokeStyle = porcentaje>50?"#252c58":"#B80000"; // Color del borde

  ctx.stroke();

  // Rellenar el área exterior con un color sólido para ocultar la transparencia
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius + 5, 0, Math.PI * 2);
  ctx.fillStyle = "#fff"; // Color de fondo
  ctx.fill();

  // Escribir el valor dentro del círculo
  ctx.font = "20px Arial"; // Tamaño y tipo de fuente
  ctx.fillStyle = "#333"; // Color del texto
  ctx.textAlign = "center"; // Alineación del texto
  ctx.textBaseline = "middle"; // Alineación vertical del texto
  ctx.fillText(`${porcentaje}%`, centerX, centerY);
  return;
};

grafico("miCanvas1", {porcentaje: Math.ceil(Math.random(1,100)*100)});
grafico("miCanvas2", {porcentaje: Math.ceil(Math.random(1,100)*100)});
grafico("miCanvas3", {porcentaje: Math.ceil(Math.random(1,100)*100)});
grafico("miCanvas4", {porcentaje: Math.ceil(Math.random(1,100)*100)});
grafico("miCanvas5", {porcentaje: Math.ceil(Math.random(1,100)*100)});
grafico("miCanvas6", {porcentaje: Math.ceil(Math.random(1,100)*100)});
