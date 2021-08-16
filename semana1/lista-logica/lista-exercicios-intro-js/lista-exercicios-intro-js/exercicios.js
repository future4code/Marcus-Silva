// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2;
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt("Digite uma mensagem!");

  console.log(mensagem);
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(
    prompt("Entre com um número! Ele será a altura do seu retâncgulo.")
  );
  const largura = Number(
    prompt("Entre com outro número! Ele será a largura do seu retângulo.")
  );

  const area = altura * largura;

  console.log(area);
}

// calculaAreaRetangulo();

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Por favor, entre com o ano atual!"));
  const anoDeNascimento = Number(prompt("Qual o seu ano de nascimento?"));

  const idade = anoAtual - anoDeNascimento;

  console.log(idade);
}

// imprimeIdade();

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const resultado = peso / altura ** 2;

  return resultado;
}

calculaIMC();

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  const seuNome = prompt("Qual o seu nome?");
  const suaIdade = Number(prompt("Qual a sua  idade?"));
  const seuEmail = prompt("Qual o seu email?");

  console.log(
    `Meu nome é ${seuNome}, tenho ${suaIdade} anos, e o meu email é ${seuEmail}.`
  );
}

// imprimeInformacoesUsuario();

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const corFavorita1 = prompt(
    "Você pode escolher três cores. Primeiro, me informe apenas uma cor favorita!"
  );
  const corFavorita2 = prompt("Agora, me informe sua segunda cor favorita!");
  const corFavorita3 = prompt(
    "Por último, qual seria sua terceira cor favorita?"
  );

  const recebeCor = [];

  recebeCor.push(corFavorita1);
  recebeCor.push(corFavorita2);
  recebeCor.push(corFavorita3);

  console.log(recebeCor);
}

// imprimeTresCoresFavoritas();

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const texto = string.toUpperCase();

  return texto;
}

// retornaStringEmMaiuscula();

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const comparacao = string1.length === string2.length;

  return comparacao;
}

// checaStringsMesmoTamanho();

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array[0];

  return primeiroElemento;
}

// retornaPrimeiroElemento();

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const ultimmoElemento = array[array.length - 1];

  return ultimmoElemento;
}

// retornaUltimoElemento();

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let primeiroElemento = array[0];
  let ultimoElemento = array[array.length - 1];

  array[0] = ultimoElemento;
  array[array.length - 1] = primeiroElemento;

  return array;
}

// trocaPrimeiroEUltimo();

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() === string2.toLowerCase();
}

// checaIgualdadeDesconsiderandoCase();

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
}
