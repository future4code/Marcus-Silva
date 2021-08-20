// #####################################
// Exercícios de interpretação de código
// #####################################

// -------------------------------------> Exercício 1 <-------------------------------------

// O código irá executar um loop enquanto i < 5. Detalhe, foi declarado uma variável chamda "valor" que recebeu 0. Essa variável valor irá somar valor = valor + i, ou seja, além dela receber 1, 2, 3, 4, 5, ela irá guardar o primeiro número e somar ao segundo, e assim sucessivamente.
// Sendo assim, o resultado será 10

// -------------------------------------> Exercício 2 <-------------------------------------

// Letra A
// O console irá imprimir os números maiores que 18 contidos na array lista. Neste são: 19, 21, 23, 25, 27, 30

// Letra B
// É possível sim. Basta apenas remover a linha de código if (numero > 18) e a última chave do bloco.
// Após feito os passos acima, deixa o console.log receber lista.indexOf(numero)

// -------------------------------------> Exercício 3 <-------------------------------------

// Essa questão me deixou igual o meme da Nazaré
// *
// **
// ***
// ****

// ###############################
// Exercícios de escrita de código
// ###############################

// -------------------------------------> Exercício 1 <-------------------------------------

const animaisDeEstimacao = Number(
  prompt("Quantos bichinhos de estimação você tem?")
);

if (animaisDeEstimacao <= 0) {
  console.log("Que pena! Você pode adotar um pet!");
}

for (let pets = 0; pets < animaisDeEstimacao; pets++) {
  const nomeDoPet = prompt("Qual o nome do seu bichinho de estimação?");

  let arr = [];
  arr.push(nomeDoPet);

  console.log(arr);
}

// -------------------------------------> Exercício 2 <-------------------------------------

const arrayOriginal = [12, 44, 5, 6, 88, 100];

// Letra A
function imprimiValoresArray() {
  for (let numero of arrayOriginal) {
    console.log(numero);
  }
}

imprimiValoresArray();

// Letra B
function imprimiVADivididoPorDez() {
  for (let numero of arrayOriginal) {
    console.log(numero / 10);
  }
}

imprimiVADivididoPorDez();

// Letra C
function numerosParesDoArray() {
  for (let numero of arrayOriginal) {
    if (numero % 2 === 0) {
      let arr = [];
      arr.push(numero);

      console.log(arr);
    }
  }
}

numerosParesDoArray();

// Letra D
const novoArray = ["Olá", "tudo", "bem", "com", "você", "?"];

const novoArrayContendoStrings = novoArray.filter((value, index) => {
  console.log(`O elemento da index ${value} é ${index}`);
});

// Letra E
// Não consegui resolver a letra E 🥲
