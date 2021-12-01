```sql
  -- Exercício 1

  -- a) ALTER TABLE Actor DROP COLUMN salary; Irá deletar a coluna 'salary'

  -- b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6); Modifica o nome da coluna 'gender'para 'sex'

  -- c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255); Deixamos a coluna 'gender'com o mesmo nome 'gender' e alteramos apenas o VARCHAR de 6 caracteres para aceitar string com até 255 caracteres

  -- d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

  -- Exercício 5

  -- a) Todos os gêneros que não foram removidos da tabela são contados e aparecem em um linha da tabela

  -- Exercício 6

  -- d) Não ocorreu erro no output, mas a linha dessa id nao foi afetada, pois já não existia mais no BD (?)

```
