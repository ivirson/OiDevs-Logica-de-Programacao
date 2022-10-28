---
marp: true
---

# Try Catch

As declarações **try...catch** marcam um bloco de declarações para testar **(try)**, e especifica uma resposta, caso uma exceção seja lançada **(catch)**.
</br>

> "Talk is cleap, show me the code"
    - Torvalds, Linus
---

## Sintaxe 

```js
try {
    // Tente executar esse código
} catch(error) {
    // Se der erro, execute esse código
}
```

---

# Finally

A **finally** é uma cláusula opcional da instrução **try...catch**. O código que você colocar no bloco **finally SEMPRE** será executado, quer o erro ocorra ou não.

</br>

> "Talk is cleap, show me the code"
    - Torvalds, Linus

---

# Sintaxe

```js
try {
    // Tente executar esse código
} catch(error) {
    // Se der erro, execute esse código
} finally {
    //sempre executado
}
```

---
# Observação

Observe que, depois de usar a cláusula finally a cláusula catch torna-se opcional.

```js
try {
    // Tente executar esse código
} finally {
    //sempre executado
}
```

Como o código no finally sempre é executado, ele é o lugar perfeito para colocar o código que libera os recursos

---

# Throw

A instrução throw lança uma exceção definida pelo usuário. A execução da função atual será interrompida (as instruções após o lançamento não serão executadas) e o controle será passado para o primeiro bloco catch na pilha de chamadas.

---

# Tipos de Erros no JS

* Error -> Erro de quando um valor não é do tipo esperado.
* RangeError -> Erro quando o valor não está no conjunto ou intervalo especificado.
* ReferenceError -> Erro quando uma variável não existe.
* SyntaxError -> Erro ao colocar uma sintaxe de forma incorreta.
* TypeError -> representa um erro quando uma operação não pode ser executada, normalmente (mas não exclusivamente) quando um valor não é do tipo esperado.
* URIError -> **Para Pesquisa**
* EvalError -> **Para pesquisa**

---

# Referências

[Try...Catch](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch)

[Try...Catch tratando erros no javascript](https://ricardo-reis.medium.com/try-catch-tratando-erros-no-javascript-91bcce0b93ae)

[Throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)