/*
  Crie um script que faça o mesmo do exercício anterior, desta vez usando a recursividade.
*/

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 

const fibonacci = (posicao) => {
  let numero = 0;

  if (posicao === 2) {
    numero = 1;
  } else if (posicao > 2){
    numero = fibonacci(posicao - 1) + fibonacci(posicao - 2);
  }

  return numero;
};

const posicao = 10;
// console.log(fibonacci(posicao));

let result = [];
for (let i = 1; i <= posicao; i++) {
  result.push(fibonacci(i));
}
console.log(result.join());