'use strict'

var mundo = 'hola mundo';
prompt('Ingresa su nombre', 'Eje: Pedro') // solicitar info al usuario
confirm('confirma el nombre') // alerta de confimación
alert('Ocurrio un error') // alertar al usuario
console.log('Maximo valor entero: ', Number.MAX_VALUE);
console.log('Maximo valor entero: ', Number.MAX_VALUE);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NaN);
console.log(typeof mundo);
var numero = 10000;
console.log(parseInt(numero));
console.log(Number.parseFloat(numero));
console.log(isNaN(numero));
console.log(Number.isInteger(numero));
console.log('exponencial', numero.toExponential(2));
console.log('decimales', numero.toFixed(2));
console.log('toPrecision', numero.toPrecision(6));

/********
 * creando variables de texto
 */
var pais = 'Colombia';
var comida = new String('Ceviche');

/**
 * Medir cadenas de texto
 */

var mensaje = 'a';
console.log(mensaje.length);

/**
 * metodos de busqueda
 */

var mensaje1 = 'Estoy aprendiendo javascript aprendiendo mucho APRENDIENDO';
console.log(mensaje1.indexOf('aprendiendo'));

console.log('Encuentra la ultima: ', mensaje1.lastIndexOf('aprendiendo'));
console.log(mensaje1.search(/ap/));

console.log('mensaje encontrado: ', mensaje1.match(/aprendiendo/gi));

console.log(mensaje1.repeat(5));
mensaje1 = '             estoy programando        DDD    ';
console.log(mensaje1.trim());

/**
 * metodos de transformación de textos
 */
console.log(mensaje1.toLowerCase());
console.log(mensaje1.toUpperCase());
console.log(mensaje1.concat('estes es un nuevo mensaje'));

/**
 * Plantillas y literales
 */

var lenguaje = 'JavaScript';
var lenguaje2 = 'HTML';
mensaje = `Estoy aprendiendo ${lenguaje}`;
console.log(mensaje);

/**
 * Arreglos 
 */
var platillos = ['ceviche', 'tacos', 'papas'];
console.log(platillos);
var primerElemento = platillos.pop();
console.log(primerElemento);
var bebidas = ['gaseosa', 'limonada', 'jugo naranja'];
var match = [platillos, bebidas];
console.log(match[0][1]);
console.log(platillos.join(','));

var resultPlatillo = platillos.map(platillo => platillos);
console.log(resultPlatillo);

/**
 * Ordenamiento de arrays
 */

platillos.sort(); //ordena ascendente mente 

console.log(platillos);

platillos.reverse(); // ordena descendente mente

console.log(platillos);

/**
 * desestructuración de arreglos
 */

// var platillo1 = null;
// var platillo2 = null;
// var platillo3 = null;

var platillos1 = ['ceviche', 'tacos', 'papas'];

var [platillo1, platillo2, platillo3] = platillos1;

console.log('Valor de los platillos:  ', platillo1);



