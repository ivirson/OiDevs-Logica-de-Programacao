/*
  Seja n o enésimo termo da sequência de Fibonacci, ele é calculado como:
  
  F(n) = F(n-1) + F(n-2)

  Ou seja, cada elemento da sequência é a soma dos dois anteriores, onde:
  
  F(1) = 0
  F(2) = 1

  Crie um script que pede ao usuário um termo qualquer da série de Fibonacci e ele exiba tal termo.

*/

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 

const fibonacci = (posicao) => {
  let penultimo = 0;
  let ultimo = 1;
  let numero = 0;

  if (posicao === 1) {
    numero = 1;
  }

  for (let i = 1; i < posicao; i++) {
    numero = penultimo + ultimo;
    penultimo = ultimo;
    ultimo = numero;
  }

  return numero;
};

const posicao = 1000;
console.log(fibonacci(posicao));

// for (let i = 0; i < posicao; i++) {
//   console.log(fibonacci(i));
// }