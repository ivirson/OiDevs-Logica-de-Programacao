---
marp: true
---

# Aula 03

## Métodos de Array

- _Array.from()_ - é utilizado quando desejamos criar um array a partir de um objeto que não é um array.

- _Array.isArray()_ - retorna true se um objeto é uma array, e false se não é.

- _Array.of()_ - cria um nova instância de array com um número variável de argumentos, independentemente do número ou do tipo dos argumentos.

---

## Instâncias de Array

- _at()_ - recebe um valor inteiro e retorna o item referente ao index dele, permitindo valores positivos ou negativos. Valores negativos contam apartir do último item do array.

- _concat()_ - retorna um novo array contendo todos os arrays ou valores passados como parâmetro.

- _every()_ - testa se todos os elementos do array passam pelo teste implementado pela função fornecida. Este método retorna um valor booleano.

- _filter()_ - cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

---

- _find()_ - retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. Caso contrario, undefined é retornado.

- _findIndex()_ - retorna o índice no array do primeiro elemento que satisfizer a função de teste provida. Caso contrário, retorna -1, indicando que nenhum elemento passou no teste.

- _forEach()_ - executa uma função fornecida uma vez para cada elemento da matriz.

---

- _includes()_ - determina se um array inclui um determinado valor entre suas entradas, retornando `true` ou `false`, conforme apropriado.

- _map()_ - cria uma nova matriz preenchida com os resultados da chamada de uma função fornecida em cada elemento na matriz de chamada.

- _reduce()_ - executa uma função de retorno de chamada "redutor" fornecida pelo usuário em cada elemento da matriz, em ordem, passando o valor de retorno do cálculo no elemento anterior. O resultado final da execução do redutor em todos os elementos da matriz é um valor único.

---

- _reverse()_ - inverte uma matriz no lugar e retorna a referência à mesma matriz, o primeiro elemento da matriz agora se tornando o último e o último elemento da matriz se tornando o primeiro. Em outras palavras, a ordem dos elementos no array será voltada para a direção oposta à indicada anteriormente.

- _some()_ - testa se pelo menos um elemento na matriz passa no teste implementado pela função fornecida. Retorna true se, no array, encontrar um elemento para o qual a função fornecida retorna true; caso contrário, retorna falso.

- _sort()_ - ordena os elementos de um array no local e retorna a referência ao mesmo array, agora ordenado.

- _toString()_ - retorna uma string representando a matriz especificada e seus elementos.

## Referencias

- [Laços - Freecodecamp](https://www.freecodecamp.org/portuguese/news/lacos-em-javascript-explicados-lacos-for-while-do-while-e-mais/)
- [Laços - Woliveiras](https://woliveiras.com.br/posts/la%C3%A7os-de-repeti%C3%A7%C3%A3o-for-for-in-for-of/)

- [Array](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)

- [Javascript Array: aprenda o que é como criar e usar!](https://blog.betrybe.com/javascript/javascript-array/)

- [Array.from()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

- [Array.isArray()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)

- [Array.of()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/of)
