/* const producto = "Monitor 20";
console.log(producto);
console.log(producto.length);


console.log(producto.indexOf('20'))
if (producto.indexOf('20') >= 0) {
    console.log('Si existe el producto');
} else {
    console.log('No existe el producto');
}

console.log(producto.includes('20'));
if (producto.includes('Pulgadas')) {
    console.log('Si existe el producto');
} else {
    console.log('No existe el producto');
} */

//richard
const producto = 'Monitor 20 Pulgadas';
/* console.log(producto);
console.log(producto.length);
 */
console.log(producto.indexOf('Pulgadas'));
console.time('loop');
if (producto.indexOf('play') >= 0) {
    console.log('Si existe el producto');
} else {
    console.log('No existe el producto');
}
console.timeEnd('loop');
console.time('loop');
if (producto.includes('Pulgadas')) {
    console.log('Si existe el producto');
} else {
    console.log('No existe el producto');
}
console.timeEnd('loop');