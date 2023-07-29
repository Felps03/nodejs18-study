# Node.js 18 New Features Case Study

Este é um caso de estudo que demonstra algumas das novas funcionalidades do Node.js 18. O projeto consiste em quatro arquivos: `events.js`, `index.js`, `math.js` e `test.js`. Cada um desses arquivos serve para ilustrar diferentes recursos do Node.js 18. Abaixo estão detalhadas as funcionalidades e a finalidade de cada arquivo.

## Arquivo `events.js`

Este arquivo demonstra o uso do módulo `EventEmitter`, que é um recurso padrão do Node.js para trabalhar com eventos assíncronos. Neste caso, um evento chamado "start" é criado, e quando esse evento é acionado, uma mensagem é exibida no console com os valores passados como argumentos.

```javascript
const { EventEmitter } = require("node:events");

const eventEmitter = new EventEmitter();

eventEmitter.on("start", (start, end) =>
  console.log(`started from ${start} to ${end}`)
);

eventEmitter.emit("start", 1, 100);
```

## Arquivo `index.js`

Neste arquivo, é apresentado o uso das Promises e do `async/await` para realizar uma solicitação HTTP para a API do Node.js e imprimir os dados retornados.

```javascript
(async () => {
  const res = await fetch("https://nodejs.org/api/documentation.json");
  if (res.ok) {
    const data = await res.json();
    console.log(data);
  }
})();
```

## Arquivo `math.js`

Aqui é definida uma função simples que realiza a soma de dois números. Este arquivo será importado e utilizado no arquivo `test.js`.

```javascript
const sum = (a, b) => a + b;

module.exports = sum;
```

## Arquivo `test.js`

Neste arquivo, é apresentado o uso do módulo de teste "node:test" para testar a função de soma definida em `math.js`. São realizados dois testes usando a biblioteca de assertiva `assert/strict`. Um teste verifica se a função retorna o resultado esperado quando adiciona dois números, e o outro teste verifica se o resultado não é igual a um valor incorreto.

```javascript
const test = require('node:test');
const assert = require('assert/strict');
const sum = require('./math');

test('Sum function', async t => {
    await t.test('It should add two numbers', () => {
        assert.equal(sum(2, 2), 4);
    });
    await t.test('It should add two numbers', () => {
        assert.notEqual(sum(3, 2), 1);
    });
});
```

## Executando o projeto

Para executar esse projeto, você precisará ter o Node.js 18 instalado em seu ambiente. Você pode executar o arquivo `test.js` para ver os resultados dos testes:

```
node test.js
```

Isso executará os testes definidos no arquivo `test.js` e exibirá os resultados no console. Certifique-se de que todos os testes foram bem-sucedidos para confirmar que a função de soma está funcionando corretamente.

Lembre-se de que este é apenas um caso de estudo simples para ilustrar algumas das novas funcionalidades do Node.js 18. Existem muitos outros recursos interessantes na nova versão, e encorajo você a explorar a documentação oficial do Node.js para aprender mais sobre todas as melhorias e recursos disponíveis.