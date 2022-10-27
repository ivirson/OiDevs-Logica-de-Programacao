function exibirResultado(result) {
  console.log(result);
}

function exibirResultadoFormatado(result) {
  console.log(`O resultado é: ${result}`);
}

function multiplicar(a, b, callback) {
  callback(a * b);
}

const dividir = (a, b, callback) => callback(a / b);

// multiplicar(5, 3, exibirResultado);
multiplicar(5, 3, exibirResultadoFormatado);
dividir(5, 3, exibirResultadoFormatado);
// dividir(5, 3, (resultado) => console.log(resultado))
// [1, 2].forEach(element => console.log(element))
[1, 2].forEach(exibirResultadoFormatado)




// const statusLogado = (nome) => {
//   return `${nome} logou com sucesso no sistema!`;
// }

// const usuarioLogin = (nome) => {
//   return statusLogado(nome);
// }

// const login = usuarioLogin("Ivirson");
// console.log(login);