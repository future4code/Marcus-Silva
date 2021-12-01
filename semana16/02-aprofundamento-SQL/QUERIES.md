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

  -- Exercício 4

  -- a)
  SELECT MAX(salary) FROM Actor;

  -- b)
  SELECT MIN(salary) FROM Actor WHERE gender = "female";

  -- c)
  SELECT COUNT(*) FROM Actor WHERE gender = "female";

  -- d)
  SELECT SUM(salary) FROM Actor;

  -- Exercício 5

  -- a)
  SELECT COUNT(*), gender
  FROM Actor
  GROUP BY gender;

  -- b)
  SELECT id, name FROM Actor ORDER BY name DESC;

  -- c)
  SELECT * FROM Actor ORDER BY salary ASC;

  -- d)
  SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

  -- e)
  SELECT AVG(salary), gender FROM Actor
  GROUP BY gender;

  -- Exercício 6

  -- a)
  ALTER TABLE Movies
  ADD playing_limit_date DATE;

  SELECT * FROM Movies;

  -- c)
  UPDATE Movies SET playing_limit_date = CURDATE() WHERE id = "001";

  -- d)
  DELETE FROM Movies WHERE id = "002";

  UPDATE Movies SET sinopse = "bla bla bla" WHERE id = "002";

  -- Exercício 7

  -- a)
  SELECT COUNT(*) FROM Movies WHERE rating > 7.5;

  -- b)
  SELECT AVG(rating) FROM Movies;

  SELECT * FROM Movies;

  -- c)
  SELECT COUNT(*) FROM Movies;

  -- d)
  SELECT COUNT(*) FROM Movies WHERE release_date > CURDATE();

  -- e)
  SELECT MAX(rating) FROM Movies;

  -- f)
  SELECT MAX(rating) FROM Movies;

  -- Exercicio 8

  -- a)
  SELECT * FROM Movies ORDER BY name ASC;

  -- b)
  SELECT * FROM Movies ORDER BY name DESC LIMIT 5;

  -- c)
  SELECT * FROM Movies
  WHERE release_date < CURDATE()
  ORDER BY release_date DESC
  LIMIT 3;

  -- d)
  SELECT * FROM Movies ORDER BY rating DESC LIMIT 3;
```
