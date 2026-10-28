# 🏦 Desafio prático — Simulador de Banco

**Disciplina:** Desenvolvimento Web  
**Nível:** Básico / intermediário inicial  
**Tecnologias permitidas:** HTML e JavaScript puro  
**Conteúdo obrigatório:** `if/else`, `switch/case`, `for` e `while`

## 1. Objetivo

Desenvolver um **sistema bancário simples** que funcione diretamente no navegador. O usuário deverá conseguir **consultar o saldo, realizar depósitos, fazer saques e visualizar o extrato**.

O desafio é combinar as quatro estruturas de controle aprendidas em sala, cada uma com uma finalidade real no programa. Não basta escrever um `while` ou um `for` que não interfira no funcionamento do sistema.

> **Atenção:** este é um simulador para fins didáticos. Não há conexão com um banco de verdade.

## 2. Como o sistema deve funcionar

Toda conta começa com **R$ 1.000,00** de saldo. A página precisa ter:

- Um título identificando o sistema.
- Uma área exibindo o **saldo atual**.
- Um campo de seleção (`<select>`) com as opções **Consultar saldo**, **Depositar**, **Sacar** e **Ver extrato**.
- Um campo numérico (`<input>`) para informar o valor de depósitos e saques.
- Um botão **Executar operação**.
- Uma área na própria página para exibir mensagens, resultados e extrato.

As operações devem acontecer **sem recarregar a página**. O saldo precisa ser atualizado após depósitos e saques bem-sucedidos.

### Operação 1 — Consultar saldo

Ao escolher essa opção, o sistema deve apresentar o valor disponível na conta. Não é necessário digitar valor.

### Operação 2 — Depositar

O usuário digita um valor e clica no botão. O sistema deverá:

1. Verificar se o valor foi informado.
2. Aceitar **somente números inteiros maiores que zero**.
3. Somar o depósito ao saldo disponível.
4. Mostrar uma mensagem de sucesso com o novo saldo.
5. Registrar o depósito no histórico.

Se o valor for inválido, exibir uma mensagem de erro e **não alterar o saldo**.

### Operação 3 — Sacar

O usuário digita um valor para retirar da conta. O sistema deverá:

1. Verificar se o valor é um número inteiro maior que zero.
2. Aceitar somente valores **múltiplos de 10**, pois o caixa tem notas de **R$ 100, R$ 50, R$ 20 e R$ 10**.
3. Verificar se existe saldo suficiente.
4. Em caso de saque válido, descontar o valor do saldo.
5. Usar `while` para calcular quantas notas de cada valor serão entregues, **começando pelas maiores**.
6. Mostrar as notas entregues, o total sacado e o saldo restante.
7. Registrar o saque no histórico.

**Importante:** cada quantidade de notas deve ser calculada por repetição. Não utilize `Math.floor()` ou divisão inteira para substituir o `while` no cálculo das notas.

### Operação 4 — Ver extrato

O sistema deve guardar os depósitos e saques realizados durante o uso da página.

Ao escolher **Ver extrato**, utilize um `for` para percorrer o histórico e mostrar as movimentações **na ordem em que aconteceram**. O extrato deve incluir o registro de abertura da conta com o saldo inicial.

Operações inválidas **não devem ser registradas**. Consultar saldo e visualizar extrato também não são movimentações financeiras.

## 3. Onde utilizar cada estrutura

| Estrutura | Uso obrigatório no projeto |
|---|---|
| `if/else` | Validar valores e verificar saldo suficiente. |
| `switch/case` | Decidir o que executar com base na operação selecionada. |
| `for` | Percorrer e exibir as movimentações do extrato. |
| `while` | Contar as notas de R$ 100, R$ 50, R$ 20 e R$ 10 durante o saque. |

> O projeto precisa utilizar **todas as quatro estruturas**, não apenas algumas delas.

## 4. Exemplos de funcionamento

**Exemplo A — Depósito**

```text
Saldo inicial: R$ 1.000,00
Operação: Depositar
Valor: 200

Depósito de R$ 200,00 realizado com sucesso!
Novo saldo: R$ 1.200,00
```

**Exemplo B — Saque** (considerando o saldo inicial e nenhum depósito anterior)

```text
Saldo inicial: R$ 1.000,00
Operação: Sacar
Valor: 180

Saque de R$ 180,00 realizado com sucesso!
Notas entregues:
1 nota(s) de R$ 100
1 nota(s) de R$ 50
1 nota(s) de R$ 20
1 nota(s) de R$ 10
Saldo restante: R$ 820,00
```

**Exemplo C — Saque inválido**

```text
Operação: Sacar
Valor: 35

Erro: o valor do saque deve ser múltiplo de 10.
```

**Exemplo D — Extrato** (após um depósito de R$ 200 e um saque de R$ 180)

```text
EXTRATO
1. Abertura da conta: R$ 1.000,00
2. Depósito: +R$ 200,00
3. Saque: -R$ 180,00

Saldo atual: R$ 1.020,00
```

## 5. Regras do desafio

1. Utilizar **apenas HTML e JavaScript puro**, sem CSS, bibliotecas, frameworks ou backend.
2. Criar **dois arquivos**: `index.html` e `script.js`.
3. Mostrar as respostas **na página HTML**, e não somente em `alert()` ou `console.log()`.
4. Utilizar as quatro estruturas obrigatórias nas tarefas descritas acima.
5. **Não utilizar** `forEach()`, `map()` ou `for...of` no lugar do `for` solicitado para o extrato.
6. Os dados podem ficar em memória: **não é necessário salvar o saldo ao fechar ou atualizar o navegador**.

## 6. Dicas (sem entregar a solução)

Os recursos abaixo podem ajudar:

- `document.getElementById()` — selecionar os elementos HTML.
- `addEventListener("click", ...)` — executar comandos ao clicar em um botão.
- `.value` — obter o valor de um campo.
- `Number()` e `Number.isInteger()` — converter e validar números inteiros.
- `%` — verificar se um número é múltiplo de outro.
- `.textContent` — escrever o resultado na página.
- `array.push()` — adicionar uma movimentação ao histórico.
- `array.length` — descobrir quantos registros existem no histórico.
- `break` — encerrar cada opção de um `switch`.

Para distribuir as notas, pense em uma variável chamada **`restante`**. Enquanto for possível retirar uma nota de determinado valor, subtraia esse valor de `restante` e acrescente 1 ao contador daquela nota. Depois passe para a nota de menor valor.

## 7. Testes obrigatórios

Antes de entregar, confirme que seu projeto passa pelos cenários abaixo. **Cada cenário considera uma nova página aberta, com saldo inicial de R$ 1.000,00.**

| Teste | Operação | Valor | Resultado esperado |
|---|---|---:|---|
| 1 | Consultar saldo | — | Mostrar R$ 1.000,00. |
| 2 | Depositar | 250 | Novo saldo de R$ 1.250,00. |
| 3 | Sacar | 180 | Entregar 1 nota de cada valor (100, 50, 20 e 10); saldo R$ 820,00. |
| 4 | Sacar | 35 | Mostrar erro: não é múltiplo de 10. |
| 5 | Sacar | 1500 | Mostrar erro: saldo insuficiente. |
| 6 | Depositar | 0 | Mostrar erro; manter o saldo. |
| 7 | Depositar | -20 | Mostrar erro; manter o saldo. |
| 8 | Sacar | 100 | Entregar 1 nota de R$ 100; saldo R$ 900,00. |
| 9 | Ver extrato | — | Mostrar a abertura da conta e as operações válidas anteriores. |

## 8. Entrega

A entrega deverá conter:

```text
banco/
├── index.html
└── script.js
```

O professor deverá conseguir abrir o arquivo `index.html` no navegador e testar as quatro operações sem instalar nada.

### Desafio extra (opcional)

No saque, exiba também a **quantidade total de notas** entregues.

**Critério principal:** não é necessário criar uma interface elaborada. A prioridade é a **lógica correta**, o funcionamento dos botões e o uso adequado de `if/else`, `switch/case`, `for` e `while`.
