// Obtener elementos del DOM
// Obtener el elemento del párrafo
const contador = document.getElementById('hora-hora');

// Función para actualizar el reloj contador
function actualizarReloj() {
  // Obtener la hora actual
  const ahora = new Date();

  // Formatear la hora, minutos y segundos
  const horas = String(ahora.getHours()).padStart(2, '0');
  const minutos = String(ahora.getMinutes()).padStart(2, '0');
  const segundos = String(ahora.getSeconds()).padStart(2, '0');

  // Mostrar la hora en el párrafo
  contador.textContent = `${horas}:${minutos}:${segundos}`;
}

// Actualizar el reloj cada segundo
setInterval(actualizarReloj, 1000);

// Iniciar el reloj cuando la página se carga por primera vez
actualizarReloj();
 
var modal2 = document.getElementById("modal-operaciones2");
var form2 = document.getElementById("modal-form2");
var btnAbrirForm2 = document.getElementById("btnAbrirModal2");
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


const labels = ["Ausentes", "Asistencia"];
  const colors = ["#FF0000", "rgb(99,201,122)"];
  const graph = document.getElementById(`graph1`);
  const data = {
    labels: labels,
    datasets: [
      {
        data: [47, 412],
        backgroundColor: colors,
      },
    ],
  };
  const config = {
    type: "pie",
    data: data,
  };
  new Chart(graph, config);
  var ctx = document.getElementById(`graph1`);
  var myChart = new Chart(ctx, {
    type: "bar",
    data: data,
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });

