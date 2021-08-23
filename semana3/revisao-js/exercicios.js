// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b) => a - b);
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let numerosPares = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) numerosPares.push(array[i]);
  }
  return numerosPares;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let numerosParesElevados = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) numerosParesElevados.push(array[i] ** 2);
  }
  return numerosParesElevados;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return Math.max(...array);
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  const [menor, maior] = retornaArrayOrdenado([num1, num2]);
  return {
    maiorNumero: maior,
    maiorDivisivelPorMenor: maior % menor === 0,
    diferenca: maior - menor,
  };
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  const resultado = [];
  for (let i = 0; i < n; i++) {
    resultado[i] = 2 * i;
  }
  return resultado;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  let lado1 = ladoA;
  let lado2 = ladoB;
  let lado3 = ladoC;
  if (lado1 === lado2 && lado1 === lado3) {
    return "Equilátero";
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    return "Isósceles";
  } else if (lado1 !== lado2 && lado1 !== lado3) {
    return "Escaleno";
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  const arrayOrdenado = retornaArrayOrdenado(array);
  const indiceSegundoMenor = 1;
  const indiceSegundoMaior = array.length - 2;
  return [arrayOrdenado[indiceSegundoMaior], arrayOrdenado[indiceSegundoMenor]];
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  const oFilme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"],
  };
  return `Venha assistir ao filme ${oFilme.nome}, de ${oFilme.ano}, dirigido por ${oFilme.diretor} e estrelado por ${oFilme.atores[0]}, ${oFilme.atores[1]}, ${oFilme.atores[2]}, ${oFilme.atores[3]}.`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  let pessoaAnonima = {
    ...pessoa,
    nome: "ANÔNIMO",
  };
  return pessoaAnonima;
}

const validarPessoa = (pessoa) =>
  pessoa.altura > 1.5 && pessoa.idade > 14 && pessoa.idade < 60;

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  return pessoas.filter(validarPessoa);
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  return pessoas.filter((pessoa) => !validarPessoa(pessoa));
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  // const somar = (num1, num2) => num1 + num2;
  // contas.forEach((conta) => {
  //   const somaDosGastos = conta.compras.reduce(somar, 0);
  //   conta.saldoTotal -= somaDosGastos;
  //   conta.compras = [];
  // });
  // return contas;
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  // const compararNomesDeConsulta = (a, b) => (a.nome > b.nome ? 1 : -1);
  // return consultas.sort(compararNomesDeConsulta);
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  // const gerarData = (string) => {
  //   const [dia, mes, ano] = string.split("/");
  //   return new Date(`${ano}-${mes}-${dia}`);
  // };
  // const compararDatasDeConsulta = (a, b) => {
  //   if (gerarData(a.dataDaConsulta) > gerarData(b.dataDaConsulta)) {
  //     return 1;
  //   } else {
  //     return -1;
  //   }
  // };
  // return consultas.sort(compararDatasDeConsulta);
}
