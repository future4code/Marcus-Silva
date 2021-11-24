```sql
-- Exercício 1

-- a) ALTER TABLE Actor DROP COLUMN salary; Irá deletar a coluna 'salary'

-- b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6); Modifica o nome da coluna 'gender'para 'sex'

-- c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255); Deixamos a coluna 'gender'com o mesmo nome 'gender' e alteramos apenas o VARCHAR de 6 caracteres para aceitar string com até 255 caracteres

-- d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

-- Exercício 2

-- a)
UPDATE Actor
SET name = "John Doe",
birth_date = CURDATE()
WHERE Actor.id = "003";

```
