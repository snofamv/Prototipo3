// Obtener elementos del DOM
var modal1 = document.getElementById("modal-operaciones");
var modal2 = document.getElementById("modal-operaciones2");
var form1 = document.getElementById("modal-form");
var form2 = document.getElementById("modal-form2");
var btnForm1 = document.getElementById("btnRegistroHorario");
var btnAbrirForm1 = document.getElementById("btnAbrirModal1");
var btnAbrirForm2 = document.getElementById("btnAbrirModal2");
var btnCerrar1 = document.getElementById("btnCerrarModal1");
var btnCerrar2 = document.getElementById("btnCerrarModal2");


// **************************************************************************
// Función para abrir el modal form1
btnAbrirForm2.addEventListener("click", function () {
  modal2.style.display = "block";
  form2.style.display = "block";
  
});

// Función para cerrar el modal
btnCerrar2.addEventListener("click", function () {
  modal2.style.display = "none";
  form2.style.display = "none";
});

// Cerrar el modal si el usuario hace clic fuera del contenido
window.addEventListener("click", function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
    form2.style.display = "none";
  }
});
// **************************************************************************
// Función para abrir el modal form1
btnAbrirForm1.addEventListener("click", function () {
  modal1.style.display = "block";
});
btnForm1.addEventListener("click", (event) => {
  form1.style.display = "block";
});

// Función para cerrar el modal
btnCerrar1.addEventListener("click", function () {
  modal1.style.display = "none";
  form1.style.display = "none";
});

// Cerrar el modal si el usuario hace clic fuera del contenido
window.addEventListener("click", function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
    form1.style.display = "none";
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
  ctx.strokeStyle = porcentaje > 50 ? "#252c58" : "#B80000"; // Color del borde

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

grafico("miCanvas1", { porcentaje: Math.ceil(Math.random(1, 100) * 100) });
grafico("miCanvas2", { porcentaje: Math.ceil(Math.random(1, 100) * 100) });
grafico("miCanvas3", { porcentaje: Math.ceil(Math.random(1, 100) * 100) });
grafico("miCanvas4", { porcentaje: Math.ceil(Math.random(1, 100) * 100) });
grafico("miCanvas5", { porcentaje: Math.ceil(Math.random(1, 100) * 100) });
grafico("miCanvas6", { porcentaje: Math.ceil(Math.random(1, 100) * 100) });
