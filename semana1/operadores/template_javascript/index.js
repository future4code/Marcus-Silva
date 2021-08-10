// #####################################
// Exercícios de interpretação de código
// #####################################

// ----------------------------> Exercício 1 <----------------------------

// 1 - Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

// const bool1 = true;
// const bool2 = false;
// const bool3 = !bool2;

// let resultado = bool1 && bool2;
// console.log("a. ", resultado);
// false

// resultado = bool1 && bool2 && bool3;
// console.log("b. ", resultado);
// false

// resultado = !resultado && (bool1 || bool2);
// console.log("c. ", resultado);
// true

// console.log("d. ", typeof resultado);
// Boolean

// ----------------------------> Exercício 2 <----------------------------

// 2 - Seu colega se aproxima de você falando que o código dele não funciona como devia. Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?

// let primeiroNumero = prompt("Digite um numero!");
// let segundoNumero = prompt("Digite outro numero!");

// const soma = primeiroNumero + segundoNumero;

// console.log(soma);

// prompt sempre irá devolver uma string, logo, o primeiroNumero e segundoNumero serão concatenados.
// Digamos que eu entre com o valor 10 e 5
// O valor imppresso no console será: 105

// ----------------------------> Exercício 2 <----------------------------

// 3 - Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

// Basta colocarmos o Number antes do prompt, por exemplo:

// Number(prompt("Digite um número!"));
// Number(prompt("Digite outro número!"));

// ###############################
// Exercícios de escrita de código
// ###############################

// ----------------------------> Exercício 1 <----------------------------

// 1 - Faça um programa que:

// a) Pergunte a idade do usuário
// b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
// c) Imprima na console a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (true ou false)
// d) Imprima na console a diferença de idade (não tem problema se sair um número negativo)

const seuNome = prompt("Qual o seu nome?");
const idadeMelhorAmigo = Number(prompt("Qual a idade do seu melhor amigo?"));

let minhaIdade = 28;
console.log(
  "Sua idade é maior do que a do seu melhor amigo?",
  minhaIdade > idadeMelhorAmigo
);

let diferencaIdade = minhaIdade - idadeMelhorAmigo;

console.log("A diferena de idade é:", diferencaIdade);

// ----------------------------> Exercício 2 <----------------------------
// 2 - Faça um programa que:

// a) Peça ao usuário que insira um número par
// b) Imprima na console o resto da divisão desse número por 2.
// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
// d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

const numeroPar = Number(prompt("Por favor, insira um número par:"));

console.log(
  "O resto da divisão (ou módulo) do número que você entrou é:",
  numeroPar % 2
);

// Resposta para a letra C: Todo o resto da divisão será 0.

// Resposta para a letra D: O resto da divisão será 1.

// ----------------------------> Exercício 3 <----------------------------

// 3 - Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console

// a) A idade do usuário em meses
// b) A idade do usuário em dias
// c) A idade do usuário em horas

const qualSuaIdade = Number(
  prompt("Qual a sua idade? (Digite apenas números)")
);

const meses = 12;
const dias = 365;
const horas = 720 * 12;

console.log("A idade do usuário em meses é:", qualSuaIdade * meses);
console.log("A idade do usuário em dias é:", qualSuaIdade * dias);
console.log("A idade do usuário em horas é:", qualSuaIdade * horas);

// ----------------------------> Exercício 4 <----------------------------

// 4 - Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:

// O primeiro numero é maior que segundo? true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? true

// obs: O true ou false vai depender dos números inseridos e do resultado das operações.

const num1 = Number(prompt("Entre um número:"));
const num2 = Number(prompt("Entre outro número:"));

console.log("O primeiro número é maior que o segundo?", num1 > num2);
console.log("O primeiro número é igual ao segundo?", num1 === num2);
console.log("O primeiro número é divisível pelo segundo?", num1 % 2 === 0);
console.log("O segundo número é divisível pelo primeiro?", num2 % 2 === 0);
