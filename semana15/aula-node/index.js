// 1 a) process.argv[n]
// 1 b)

function recebeNomeEIdade(nome, idade) {
  return `Olé, ${nome}! Você tem ${idade} anos.`;
}

console.log(recebeNomeEIdade("Marcus", 29));

// 1 c)
function timeIsAPoison(nome, idade) {
  return `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${
    idade + 7
  } anos de idade.`;
}

console.log(timeIsAPoison("Marcus", 29));

// 2
const calc = (a, b) => {
  switch (calc) {
    case "soma":
      console.log(a + b);
      break;
    case "subtracao":
      console.log(a - b);
      break;
    case "multiplicacao":
      console.log(a * b);
      break;
    case "divsao":
      console.log(a / b);
      break;
    default:
      console.log("Ocorreu um erro.");
  }
};

calc(50, 5);

// 3
const tarefas = process.argv[2];

const listaDeTarefas = ["Acordar"];

listaDeTarefas.push(tarefas);

console.log(tarefas);
