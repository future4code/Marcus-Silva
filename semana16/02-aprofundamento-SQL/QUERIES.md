```sql
  -- Exercício 2

  -- a)
  UPDATE Actor
  SET name = "John Doe",
  birth_date = CURDATE()
  WHERE Actor.id = "003";

  -- b)
  SELECT UPPER("Juliana Paes")
  FROM Actor;

  -- c)
  UPDATE Actor
  SET
  name = "Moacyr Franco",
  birth_date = CURDATE(),
  salary = 600000,
  gender = "male"
  WHERE id = "005";

  -- Exercício 3

  -- a)
  DELETE FROM Actor WHERE name = "Fernanda Montenegro";

  -- b)
  DELETE FROM Actor
  WHERE gender = "male" AND salary > 100000;
```
