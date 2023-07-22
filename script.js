// Función que se ejecutará cuando un campo del formulario cambie
function campoRelleno(event) {
    const valorCampo = event.target.value; // Obtener el valor del campo que cambió
    alert(`Campo rellenado: ${valorCampo}`);
  }

  // Obtener todos los campos del formulario
  const camposFormulario = document.querySelectorAll('input, textarea');

  // Agregar el evento "input" a cada campo del formulario
  camposFormulario.forEach(campo => {
    campo.addEventListener('input', campoRelleno);
  });