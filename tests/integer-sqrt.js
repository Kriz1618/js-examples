const readline = require('readline');

// ============================================
// 1. FUNCIONES DE CÁLCULO
// ============================================

/**
 * Raíz cuadrada entera (redondeada hacia abajo) usando búsqueda binaria
 */
function integerSqrt(n) {
    if (n < 2) return n;

    let left = 2;
    let right = Math.floor(n / 2);
    let result = 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const square = mid * mid;

        if (square === n) return mid;
        else if (square < n) {
            result = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}

/**
 * Raíz cuadrada flotante (con decimales) usando método de Newton-Raphson
 */
function floatSqrt(n, precision = 1e-10) {
    if (n === 0) return 0;

    let guess = n / 2;

    while (Math.abs(guess * guess - n) > precision) {
        guess = (guess + n / guess) / 2;
    }

    return guess;
}

// ============================================
// 2. MENÚ PRINCIPAL (CON READLINE)
// ============================================

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Función para hacer preguntas y obtener respuestas del usuario (promisificada)
 */
function question(prompt) {
    return new Promise((resolve) => {
        rl.question(prompt, (answer) => {
            resolve(answer.trim());
        });
    });
}

/**
 * Función para pausar y esperar que el usuario presione Enter
 */
function waitForEnter() {
    return new Promise((resolve) => {
        rl.question('\nPresiona Enter para continuar...', () => {
            resolve();
        });
    });
}

/**
 * Función principal asíncrona que maneja el menú
 */
async function run() {
    console.log('='.repeat(50));
    console.log('     CALCULADORA DE RAÍCES CUADRADAS');
    console.log('='.repeat(50));
    console.log('Opciones:');
    console.log('  1. Raíz entera (redondeada hacia abajo)');
    console.log('  2. Raíz flotante (con decimales)');
    console.log('  0. Salir');
    console.log('='.repeat(50));

    let running = true;

    while (running) {
        try {
            // Pedir opción
            const opcion = await question('\nElige una opción (0-2): ');

            if (opcion === '0') {
                console.log('¡Hasta luego!');
                running = false;
                break;
            }

            if (opcion !== '1' && opcion !== '2') {
                console.log('❌ Opción inválida. Elige 0, 1 o 2.');
                continue;
            }

            // Pedir número
            const entrada = await question('Ingresa un número entero positivo: ');

            if (entrada === '') {
                console.log('❌ No ingresaste nada. Intenta de nuevo.');
                continue;
            }

            const numero = parseInt(entrada, 10);

            if (isNaN(numero)) {
                console.log('❌ Error: Debes ingresar un número entero válido.');
                continue;
            }

            if (numero < 0) {
                console.log('❌ El número debe ser no negativo.');
                continue;
            }

            // Ejecutar la función elegida
            let resultado;
            if (opcion === '1') {
                resultado = integerSqrt(numero);
                console.log(`✅ Raíz entera de ${numero} es: ${resultado}`);
            } else {
                resultado = floatSqrt(numero);
                console.log(`✅ Raíz flotante de ${numero} es: ${resultado.toFixed(10)}`);
            }

            // Esperar a que el usuario presione Enter para continuar
            await waitForEnter();

        } catch (error) {
            console.error(`❌ Error inesperado: ${error.message}`);
        }
    }

    rl.close();
}

// ============================================
// 3. EJECUTAR EL PROGRAMA
// ============================================

// run().catch((error) => {
//     console.error('Error fatal:', error);
//     rl.close();
//     process.exit(1);
// });

module.exports = { run };
