const alunos = [
  {nome: "Carlos", idade: 18, nota1: 10, nota2: 9},
  {nome: "Julia", idade: 28, nota1: 5, nota2: 8},
  {nome: "Pedro", idade: 19, nota1: 8, nota2: 7},
  {nome: "Aline", idade: 25, nota1: 6, nota2: 8},
  {nome: "Joana", idade: 32, nota1: 3, nota2: 10},
  {nome: "Maisa", idade: 30, nota1: 9, nota2: 6}
];

/*
  Para cada aluno, obter a média e exibir uma mensagem de aprovado (média maior ou igual a 7) ou reprovado (média menos que 7).
  Ex: "Fulano obteve média 6,5 e, portanto, está reprovado na disciplina."
*/

for (const { nome, nota1, nota2 } of alunos) {
  const media = calcularMedia([nota1, nota2]);
  // const media = calcularMedia(Array.of(nota1, nota2));
  exibirResultado(nome, media);
}

function calcularMedia(notas) {
  let somaNotas = 0;
  notas.forEach(nota => {
    somaNotas += nota;
  });
  return (somaNotas) / notas.length;
}

function exibirResultado(nome, media) {
  if (media >= 7) {
    console.log(`${nome} obteve média ${media} e, portanto, está aprovado na disciplina.`);
  } else {
    console.log(`${nome} obteve média ${media} e, portanto, está reprovado na disciplina.`);
  }
}

