let nivelTanque = 0;
let nivelMaximo = 100;

function llenarTanque(cantidad) {
    nivelTanque += cantidad;
    if (nivelTanque > nivelMaximo) {
        nivelTanque = nivelMaximo;
    }
    console.log(`Nivel de tanque: ${nivelTanque}`);
}

function vaciarTanque(cantidad) {
    nivelTanque -= cantidad;
    if (nivelTanque < 0) {
        nivelTanque = 0;
    }
    console.log(`Nivel de tanque: ${nivelTanque}`);
}

function mostrarNivelTanque() {
    console.log(`Nivel actual del tanque: ${nivelTanque}`);
}

function reiniciarTanque() {
    nivelTanque = 0;
    console.log(`Tanque reiniciado. Nivel actual: ${nivelTanque}`);
}

function ajustarNivelTanque(nuevoNivel) {
    if (nuevoNivel < 0 || nuevoNivel > nivelMaximo) {
        console.log("Nivel fuera de rango. Debe estar entre 0 y 100.");
        return;
    }
    nivelTanque = nuevoNivel;
    console.log(`Nivel ajustado del tanque: ${nivelTanque}`);
}   

function mostrarMenu() {
    console.log("1. Llenar tanque");
    console.log("2. Vaciar tanque");
    console.log("3. Mostrar nivel de tanque");
    console.log("4. Reiniciar tanque");
    console.log("5. Ajustar nivel de tanque");
    console.log("6. Salir");
}

function ejecutarOpcion(opcion) {
    switch (opcion) {
        case 1:
            llenarTanque(10);
            break;
        case 2:
            vaciarTanque(10);
            break;
        case 3:
            mostrarNivelTanque();
            break;
        case 4:
            reiniciarTanque();
            break;
        case 5:
            ajustarNivelTanque(50);
            break;
        case 6:
            console.log("Saliendo...");
            break;
        default:
            console.log("Opción no válida.");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarMenu();
    const opcion = parseInt(prompt("Seleccione una opción:"));
    ejecutarOpcion(opcion);
});  