// 1 - Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

// let a = 10;
// let b = 10;

// console.log(b);

// b = 5;
// console.log(a, b);
// 10, 5

// 2 - Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

// let a = 10;
// let b = 20;
// c = a;
// b = c;
// a = b;

// console.log(a, b, c);
// 10, 10, 10

// 3 - Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. Alem disso, os nomes não podem começar com números ou caracteres especiais.

// let p = prompt("Quantas horas você trabalha por dia?");
// let t = prompt("Quanto você recebe por dia?");
// alert(`Voce recebe ${t / p} por hora`);

// let horasTrabalho = prompt("Quantas horas você trabalha por dia?");
// let valorDia = prompt("Quanto você recebe por dia?");
// alert(`Você recebe ${horasTrabalho/valorDia} por hora`);

// ###############################
// Exercícios de escrita de código
// ###############################

// PRIMEIRA QUESTÃO
// 1 - Construa um programa, seguindo os seguintes passos:
// a) Declare uma variável para armazenar um nome, sem atribuir um valor.
// b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
// c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando typeof.
// d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
// e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
// f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
// g) Para finalizar, imprima na tela a mensagem: "Olá nome,  você tem idade anos". Onde nome e idade são os valores que o usuário inseriu.

// let nameVar;
// let ageVar;
// console.log(typeof nameVar);
// console.log(typeof ageVar);

// O undefined foi impresso porque nós não adicionamos um valor para as variáveis criadas.

const nameVar = prompt("Olá! Qual o seu nome?");
const ageVar = prompt("Qual a sua idade?");

console.log(typeof nameVar);
console.log(typeof ageVar);

// O typeof das duas variáveis acima são: strings. Isso acontece porque por padrão, todo valor retornado pelo prompt, é uma string. Mas há maneiras de alterarmos isso para que o output seja um Number

alert(`Olá, ${nameVar}! Você tem ${ageVar} anos`);
// Não consegui concatenar da maneira demonstrada na aula. Sry

// SEGUNDA QUESTÃO
// 2 - Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:
// a) Crie três novas variáveis, contendo as respostas
// b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas.

const q1 = prompt("Você já almoçou?");
const q2 = prompt("Você está com fome?");
const q3 = prompt("Você continua com fome?");

let r1 = q1;
let r2 = q2;
let r3 = q3;

alert(`Pergunta: Você já almoçou? Sua resposta: ${r1}`);
alert(`Pergunta: Você está com fome? Sua resposta: ${r2}`);
alert(`Pergunta: Você continua com fome? Sua resposta: ${r3}`);
// Não consegui concatenar da maneira demonstrada na aula. Sry. Tentei várias vezes, mas o valor não aparecia. Usei template strings e funcionou perfeitamente.

// TERCEIRA QUESTÃO
// 3 - Suponha que temos duas variáveis a e b, cada uma com um valor inicial
// let a = 10
// let b = 25

// Agora, queremos trocar os valores delas, de forma que a passe a ter o valor de b e b passe a ter o valor de a.
// Ou seja, no caso desse exemplo acima, a passaria a ser 25 e b passaria a ser 10.

let a = 10;
let b = 25;

// Aqui faremos uma lógica para trocar os valores
let c;
c = a; // 10
a = b; // 25
b = c; // 10

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a); // O novo valor de a é 25
console.log("O novo valor de b é", b); // O novo valor de b é 10
