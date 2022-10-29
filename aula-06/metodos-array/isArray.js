// Arrat.isArray()

const media = (notas = []) => {

  if (!Array.isArray(notas)) {
    throw TypeError("O valor passado não é um array");
  }
  
  let somaNotas = 0;

  notas.forEach(nota => {
    somaNotas += nota;
  });

  return notas.length ? (somaNotas / notas.length) : "Aluno sem notas";
};

try {
  // console.log(media(Array.of(10, 5, 9)));
  // console.log(media(10, 5, 9));
  console.log(media());
} catch (error) {
  console.log(error);
}
