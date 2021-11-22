```sql

USE `maryam-marcus-luis`;

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;
SHOW TABLES;

DESCRIBE Actor;

-- Exercício 2

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001",
  "Tony Ramos",
  4000.00,
  "1948-08-25",
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"002",
    "Glória Pires",
    12000.00,
    "1963-08-23",
    "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"007",
    "Gloria Pirex",
    12000.00,
    "1963-08-23",
    "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003",
  "Fernanda Montenegro",
  3000.00,
  "1929-10-19",
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "James Gandolfini",
  4000.00,
  "1949-04-18",
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005",
  "Juliana Paes",
  719333.33,
  "1979-03-26",
  "female"
);

-- Exercício 3

SELECT id, name, salary, birth_date, gender from Actor WHERE gender = "female";

SELECT salary from Actor WHERE name = "Tony Ramos";

SELECT * FROM Actor WHERE gender = "invalid";

SELECT id, name, salary from Actor WHERE salary > 500000;

SELECT id, name from Actor WHERE id = "002";

-- Exercício 4

SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;

SELECT * FROM Actor WHERE name LIKE "%G%" OR name LIKE "%g%";

SELECT * FROM Actor
WHERE (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR name LIKE "%g%") AND salary BETWEEN 300000 AND 900000;

```
