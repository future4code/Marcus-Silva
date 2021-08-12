// #####################################
// Exercícios de interpretação de código
// #####################################

// -------------------------------> Exercício 1 <-------------------------------

// 1 - Leia o código abaixo

// function minhaFuncao(variavel) {
//   return variavel * 5;
// }

// console.log(minhaFuncao(2));
// console.log(minhaFuncao(10));

// a) O que vai ser impresso no console?
// b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?

// 10
// 50

// -------------------------------> Exercício 2 <-------------------------------

// 2 - Leia o código abaixo

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function (texto) {
//   return texto.toLowerCase().includes("cenoura");
// };

// const resposta = outraFuncao(textoDoUsuario);
// console.log(resposta);

// a. Explique o que essa função faz e qual é sua utilidade
// b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
// i.   Eu gosto de cenoura
// ii.  CENOURA é bom pra vista
// iii. Cenouras crescem na terra

// A
// Essa função irá retornar um texto em letras minúsculas e verificar se nesse texto há a palavra "cenoura". Caso haja a palavra "cenoura" a variável `resposta´ irá retornar um Boolean.

// B
// true
// Havia colocado false, mas é true. Pensei que o case senstive fosse interferir. 🥲
// Havia colocado false, mas é true. 🥲

// ###############################
// Exercícios de escrita de código
// ###############################

// -------------------------------> Exercício 1 <-------------------------------

// 1 - Escreva as funções explicadas abaixo:

// a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:

// "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
// Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.

// b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:

// Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].

// A
function description() {
  console.log(
    "Eu sou Marcus, tenho 28 anos, moro em Salgueiro - PE e sou estudante."
  );
}

description();

// B
function sobreEstaPessoa(nome, idade, endereco, profissao) {
  return `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}. `;
}

console.log(sobreEstaPessoa("Marcus", 28, "Salgueiro - PE", "estudante"));

// -------------------------------> Exercício 2 <-------------------------------

// 2 - Escreva as funções explicadas abaixo:

// a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
// b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.
// c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
// d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

// A
function resultado(num1, num2) {
  const soma = num1 + num2;
  console.log("Letra a) O resultado da soma é: ", soma);
}

resultado(80_000, 10);

// B
function maiorOuIgual(num1, num2) {
  const verifique = num1 >= num2;
  return verifique;
}

console.log(
  "Letra b) 100.000 é maior ou igual a 999.999",
  maiorOuIgual(100_000, 99_999)
);

// C
function parOuImpar(num) {
  const verifique = num % 2 === 0;
  return verifique;
}

console.log("Letra c) Esse número é par?", parOuImpar(10));

// D
function mensagem(msg) {
  const tamanhoMensagem = "Olá";
  console.log(tamanhoMensagem.length, tamanhoMensagem.toUpperCase());
}

console.log(mensagem());

// 3 - Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

// Soma
function soma() {
  const primeiroNumero = Number(prompt("Por favor, entre com um número!"));
  const segundoNumero = Number(prompt("Entre com mais um número!"));

  console.log("O resultado da soma é:", primeiroNumero + segundoNumero);
}

console.log(soma());

// Subtração
function subtracao() {
  const primeiroNumero = Number(prompt("Por favor, entre com um número!"));
  const segundoNumero = Number(prompt("Entre com mais um número!"));

  console.log("O resultado da subtração é:", primeiroNumero - segundoNumero);
}

console.log(subtracao());

// Multiplicação
function multiplicacao() {
  const primeiroNumero = Number(prompt("Por favor, entre com um número!"));
  const segundoNumero = Number(prompt("Entre com mais um número!"));

  console.log(
    "O resultado da multiplicação é:",
    primeiroNumero * segundoNumero
  );
}

console.log(multiplicacao());

// Divisão
function divisao() {
  const primeiroNumero = Number(prompt("Por favor, entre com um número!"));
  const segundoNumero = Number(prompt("Entre com mais um número!"));

  console.log("O resultado da divisão é:", primeiroNumero / segundoNumero);
}

console.log(divisao());
