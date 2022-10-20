/* 
As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e você foi contratado para desenvolver um script que calculará os reajustes.

Faça um script que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:

    salários até R$ 1500,00 (incluindo) : aumento de 20%
    salários entre R$ 1500,00 e R$ 1700,00 : aumento de 15%
    salários entre R$ 1700,00 e R$ 2000,00 : aumento de 10%
    salários de R$ 2000,00 em diante : aumento de 5% 
    
Após o aumento ser realizado, informe na tela:
    o salário antes do reajuste;
    o percentual de aumento aplicado;
    o valor do aumento;
    o novo salário, após o aumento.
*/

const salarioAtual = 10000;
let percenturalAumento;
let novoSalario;
let aumento;

switch (true) {
  case salarioAtual <= 1500:
    percenturalAumento = 20;
    break;
  case salarioAtual > 1500 && salarioAtual <= 1700:
    percenturalAumento = 15;
    break;

  case salarioAtual > 1700 && salarioAtual <= 2000:
    percenturalAumento = 10;
    break;

  case salarioAtual > 2000:
    percenturalAumento = 5;
    break;
}

aumento = salarioAtual * (percenturalAumento / 100);
novoSalario = salarioAtual + aumento;

console.log("Salário anterior: " + salarioAtual);
console.log("Percentual do aumento: " + percenturalAumento + "%");
console.log(
  "Valor do aumento: " +
    aumento.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
);
console.log(
  "Novo Salário: " +
    novoSalario.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
);
