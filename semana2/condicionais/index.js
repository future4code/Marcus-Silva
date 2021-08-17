// #####################################
// Exercícios de interpretação de código
// #####################################

// ------------------------------> Exercício 1 <------------------------------

// Letra A
// O código verifica se o número digitado na caixa de mensagem possui resto igual a 0. Caso seja verdade, o console irá  imprimir a mensagem "Passou no teste".

// Letra B
// Números pares

// Letra C
// Números impares

// ------------------------------> Exercício 2 <------------------------------

// Letra A
// O código da questão 2 serve para o(a) usuário(a) escolher uma fruta, e caso a fruta que ele(a) tenha escolhido esteja disonível no banco de dados, o console irá imprimir o nome da fruta que o(a) usuário(a) digitou e o seu devido preço.

// Letra B
// O preço da fruta Maçã é R$2.25

// Letra C
// Contrariando minhas expectativas (pensei que o código fosse "quebrar"), a mensagem que o console imprimiu foi essa: O preço da fruta  Pêra  é  R$  5
// Com o break o preço seria 5.5
// Tive que executar o código 😁

// ------------------------------> Exercício 3 <------------------------------

// Letra A
// A primeira linha irá exibir uma caixa de mensagem pedindo para o usuário digitar um número

// Letra B
// 10 = Esse número passou no teste
// -10 = Tive que executar o cógido para saber a resposta. E a respota é uma mensam de erro indicando que a variável "mensage"m não está definida.

// Letra C
// Haverá um erro. Este tipo de erro ocorre quando tentamos ter acesso a uma variável que está dentro do escopo de uma função ou neste caso, uma condicional {}.
// Só ppoderíamos ter acesso a variável mensagem se estivesse no escopo global.

// ###############################
// Exercícios de escrita de código
// ###############################

// // ------------------------------> Exercício 1 <------------------------------

const idade = Number(prompt("Qual a sua idade?"));

if (idade >= 18) {
  console.log("Você pode dirigir.");
} else {
  console.log("Você não pode dirigir.");
}

// ------------------------------> Exercício 2 <------------------------------

const verificaTurno = prompt(
  "Olá, aluno! Por favor, informe em qual turno do dia você estuda. Utiliza M para (Matutino), V (Vespertino) ou N (Noturno)"
);

if (verificaTurno === "M") {
  console.log("Bom dia!");
} else if (verificaTurno === "V") {
  console.log("Boa tarde!");
} else if (verificaTurno === "N") {
  console.log("Boa noite!");
} else {
  console.log("Error! Por favor, insira uma mensagem válida: M, V ou N");
}

// ------------------------------> Exercício 3 <------------------------------

const verificaT = prompt(
  "Olá, aluno! Por favor, informe em qual turno do dia você estuda. Utiliza M para (Matutino), V (Vespertino) ou N (Noturno)"
);

switch (verificaT) {
  case "M":
    console.log("Bom dia!");
    break;
  case "V":
    console.log("Boa tarde!");
    break;
  case "N":
    console.log("Boa noite!");
    break;
  default:
    console.log("Error! Por favor, insira uma mensagem válida: M, V ou N");
    break;
}

// ------------------------------> Exercício 4 e Desafio 1 <------------------------------

const generoDoFilme = prompt("Qual o gênero do filme?");
const precoIngresso = Number(prompt("Qual o preço do ingresso?"));
const lanchinho = prompt("Qual lanchinho você vai comprar: pipoca, chocolate?");

if (
  generoDoFilme === "fantasia" &&
  precoIngresso < 15 &&
  lanchinho === "pipoca"
) {
  console.log("Bom filme! Aproveite o/a seu/sua", lanchinho);
} else if (
  generoDoFilme === "fantasia" &&
  precoIngresso < 15 &&
  lanchinho === "chocolate"
) {
  console.log("Bom filme! Aproveite o/a seu/sua", lanchinho);
} else {
  console.log("Escolha outro filme :(");
}
