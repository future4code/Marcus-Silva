// #####################################
// Exercícios de interpretação de código
// #####################################

// ------------------------------> Exercício 1 <------------------------------

// Leia o código abaixo

const filme = {
  nome: "Auto da Compadecida",
  ano: 2000,
  elenco: [
    "Matheus Nachtergaele",
    "Selton Mello",
    "Denise Fraga",
    "Virginia Cavendish",
  ],
  transmissoesHoje: [
    { canal: "Telecine", horario: "21h" },
    { canal: "Canal Brasil", horario: "19h" },
    { canal: "Globo", horario: "14h" },
  ],
};

console.log(filme.elenco[0]);
console.log(filme.elenco[filme.elenco.length - 1]);
console.log(filme.transmissoesHoje[2]);

// a) O que vai ser impresso no console?

// Matheus Nachtergaele
// Virginia Cavendish
// canal: "Globo", horario: "14h"

// ------------------------------> Exercício 2 <------------------------------

// Leia o código abaixo

const cachorro = {
  nome: "Juca",
  idade: 3,
  raca: "SRD",
};

const gato = { ...cachorro, nome: "Juba" };

const tartaruga = { ...gato, nome: gato.nome.replaceAll("a", "o") };

console.log(cachorro);
console.log(gato);
console.log(tartaruga);

// a) O que vai ser impresso no console?

// 1: O objeto cachorro e suas propriedades: keys and vaules
// 2: Teremos como output no console tanto o objeto cachorro e suas propriedades, quanto o objeto gato. Isso irá acontecer pois foi utilizado o spread operator ...cahorro
// 3: Dessa teremos como output o objecto gato e o nome do gato que antes era Juba, agora será Jubo. Apenas o nome será modificado, idade e raça não sofrerão alterações.

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

// A sintaxe spread operator ... faz com que possamos trazer um objeto e suas propriedades para dentro de outro objeto

// ------------------------------> Exercício 3 <------------------------------

// Leia o código abaixo

function minhaFuncao(objeto, propriedade) {
  return objeto[propriedade];
}

const pessoa = {
  nome: "Caio",
  idade: 23,
  backender: false,
};

console.log(minhaFuncao(pessoa, "backender"));
console.log(minhaFuncao(pessoa, "altura"));

// a) O que vai ser impresso no console?

// O primeiro log irá imprimir false
// O segundo log irá imprimir undefined

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

// No return de minhaFuncao foi utilizado uma das formas de acessar o value de uma key. E como parametro dessa função foram utilziados os mesmos nomes passados no return.
// No console.log chamamos a função minhaFuncao e foi preciso apenas especificar o nome do objeto, que neste caso é: pessoa.
// Este objeto pessoa serviu como argumento para o parêmetro objeto da função minhaFuncao

// O segundo argumento liga ao parâmetro propriedade

// Foi uma péssima explicação, mas eu compreendi o porquê funcionou da maneira que funcionou. Espero ter usado esse "porquê" corretamente.

// ###############################
// Exercícios de escrita de código
// ###############################

// ------------------------------> Exercício 1 <------------------------------

// Letra A
const nomeDaPessoa = {
  nome: "Fulano",
  apelido: ["Fula", "Fualanildo", "Fulanaldo"],
};

function imprimiNomeDaPessoa(obj) {
  const frase = `Eu sou ${obj.nome}, mas pode me chamar de: ${obj.apelido[0]}, ${obj.apelido[1]} ou ${obj.apelido[2]}`;

  console.log(frase);
}

imprimiNomeDaPessoa(nomeDaPessoa);

// Letra B
const novoObjeto = {
  ...nomeDaPessoa,
  apelido: ["Fu", "Ful", "Fuful"],
};

imprimiNomeDaPessoa(novoObjeto);

// ------------------------------> Exercício 2 <------------------------------

// Letra A
const primeiraPessoa = {
  nome: "Fulano",
  idade: 200,
  profissao: "Astronauta",
};

const segundaPessoa = {
  nome: "Beltrano",
  idade: 300,
  profissao: "Piloto de F1",
};

// Letra B
function recebeDoisObjetos(primeiraPessoa, segundaPessoa) {
  const arr = [];
  arr.push(primeiraPessoa.nome, primeiraPessoa.idade, primeiraPessoa.profissao);
  arr.push(segundaPessoa.nome, segundaPessoa.idade, segundaPessoa.profissao);

  console.log(arr);
}

recebeDoisObjetos(primeiraPessoa, segundaPessoa);

// ------------------------------> Exercício 3 <------------------------------

// Letra A
const carrinho = [];

// Letra B
const primeiraFruta = {
  nome: "banana",
  disponibilidade: true,
};

const segundaFruta = {
  nome: "mamao",
  disponibilidade: true,
};

const terceiraFruta = {
  nome: "laranja",
  disponibilidade: true,
};

// Letra C
function minhasCompras(primeiraFruta) {
  carrinho.push(primeiraFruta);
  carrinho.push(segundaFruta);
  carrinho.push(terceiraFruta);
}

minhasCompras(primeiraFruta, segundaFruta, terceiraFruta);

// Letra D
console.log(carrinho);
