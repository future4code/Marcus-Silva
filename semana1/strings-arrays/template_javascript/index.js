// #####################################
// Exercícios de interpretação de código
// #####################################

// ------------------------------> Exercício 1 <------------------------------

// 1 - Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

// let array;
// console.log("a. ", array);
// undefined

// array = null;
// console.log("b. ", array);
// null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// console.log("c. ", array.length);
// 10

// let i = 0;
// console.log("d. ", array[i]);
// 3

// array[i + 1] = 19;
// console.log("e. ", array);
// coloquei 23 pensando que iria somar 3 + 1 e de pois receberia o 19 totalizando 23
// E o 23 iria ficar como indice 0, subtituindo o 3 😂
// Mas depois olhei no console e vi a resposta correta e o pq dela ser a resposta correta 🥸

// const valor = array[i + 6];
// console.log("f. ", valor);
// Respondi 29 pois havia somado o 23 + 6
// Mas vi no console que a repsota é 9 pq o indice 6 é 9

// ------------------------------> Exercício 2 <------------------------------

// 2 - Leia o código abaixo com atenção

// const frase = prompt("Digite uma frase");

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length);

// Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?

// Resposta: MIRROCOS 7

// ###############################
// Exercícios de escrita de código
// ###############################

// ------------------------------> Exercício 1 <------------------------------

// 1 - Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:

// O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!

const nomeDoUsuario = prompt("Olá! Qual o seu nome?");
const emailDoUsuario = prompt("Qual o seu e-mail?");

console.log(
  `O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`
);

// ------------------------------> Exercício 2 <------------------------------

// 2 - Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

// a) Imprima no console o array completo
// b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, uma embaixo da outra.
// c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista

const comidasPreferidas = [
  "Hambúrguer",
  "Churrasco",
  "Frutas",
  "Legumes",
  "Macarrão",
];

// A
console.log(comidasPreferidas);

// B
console.log(
  `Essas são as minhas comidas preferidas: \n${comidasPreferidas[0]}\n, ${comidasPreferidas[1]}\n, ${comidasPreferidas[2]}\n, ${comidasPreferidas[3]}\n, ${comidasPreferidas[4]}`
);

// C
const comidaPreferidaDoUsuario = prompt("Olá! Qual sua comida preferida?");

comidasPreferidas.splice(1, 1, comidaPreferidaDoUsuario);

console.log(comidasPreferidas);

// ------------------------------> Exercício 3 <------------------------------

// 3 - Faça um programa, seguindo os passos:

// a) Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas
// b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
// c) Imprima o array no console
// d) Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2
// e) Remova da lista o item de índice que o usuário escolheu.
// f) Imprima o array no consoleImprima no console

// A
const listaDeTarefas = [];

// B
tarefa1 = prompt(
  "Hello, my friend! Me diga uma tarefa que você precisa realizar ainda hoje:"
);
tarefa2 = prompt("Me diga outra tarefa que você precisa realizar ainda hoje:");
tarefa3 = prompt(
  "Me diga mais uma tarefa que você precisa realizar ainda hoje:"
);

listaDeTarefas.push(tarefa1);
listaDeTarefas.push(tarefa2);
listaDeTarefas.push(tarefa3);

// C
console.log(listaDeTarefas);

// D
const indiceDeUmaTarefa = Number(
  prompt(
    "Agora, por favor, digite o índice de uma das tarefas que você já realizou: 0, 1 ou 2"
  )
);

// E
console.log(listaDeTarefas.splice(1, 1));

// F
const consoleImprima = listaDeTarefas;

console.log(consoleImprima);
