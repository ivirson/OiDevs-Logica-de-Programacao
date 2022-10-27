const numero = 5;

const somaRecursiva = (numero) => {
  if (numero === 0) {
    return 0;
  }
  return numero + somaRecursiva(numero - 1);
};

const somaRecursivaUsandoLaco = (numero) => {
  let result = 0;

  while (numero > 0) {
    result += numero;
    numero--;
  }

  return result;
};

console.log(somaRecursiva(numero))
console.log(somaRecursivaUsandoLaco(numero))