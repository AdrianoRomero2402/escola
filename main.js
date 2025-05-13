// Solicitar al usuario ingresar una velocidad en m/s
let velocidadMs = prompt("Ingrese la velocidad en metros por segundo (m/s):");

// Convertir a número y calcular la velocidad en kilómetros por segundo (k/s)
if (!isNaN(velocidadMs) && velocidadMs !== null && velocidadMs.trim() !== "") {
    let velocidadKs = velocidadMs / 1000;
    alert(`La velocidad convertida es: ${velocidadKs} k/s`);
} else {
    alert("Por favor, ingrese un valor numérico válido.");
}
