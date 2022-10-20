const diaClaro = false;
const tenhoDinheiro = false;

// if (diaClaro && tenhoDinheiro) {
//   console.log("Obaa!! Vou para a praia.");
// } else {
//   console.log("Deu ruim!! Hoje não tem praia.");
// }

// if (diaClaro || tenhoDinheiro) {
//   console.log("Obaa!! Vou para a praia.");
// } else {
//   console.log("Deu ruim!! Hoje não tem praia.");
// }

if (!diaClaro) {
  // console.log("Hoje eu fico em casa.");
}

const idade = "18";

// if (idade >= 18) {
//   console.log("Usuário é maior de idade");
// } else {
//   console.log("Usuário não é maior de idade");
// }

// if (idade == 18) {
//   console.log("Legal! Você acabou de atingir a maior idade");
// }

// Convertendo string para number
let soma = idade + 35; // 1835
// soma = parseInt(idade) + 35; // 53
// soma = Number(idade) + 35;
soma = +idade + 35;
// console.log(soma);

let subtracao = idade - 5;
// console.log(subtracao);

let multiplicacao = idade * 2;
// console.log(multiplicacao);

// Convertendo number para string
let number = 1000;
// console.log(typeof number);
// number = "" + 1000;
number = number.toString();
// console.log(typeof number);

// Switch
const diaDaSemana = 10;

// switch (diaDaSemana) {
//   case 0:
//     console.log("Domingo");
//     break;
//   case 1:
//     console.log("Segunda-feira");
//     break;
//   case 2:
//     console.log("Terça-feira");
//     break;
//   case 3:
//     console.log("Quarta-feira");
//     break;
//   case 4:
//     console.log("Quinta-feira");
//     break;
//   case 5:
//     console.log("Sexta-feira");
//     break;
//   case 6:
//     console.log("Sábado");
//     break;
//   default:
//     console.log("Não é um dia da semana!");
//     break;
// }

// Operador ternário
// if (diaClaro && tenhoDinheiro) {
//   console.log("Obaa!! Vou para a praia.");
// } else {
//   console.log("Deu ruim!! Hoje não tem praia.");
// }

if (diaClaro && tenhoDinheiro) console.log("Obaa!! Vou para a praia.");

// diaClaro && tenhoDinheiro
//   ? console.log("Obaa!! Vou para a praia.")
//   : console.log("Deu ruim!! Hoje não tem praia.");

// Coalescencia
let user;
user = "";
user = "João";
let username = user || "Usuário sem nome";
// console.log("username ||:", username);
// username = user ?? "Usuário sem nome";
// console.log("username ??:", username);

let saldo = 0;
// console.log(saldo || "Houve um erro");
console.log(saldo ?? "Houve um erro");
console.log(saldo ? saldo : "Houve um erro"); // Traria o mesmo resultado, utilizando o operador ternário
