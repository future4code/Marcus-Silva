# Aula 55 - Introdução a Autenticação

## Exercício 1

#### **a)**

- [ ] Sei a resposta
- [x] Não sei a resposta

## Exercício 2

#### **a)** O knex faz com que seja possível nos conectarmos ao Banco de Dados artavés da porta 3306. Dessa forma podemos criar uma função asyn e inserirmos o id, email e password do usuário para a table que criamos no BD.

#### b)

```sql
  CREATE TABLE Users (
	id VARCHAR(255) PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);
```
