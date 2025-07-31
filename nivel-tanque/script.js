let nivelTanque = 0;
let nivelMaximo = 100;

function llenarTanque(cantidad) {
    nivelTanque += cantidad;
    if (nivelTanque > nivelMaximo) {
        nivelTanque = nivelMaximo;
    }
    actualizarVista();
}

function vaciarTanque(cantidad) {
    nivelTanque -= cantidad;
    if (nivelTanque < 0) {
        nivelTanque = 0;
    }
    actualizarVista();
}

function mostrarNivelTanque() {
    // Esta función ya no es necesaria para la interfaz gráfica,
    // pero puedes usarla para depuración si lo deseas.
    console.log(`Nivel actual del tanque: ${nivelTanque}`);
}

function reiniciarTanque() {
    nivelTanque = 0;
    actualizarVista();
}

function ajustarNivelTanque(nuevoNivel) {
    if (nuevoNivel < 0 || nuevoNivel > nivelMaximo) {
        alert("Nivel fuera de rango. Debe estar entre 0 y 100.");
        return;
    }
    nivelTanque = nuevoNivel;
    actualizarVista();
}

// Actualiza la vista del tanque según el nivel actual
function actualizarVista() {
    const nivelElem = document.getElementById('nivel');
    const textoElem = document.getElementById('nivel-texto');
    const porcentaje = Math.round((nivelTanque / nivelMaximo) * 100);
    if (nivelElem) nivelElem.style.height = porcentaje + '%';
    if (textoElem) textoElem.textContent = porcentaje + '%';
}

// Inicializa la vista
document.addEventListener("DOMContentLoaded", () => {
    mostrarMenu();
    const opcion = parseInt(prompt("Seleccione una opción:"));
    ejecutarOpcion(opcion);
});