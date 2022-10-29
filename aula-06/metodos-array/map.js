// const numbers = [ 1, 2, 3, 5, 10, 20 ];

// const doubleNumbers = numbers.map((item) => {
//   return item < 10 ? item * 2 : item;
// });

// console.log(numbers);
// console.log(doubleNumbers);

const alunos = [
  { nome: "Fulano", sobrenome: "de Tal", idade: 25 },
  { nome: "Menino", sobrenome: "Ney", idade: 25 },
  { nome: "Jose", sobrenome: "de Num sei das quantas", idade: 25 },
  { nome: "Maria", sobrenome: "filha de seu Antonio", idade: 25 }
];

const lista = alunos.map(aluno => {
  const nomeCompleto = `${aluno.nome} ${aluno.sobrenome}`;
  return {
    nomeCompleto,
    idade: aluno.idade
  };
});

console.log(lista);