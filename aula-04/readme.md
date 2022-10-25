---
marp: true
---

# Aula 04 - Funções

## O que são?

Funções são blocos de construção fundamentais em JavaScript. Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor.

---

# Aula 04 - Funções

## Sintaxe

```js
function nomeDaFuncao(parametro) {
  // código que será executado
  const algo = "algo";
  return algo; // retorno da função
}
```

---

# Aula 04 - Funções

## Parâmetros

Parâmetro é o nome que se dá para a variável que nós declaramos na definição de uma função.

```js
function somar(a, b) {
  return a + b;
}
```

---

# Aula 04 - Funções

## Valores de retorno

Valores de retorno são exatamente como soam — valores retornados pela função quando são concluídos.
É possível criar funções sem um retorno específico, para esses casos, a função retornará um valor padrão, o `undefined`.

```js
function somar(a, b) {
  return a + b;
}
```

---

# Aula 04 - Funções

## Cidadãs de primeira classe

_First-class Citizen_: Cidadão de Primeira Classe em uma linguagem de programação é uma entidade que suporta todas as operações, geralmente disponíveis para outras entidades. Podemos tratar funções como valores, e armazená-las em variáveis e constantes, passar funções como parâmetros em outras funções e até ter funções como retorno de outras funções.

Então...

Let's code!

---

# Aula 04 - Arrow Functions

## Definição

Uma expressão de função de seta é uma alternativa compacta a uma expressão de função tradicional , mas é limitada e não pode ser usada em todas as situações.

---

# Aula 04 - Arrow Functions

## Decompondo uma função tradicional até uma arrow function simples

```js
// Função anônima tradicional
(function (a) {
  return a + 100;
});

// 1. Removemos a palavra-chave "function" e colocar a "seta" entre o argumento e a abertura do bloco de código
(a) => {
  return a + 100;
};
// 2. Remover as chaves do bloco de código e a palavra-chave "return"
(a) => a + 100;
// 3. Remover os parênteses do argumento
a => a + 100;
```

---

# Aula 04 - Arrow Functions

## Sintaxe

```js
(param) => expression;
```

ou

```js
(param1, paramN) => {
  // Do something
  return param1 + paramN;
};
```

---

# Aula 04 - Funções

## Links úteis

- [Funções](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions)

- [Template strings](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals)

- [Como o Javascript funciona: entendendo as funções e suas formas de uso](https://medium.com/reactbrasil/como-o-javascript-funciona-entendendo-as-fun%C3%A7%C3%B5es-e-suas-formas-de-uso-eb387c7fa138)

- [Valores de retorno de função](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Return_values)

- [Cidadão de primeira classe](https://pt.wikipedia.org/wiki/Cidad%C3%A3o_de_primeira_classe)

- [Funções de Primeira Classe](https://hcode.com.br/blog/prog-funcional-funcao-primeira-classe)

- [Expressões de função de seta](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

- [Spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
