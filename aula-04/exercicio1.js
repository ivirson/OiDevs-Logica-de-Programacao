/*
  Faça um programa que recebe três números do usuário, e identifica o maior através de uma função e o menor número através de outra função.
*/

// const array = [12, 78, 17, 2, 100];

// function menorValor (valor1, valor2, valor3){
//   return Math.min(valor1, valor2, valor3)
// }

// console.log(menorValor(array[0], array[1], array[2]));
// console.log(menorValor(12, 78, 17));

// function maiorValor (valor1, valor2, valor3){
//   return Math.max(valor1, valor2, valor3)
// }

// console.log(maiorValor(...array));
// console.log(maiorValor(12, 78, 17));

const array = [12, 78, 17, 2, 100];

function menorValor (numeros){
  return Math.min(...numeros)
}

console.log(menorValor(array));

function maiorValor (numeros){
  return Math.max(...numeros)
}