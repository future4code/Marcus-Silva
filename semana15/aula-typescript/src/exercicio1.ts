// 1 c)
type Pessoa = {
  nome: string;
  idade: number;
  corFavorita: string;
};

// 1 a)
// const minhaString: string = 666;
// Type "number" não pode ser atribuído ao type "string"

// 1 b)
const meuNumero: number | string = 666;
// Adicionamo um pipe | entre os types

// 1 c)
const obj1: Pessoa = {
  nome: "Marcus",
  idade: 29,
  corFavorita: "Preto",
};

const obj2: Pessoa = {
  nome: "Luís",
  idade: 29,
  corFavorita: "Azul",
};

const obj3: Pessoa = {
  nome: "Marcus",
  idade: 29,
  corFavorita: "Vermelho",
};

// 1 d)
