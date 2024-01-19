const producto = '       Monitor 20 pulgadas               ';

console.log(producto);
console.log(producto.length);
//Eliminar al inicio
console.log(producto.trimStart());
//Eliminar final
console.log(producto.trimEnd());
//Eliminar inicio, final
console.log(producto.trimStart().trimEnd());
//Elimina al final y al inicio
console.log(producto.trim());

