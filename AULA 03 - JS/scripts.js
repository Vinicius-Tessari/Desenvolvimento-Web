// console.log() mostra uma informação no Console.
console.log("Olá mundo!");

// Também podemos mostrar números.
console.log(10);

// O Console pode calcular expressões matemáticas.
console.log(10 + 5); // Soma: 15.
console.log(10 - 5); // Subtração: 5.
console.log(10 * 5); // Multiplicação: 50.
console.log(10 / 5); // Divisão: 2.
console.log(10 % 3); // Resto da divisão: 1.

// const cria uma variável que não será reatribuída.
const nome = "Ana";

// Mostra o conteúdo armazenado na variável.
console.log(nome);

// let cria uma variável que pode receber outro valor depois.
let idade = 18;

// Mostra o valor atual de idade.
console.log(idade);

// Altera o valor da variável.
idade = 19;

// Mostra o novo valor.
console.log(idade);

// Uma string é um texto.
const curso = "Desenvolvimento Web";

// Um number é um número (números não precisam de aspas "").
const nota = 8.5;

// Um boolean armazena true ou false (verdadeiro ou falso).
const aprovado = true;

// typeof informa o tipo do valor armazenado na variável.
console.log(typeof curso);     // string
console.log(typeof nota);      // number
console.log(typeof aprovado);  // boolean

// === compara valor E tipos informados.
console.log(10 === 10);     // true os dois são números INTEIROS
console.log(10 === "10");   // false porque um é um número inteiro e o outro é uma String (texto)

// > verifica se o valor da esquerda é maior.
console.log(10 > 5); // true

// < verifica se o valor da esquerda é menor.
console.log(10 < 5); // false

// && significa "E": as duas condições precisam ser verdadeiras.
console.log(idade >= 18 && aprovado === true);

// || significa "OU": apenas uma condição ser verdadeira.
console.log(idade >= 18 || aprovado === true);

// ! significa "NÃO" e inverte um boolean.
console.log(!aprovado);

// Template string permite misturar texto e variáveis usando crases.
console.log(`Nome: ${nome} | Idade: ${idade} | Curso: ${curso}`);

// Forma alternativa de referencias strings com variáveis
console.log("Nome: " + nome)
