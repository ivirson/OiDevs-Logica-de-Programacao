const somar = (a, b) => a + b;

let saldo = 2500;
let saldoPoupanca = 20000;
let saldoAplicacoes = 50000;

const sacar = (valor) => {
  saldo -= valor;
  return getSaldo();
};

const getSaldo = () => saldo + saldoPoupanca + saldoAplicacoes;

console.log(somar(5, 80));
console.log(sacar(1000));