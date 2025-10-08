// Generamos un número entre 1 y 10 (Ambos incluidos)
let numeroSecreto = Math.floor(Math.random() * 10) + 1;

// Apuntamos a los elementos de html
const input = document.getElementById('guess');
const message = document.getElementById('message');
const checkBtn = document.getElementById('checkBtn');
const resetBtn = document.getElementById('resetBtn');


// Función para comprobar el número
checkBtn.addEventListener('click', () => {

    // Cogemos el número del input 'guess'
    const intento = parseInt(input.value);

    // Comprobamos si el numero es un valor "aceptado"
    if (isNaN(intento) || intento < 1 || intento > 10) {
        message.textContent = "Por favor, introduce un número entre 1 y 10.";
        return;
    }

    // Comprobamos si el número ingresado es igual que el elegido
    if (intento === numeroSecreto) {
        message.textContent = "¡CORRECTO! Adivinaste el número.";
        checkBtn.disabled = true;
        resetBtn.classList.remove('hidden');
    } else if (intento > numeroSecreto) {
        message.textContent = "Demasiado alto, intenta con uno menor.";
    } else {
        message.textContent = "Demasiado bajo, intenta con uno mayor.";
    }

});

// Función para resetear el juego
resetBtn.addEventListener('click', () => {
    numeroSecreto = Math.floor(Math.random() * 10) + 1;
    input.value = "";
    message.textContent = "";
    checkBtn.disabled = false;
    resetBtn.classList.add('hidden');
});
