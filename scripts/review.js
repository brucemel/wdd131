// Obtener parámetros desde la URL
const params = new URLSearchParams(window.location.search);
const producto = params.get('product');

// Mostrar en el HTML
const resultado = document.getElementById('resultado');
if (producto) {
  resultado.textContent = `Has seleccionado el producto: ${producto}`;
} else {
  resultado.textContent = "No se seleccionó ningún producto.";
}
