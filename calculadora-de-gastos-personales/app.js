let transacciones = JSON.parse(localStorage.getItem("transacciones")) || [];

const lista = document.getElementById("lista-transacciones");
const formulario = document.getElementById("formulario");
const descripcion = document.getElementById("descripcion");
const monto = document.getElementById("monto");
const tipo = document.getElementById("tipo");
const saldo = document.getElementById("saldo");
const ingresos = document.getElementById("ingresos");
const gastos = document.getElementById("gastos");
const inversiones = document.getElementById("inversiones");

function actualizarResumen() {
    const ingresosTotales = transacciones
        .filter(t => t.tipo === "ingreso")
        .reduce((acc, t) => acc + t.monto, 0);

    const gastosTotales = transacciones
        .filter(t => t.tipo === "gasto")
        .reduce((acc, t) => acc + t.monto, 0);

    const inversionesTotales = transacciones
        .filter(t => t.tipo === "inversion")
        .reduce((acc, t) => acc + t.monto, 0);

    const saldoTotal = ingresosTotales - gastosTotales + inversionesTotales;

    saldo.textContent = `$${saldoTotal}`;
    ingresos.textContent = `$${ingresosTotales}`;
    gastos.textContent = `$${gastosTotales}`;
    inversiones.textContent = `$${inversionesTotales}`;
}

function renderTransacciones() {
    lista.innerHTML = "";
    transacciones.forEach((t, i) => {
        const li = document.createElement("li");
        li.classList.add(t.tipo);
        li.textContent = `${t.descripcion}: $${t.monto}`;
        li.onclick = () => eliminarTransaccion(i);
        lista.appendChild(li);
    });
}

function eliminarTransaccion(index) {
    transacciones.splice(index, 1);
    guardarYActualizar();
}

function guardarYActualizar() {
    localStorage.setItem("transacciones", JSON.stringify(transacciones));
    actualizarResumen();
    renderTransacciones();
}

formulario.onsubmit = function (e) {
    e.preventDefault();
    const desc = descripcion.value.trim();
    const montoValor = Number(monto.value);

    if (desc.length < 2) {
        alert("La descripción debe tener al menos 2 caracteres.");
        return;
    }
    if (isNaN(montoValor) || montoValor <= 0) {
        alert("El monto debe ser un número positivo.");
        return;
    }

    const nueva = {
        descripcion: desc,
        monto: montoValor,
        tipo: tipo.value
    };
    transacciones.push(nueva);
    descripcion.value = "";
    monto.value = "";
    guardarYActualizar();
};

guardarYActualizar();
