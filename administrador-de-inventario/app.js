// Referencias a elementos del DOM
const formulario = document.getElementById('formulario');
const nombreInput = document.getElementById('nombre');
const cantidadInput = document.getElementById('cantidad');
const precioInput = document.getElementById('precio');
const tablaBody = document.querySelector('#tabla-inventario tbody');

// Arreglo para almacenar los productos
let inventario = [];

// Evento al enviar el formulario
formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = nombreInput.value.trim();
    const cantidad = parseInt(cantidadInput.value);
    const precio = parseFloat(precioInput.value);

    if (nombre === '' || isNaN(cantidad) || isNaN(precio)) {
        alert('Por favor completa todos los campos correctamente.');
        return;
    }

    const producto = {
        id: Date.now(),
        nombre,
        cantidad,
        precio
    };

    inventario.push(producto);
    mostrarInventario();
    formulario.reset();
});

// Función para mostrar los productos en la tabla
function mostrarInventario() {
    tablaBody.innerHTML = '';

    inventario.forEach(producto => {
        const fila = document.createElement('tr');

    fila.innerHTML = `
        <td>${producto.nombre}</td>
        <td>${producto.cantidad}</td>
        <td>$${producto.precio.toFixed(2)}</td>
        <td>$${(producto.precio * producto.cantidad).toFixed(2)}</td>
        <td><button class="btn-eliminar" onclick="eliminarProducto(${producto.id})">Eliminar</button></td>
    `;

    tablaBody.appendChild(fila);
    });
}

// Función para eliminar un producto
function eliminarProducto(id) {
    inventario = inventario.filter(producto => producto.id !== id);
    mostrarInventario();
}
