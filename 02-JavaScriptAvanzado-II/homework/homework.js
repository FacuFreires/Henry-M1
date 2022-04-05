'use strict'
// Closures: Poder retornar una funcion dentro de otra, de forma tal que esta nueva funcion pueda tener acceso 
//a las variables que haya dejado su funcion creadora

function counter() {
  // Retorna una funcion que cuando sea invocada retorne un valor creciente.
  // el primer valor deberia ser 1.
  // Vas a tener que usar closures.
  // ejemplo: const newCounter = counter(); // se genera contexto de ejecucion pero las variables quedan en memoria 
  // newCounter(); // 1
  // newCounter(); // 2
  var count = 1; // 
  return function (){ // esta funcion va a ser asignada a newCounter -> además tiene acceso a las var que dejó counter()
    return count++; // 
  }
}
// EXPLICACION PASO A PASO
//newCounter = counter(); // -> function() {return count++;}
//generando espacio en memoria para count = 1 -> se destruye contexto pero queda count = 1 en memoria
//newCounter(); // se va a ejecutar la funcion -> retorna valor count -> count++
//newCounter(); // se fija en lexical environment si existe count -> count = 2 -> count++

//newCounter2 = counter(); // NUEVO CONTEXTO DE EJECUCION -> NUEVA VARIABLE COUNT -> COUNT = 1
// VOY A TENER DOS VARIABLES COUNT PERO QUE SE ASOCIAN A UNA VARIABLE DISTINTA

// ---ALTERNATIVA---
/*
var count = 0;
return function (){
  count = count + 1;
  return count;
}
*/

function cacheFunction(cb) {
  // Usa closures para crear un caché para la función cb.
  // la función que retornas debe aceptar un solo argumento e invocar a cb con ese argumento
  // cuando la función que hayas retornado es invocada de nuevo, debería guardar el argumento y el resultado de la invocacion
  // cuando la función que retornaste sea invocada de nuevo con un argumento con el cual se había invocado anterioremente, no deberia invocar de nuevo a cb
  // debería retornar el resultado (previamente guardado)
  // Ejemplo:
  // cb -> function(x) { return x * x; }
  // si invocas la function que retornaste con 5, adentro deberia invocar cb(5) y retornar 25.
  // si la invocas de nuevo con 5, deberia retornar 25 (guardado previament en el cache)
  // Tips, usá un objeto donde cada propiedad sea un argumento, y el valor el resultado.
  // usá hasOwnProperty!
  // ---DESARROLLO DEL ENUNCIADO---
  //cb es una funcion! la puedo invocar!
  //return function (x) { return cb(x);}
  // cuando la función que retornaste sea invocada de nuevo con un argumento con el cual se había invocado anterioremente, no deberia invocar de nuevo a cb
  // Es decir, function cb(x) { return x * 2;} -> x = 2 -> return 2 * 2 = 4 ;
  // x = 3 -> return 3 * 2 = 6;
  // x = 2 -> si vuelvo a tener x = 2 -> No volver a hacer la cuenta -> Sino que tenga almacenado ese resultado -> 4
  // esperamos hacer una funcion que reciba por parametro otra funcion y que sea la encargada de ejecutar una accion
  // la idea es que cada vez que invoque la funcion con un numero distinto, se pueda verificar si no se ejecutó anteriormente con ese numero
  //Si se ejecutó, no espero que la vuelva a ejecutar, si no se ejecutó, que la almacene para un futuro chequeo

  //var cache = {x: resultado, x1: resultado, x2: resultado} -> Guardo en un objeto vacío para preguntar si ya se guardó el resultado y así no volver a ejecutar la funcion cb(x)
  var cache = {};
  return function (x) {
    if (cache.hasOwnProperty(x)) { // primero preguntamos a cache si tiene esa propiedad 
      return cache[x]; //Bracket notation -> Va y busca donde se encuentra esa propiedad en particular 
    } else {
      cache[x] = cb(x); // guardo el resultado en el obj ->
      return cache[x]; // retorna el resultado guardado
    }
  }
  
}

/*---EXPLICACION BRACKETS NOTATION---
var cache = {};
arg: 'hola';
cache.arg ? -> no puedo encontrar cual es el valor que va a estar dentro -> se usa cuando quiera encontrar literales
cache[arg] -> tomo arg como un valor que estoy buscando -> se fija si la propiedad 'hola' existe ->
*/

 /* var cache = {};
    return function (a) {
      if (cache.hasOwnProperty(a)) return cache[a];
      cache[a] = cb(a);
      return cache[a];
  }*/

// Bind

var instructor = {
  nombre: "Franco",
  edad: 25
}

var alumno = {
  nombre: "Juan",
  curso: "FullStack"
}

function getNombre(){
  return this.nombre;
}
 // Escribir código, sin modificar lo que ya se encuentra escrito arriba, para poder llamar al método getNombre para obtener primero el nombre del instructor y luego para obtener el nombre del alumno.
// Modificar los undefined por el código correspondiente en cada caso
// Pista, tenes que bindear el this!
let getNombreInstructor = undefined;
let getNombreAlumno = undefined;

//
/*Guardar en las siguientes tres variables una función que devuelva una cadena utilizando la función "crearCadena"
y el delimitador especificado. La idea es realizarlo con la función bind para poder volver a utilizarlo múltiples veces luego:

1. textoAsteriscos
2. textoGuiones
3. textoUnderscore

Esto nos va a permitir llamar por ejemplo al método "textoAsteriscos" únicamente pasándole un argumento en vez de los tres que recibe "crearCadena"
*/
function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena){
    return delimitadorIzquierda + cadena + delimitadorDerecha;
}

// Modificar los undefined por el código correspondiente en cada caso
// Pista, tenes que usar bind para "bindear" algunos parámetros de la función crearCadena.

let textoAsteriscos = undefined;

let textoGuiones = undefined;

let textoUnderscore = undefined;



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
  getNombreInstructor,
  getNombreAlumno,
  textoAsteriscos,
  textoGuiones,
  textoUnderscore,
};
