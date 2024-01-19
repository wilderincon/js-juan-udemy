const producto = 'Monitor 20 pulgadas';


//.replace para remplazar
console.log(producto);
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));

//.slice para recortar
console.log(producto.slice(0, 5));
console.log(producto.slice(8));
console.log(producto.slice(8, 9));

//.Alternativa a slice, substring
console.log(producto.substring(0, 5));
console.log(producto.substring(5, 0 ));

const user = 'Wilder';
console.log(user.substring(0,1));
console.log(user.charAt(0));


