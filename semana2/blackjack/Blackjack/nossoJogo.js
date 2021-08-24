/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

const boasVindas = "Boas vindas ao jogo de Blackjack!";
console.log(boasVindas);

if (confirm("Quer iniciar uma nova rodada?")) {
  const usuario = comprarCarta();
  const computador = comprarCarta();

  console.log(
    `Usuário - cartas: ${usuario.texto} ${usuario.texto} - pontuação ${
      usuario.valor + usuario.valor
    }`
  );
  console.log(
    `Computador - cartas: ${computador.texto} ${usuario.texto} - pontuação ${
      computador.valor + usuario.valor
    }`
  );

  if (usuario.valor > computador.valor) {
    console.log("Usuário é o vencedor!");
  } else if (usuario.valor < computador.valor) {
    console.log("Computador é o vencedor!");
  } else if (usuario.valor === computador.valor) {
    console.log("Empate!");
  }
} else {
  console.log("O jogo acabou.");
}
