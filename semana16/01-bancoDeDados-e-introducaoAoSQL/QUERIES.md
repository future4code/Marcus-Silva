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

-- Exercício 5

CREATE TABLE Movies (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    sinopse TEXT(255) NOT NULL,
    release_date DATE NOT NULL,
    rating FLOAT NOT NULL
);

INSERT INTO Movies (id, name, sinopse, release_date, rating)
VALUES(
	"001",
    "Se Eu Fosse Você",
	"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento.
    Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006/01/06",
    7
);

INSERT INTO Movies (id, name, sinopse, release_date, rating)
VALUES(
	"002",
    "Doce de Mãe",
    "Sinopse: `Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões.
    A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha,
    anuncia que vai se casar e não poderá mais morar com ela.",
    "2012/12/27",
    10
);

INSERT INTO Movies (id, name, sinopse, release_date, rating)
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates.
    A vida de abusos acaba por acarretar sua morte precoce.",
    "2017/11/02",
    8
);

-- a)
SELECT id, name, rating from Movies WHERE id = "003";

-- b)
SELECT name from Movies WHERE name = "Doce de Mãe";

-- c)
SELECT id, name, sinopse from Movies WHERE rating > 7;

-- Exercício 7

-- a)
SELECT * FROM Movies WHERE name LIKE "%vida%";

-- b)
SELECT * FROM Movies WHERE name LIKE "%vida%" OR sinopse LIKE "%vida%";

-- c)
SELECT * FROM Movies WHERE release_date < "2021-11-23";

-- d)
SELECT * FROM Movies
WHERE release_date < CURDATE() AND
      (name LIKE "%quer%" OR
      sinopse LIKE "%quer%") AND rating > 7;

```
