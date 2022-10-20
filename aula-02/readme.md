# Aula 02

## Condicionais

### If / else

```js
if (condicao) {
  codigo para executar caso a condição seja verdadeira
} else {
  senão, executar este código
}
```

### Operadores de comparação

- === e !== — testar se um valor é idêntico ou não idêntico a outro.
- < e > — teste se um valor é menor ou maior que outro.
- <= e >= — testar se um valor é menor ou igual a, ou maior que ou igual a outro.

### Operadores lógicos: AND, OR e NOT

- && — AND permite encadear duas ou mais expressões para que todas elas tenham que ser avaliadas individualmente como true assim toda a expressão retorna true.
- || — OR permite encadear duas ou mais expressões para que uma ou mais delas tenham que ser avaliadas individualmente como true assim toda a expressão retorna true.
- ! - NOT usado para negar uma expressão.

### Operador ternário

```js
if (condition) {
  run this code
} else {
  run this code instead
}

if (condition) run this code else run this code instead

(condition) ? run this code : run this code instead
```

### Switch

```js
switch (expression) {
  case choice1:
    run this code
    break;

  case choice2:
    run this code instead
    break;

  // include as many cases as you like

  default:
    actually, just run this code
}
```

### Operadores de Coalescência nula (??)

Inicialmente, quando se deseja endereçar um valor padrão à variável, um padrão comum é utilizar o operador lógico OR (||). Porém, essa abordagem pode não atender à necessidade se, por exemplo, você desejar tratar um valor falseável (`""`, `0`, `NaN`) como um valor válido.

```js
let user;
// let user = "";
// let user = "João";
let username = user || "Usuário sem nome";
console.log("username ||:", username);
username = user ?? "Usuário sem nome";
console.log("username ??:", username);
```

## Vetores e matrizes

O objeto Array do JavaScript é um **objeto** global usado na construção de 'arrays' (vetores): objetos de alto nível semelhantes a listas.

## Links úteis

- [Tomando decisões no seu código — condicionais](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/conditionals)

- [Operador de coalescência nula](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)

- [Entenda o operador de coalescência nula (??) – JavaScript](https://blog.cod3r.com.br/entenda-operador-de-coalescencia-nula-javascript/)

- [Array](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)

- [Javascript Array: aprenda o que é como criar e usar!](https://blog.betrybe.com/javascript/javascript-array/)

- [Array.from()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

- [Array.isArray()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)

- [Array.of()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/of)
