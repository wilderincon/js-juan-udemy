const numero1 = 30;
const numero2 = 20;

let resultado;


//suma
resultado = numero1 + numero2;
//resta
resultado = numero1 - numero2;
//multiplicacion
resultado = numero1 * numero2;
//Divicion
resultado = numero1 / numero2;
//modulo
resultado = numero1 % numero2;

console.log(resultado);

const valorIngresado =  prompt('¿Ingresa un número4?');
if ((valorIngresado % 3) === 0) {
    console.log('Es par');
} else {
    console.log('Es impar');
}
