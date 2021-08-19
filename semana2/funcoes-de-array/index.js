// #####################################
// Exercícios de interpretação de código
// #####################################

// ######################## Exercício 1 ########################

// Letra A
// O item ira imprimir o nome, o index iŕa imprimir o apelido, o array irá imprimir objeto por completo.

// ######################## Exercício 2 ########################

// Letra A
// Irá imprimir uma array apenas com os nomes

// ######################## Exercício 3 ########################

// Letra A
// Retorna um array com todo todos os objetos, menos o objeto que tem o nome "Chijo"

// ###############################
// Exercícios de escrita de código
// ###############################

// ######################## Exercício 1 ########################

const pets = [
  { nome: "Lupin", raca: "Salsicha" },
  { nome: "Polly", raca: "Lhasa Apso" },
  { nome: "Madame", raca: "Poodle" },
  { nome: "Quentinho", raca: "Salsicha" },
  { nome: "Fluffy", raca: "Poodle" },
  { nome: "Caramelo", raca: "Vira-lata" },
];

// Letra A
const apenasNomeDosPets = pets.map((value) => {
  return value.nome;
});

console.log(apenasNomeDosPets);

// Letra B
const cachorroRacaSalsicha = pets.filter((value) => {
  return value.raca === "Salsicha";
});

console.log(cachorroRacaSalsicha);

// Letra C
const mensagem = pets.filter((value) => {
  if (value.raca === "Poodle") {
    console.log(
      `Você ganhou um cupom de desconto de 10% para tosar o/a ${value.nome}!`
    );
  }
});

// // ######################## Exercício 2 ########################

const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 },
];

// Letra A
const nomeDeCadaProduto = produtos.map((value) => {
  return value.nome;
});

console.log(nomeDeCadaProduto);

// Letra B
const descontoDeCincoPorCento = produtos.map((value) => {
  const desconto = value.preco * (5 / 100);
  const novoObj = { nome: value.nome, preco: value.preco - desconto };

  return novoObj;
});

console.log(descontoDeCincoPorCento);

// Letra C
const apenasBebidas = produtos.filter((value) => {
  return value.categoria === "Bebidas";
});

console.log(apenasBebidas);

// Letra D
const ype = produtos.filter((value) => {
  return value.nome.includes("Ypê");
});

console.log(ype);

// Letra E
const compreYpe = produtos.filter((value) => {
  if (value.nome.includes("Ypê")) {
    console.log(`Compre ${value.nome} por ${value.preco}`);
  }
});
