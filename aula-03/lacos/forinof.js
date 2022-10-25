const alunos = [
    {nome: "Carlos", idade: 18, email: "email@email.com"},
    {nome: "Julia", idade: 28, email: "email@email.com"},
    {nome: "Pedro", idade: 19, email: "email@email.com"},
    {nome: "Aline", idade: 25, email: "email@email.com"},
    {nome: "Joana", idade: 32, email: "email@email.com"},
    {nome: "Maisa", idade: 30, email: "email@email.com"}
];

//COM ALIAS
// for(const {nome: n, idade: i} of alunos) {
//     console.log(`O Aluno ${n} tem ${i}`);
// }

//SEM ALIAS
// for(const {nome, idade} of alunos) {
//     console.log(`O Aluno ${n} tem ${i}`);
// }

// for(const aluno of alunos) {
//     console.log(`O Aluno ${aluno.nome} tem ${aluno.idade}`);
// }

// for(const aluno in alunos) {
//     console.log(`O Aluno ${alunos[aluno].nome} tem ${alunos[aluno].idade}`);
// }

//EXERCICIO
//Você é um professor, e tem uma lista com alguns alunos(sendo objetos),
//onde as tem-se, nome, nota 1 e nota2. Use o for para percorer esse array
//e calcular a média das duas notas de cada aluno

//RESOLUÇÃO 1
// var alunos = [
//     {nome: "João", nota1: 10, nota2: 7},
//     {nome: "maria", nota1: 10, nota2: 9},
//     {nome: "joana", nota1: 10, nota2: 10},
//     {nome: "pedro", nota1: 5, nota2: 7},
//     {nome: "marta", nota1: 6, nota2: 10}
// ]

// for (aluno in alunos) {
//    console.log(
//     `
//      Aluno(a): ${alunos[aluno].nome} |--| 
//      Média: ${(alunos[aluno].nota1 + alunos[aluno].nota2)/2}
//      ` 
//    );
// }

//RESOLUÇÃO 2
// for (aluno of alunos) {
//     console.log(
//     `Aluno(a): ${aluno.nome} |--| 
//         Média: ${(aluno.nota1 + aluno.nota2)/2}` 
//     );
// }