// Utilizando uma função anônima
// const somar = function (a, b) {
//   return a + b;
// };

// função nomeada
// function somar(a, b) {
//   return a + b;
// };


// arrow function
// const somar = (a, b) => {
//   const pi = Math.PI;
//   console.log("arrow", this);
//   return a + b;
// };

// const somar2 = function (a, b) {
//   console.log("tradicional", this);
//   return a + b;
// };

// console.log(somar(1, 2));
// console.log(somar(3, 45));
// console.log(somar(3, 6));
// console.log(somar2(5, 7));

const saudar = (nomeCompleto) => console.log(`Olá, ${nomeCompleto}`)
const despedir = (nomeCompleto) => console.log(`Tchau, ${nomeCompleto}`)

const minhaFuncao = (nome, sobrenome, callback) => {
  const nomeCompleto = `${nome} ${sobrenome}`;
  callback(nomeCompleto);
}

minhaFuncao("Ivirson", "Daltro", saudar);
minhaFuncao("Ivirson", "Daltro", despedir);

