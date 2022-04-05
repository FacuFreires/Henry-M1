'use strict'
// Las funciones nFactoria y nFibonacci deben resolverlas
// usando recursión. Una vez realizadas de esa forma pueden probar hacerlas
// de forma iterativa pero esto último no es obligatorio.

//Toda funcion recursiva tiene un caso base o caso de corte

function nFactorial(n) {
  // devolvé el factorial de n (n!)
  // ej:
  // el factorial de 3 es 6 (3 * 2 * 1)
  if(n === 1 || n === 0) return 1; // Caso base o caso de corte
  if (n < 0) return 0; // caso base o caso de corte

  return n * nFactorial(n-1); // Funcion se invoca a si misma y pasa pila de ejecucion
  // EJEMPLO
  // n! = n * n - 1; -> 4! = 4*3*2*1 -> 4*3! -> esto hace pila de ejecucion 
  //nFactorial(1) -> Aqui devuelve 1 por el caso base -> 1 
  //nFactorial(2) = 2 * nFactorial(1) -> obtengo resultado en la funcion gracias a stack de ejecucion -> 2 * 1 = 2
  //nFactorial(3) = 3 * nFactorial(2) -> obtengo resultado de invocacion anterior -> 3 * 2 = 6
  //nFactorial(4) = 4 * nFactorial(3) -> se hace n - 1 por la funcion -> 4 * 6 = 24
  // RESULTADO -> 24; 
  // hasta que la funcion nFactorial() no sea una valor, no puedo devolver porque la funcion debe ser resuelta
}

//---------------------OTRO EJEMPLO DE RECURSIVIDAD-------------------------------------
//crear una funcion que cambie de decimal a binario usando recursividad
// 40/2 = 20 [0]
// 20/2 = 10 [0]
// 10/2 = 5 [0]
// 5/2 = 2 [1]
// 2/2 = 1 [0]
// 1/2 = 0 [1]

function decimalToBinary(num) {
  if(num === 1) return '1'; // Caso base o de corte
  return decimalToBinary(Math.floor(num/2)) + (num % 2); // uso Math.floor para redondear hacia abajo y tener un entero
}
// Se va resolviendo como pila de ejecucion

// decimalToBinary(1) -> entra a caso base por TRUE -> '1'
// decimalToBinary(2) -> resuelve funcion por tener un resultado -> decimalToBinary(1) + 2%2 -> '1' + 0 -> '10'
// decimalToBinary(5) -> decimalToBinary(2) + 5%2 -> '10' + 1 -> '101'
// decimalToBinary(10) -> decimalToBinary(5) + 10%2 -> '101' + 0 -> '1010' 
// decimalToBinary(20) -> decimalToBinary(10) + 20%2 -> '1010' + 0 -> '10100'
// decimalToBinary(40) -> decimalToBinary(20) + 40%2 -> '10100' + 0 -> '101000'

function nFibonacci(n) {
  // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  // Retorna el enésimo numero de la serie
  // nFibonacci(0) // 0  // el elemento 0 es cero
  // nFibonacci(1) // 1 // el elemento 1 es 1
  // nFibonacci(6) // 1 // el elemento 6 es 8
  // Fibonacci es la suma de los dos anteriores
  // nFibonacci(n) = nFibonacci(n - 1) + nFibonacci(n - 2); Se construye de esta manera
  // nFibonacci(0) = 0; Por resolucion matematica es 0
  // nFibonacci(1) = 1; Por resolucion matematica es 1

  if (n >= 0 && n < 2) { return n; }
  return nFibonacci(n - 1) + nFibonacci(n - 2);
}

// Para esta parte no es necesario utilizar recursión.
// Implementa la clase Queue que debe contener los siguientes métodos:
// enqueue: Agrega un valor a la queue. Respeta el orden existente.
// dequeue: Remueve un valor de la queue. Obedece a FIFO y respeta el underflow (devuelve undefined cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size: Devuelve el número de elementos que contiene la queue.
// class Queue(){} Para crear clase
//

function Queue() {
  this.array = [];

}

Queue.prototype.size = function() {
  return this.array.length;
}

Queue.prototype.enqueue = function(n) {
   this.array.push(n);
}

Queue.prototype.dequeue = function() {
  //if (this.array.length === 0) {return undefined;}
  return this.array.shift(); // Shift devuelve undefined si el arreglo está vacío
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
