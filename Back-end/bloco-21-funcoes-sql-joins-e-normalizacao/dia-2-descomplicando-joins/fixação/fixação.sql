-- 1. Monte uma query que exiba o id do ator , nome do ator e id do filme em que ele já atuou usando as tabelas actor e film_actor .
SELECT
  a.actor_id,
  a.first_name,
  f.film_id
FROM
  sakila.actor AS a
  INNER JOIN sakila.film_actor AS f ON a.actor_id = f.actor_id;
-- 2. Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address .
SELECT
  s.first_name,
  s.last_name,
  a.address
FROM
  sakila.staff AS s
  INNER JOIN sakila.address AS a ON s.address_id = a.address_id;
-- 3. Exiba o id do cliente , nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address .
SELECT
  c.customer_id,
  c.first_name,
  c.email,
  a.address_id,
  a.address
FROM
  sakila.customer AS c
  INNER JOIN sakila.address AS a ON c.address_id = a.address_id
ORDER BY
  c.first_name DESC
LIMIT
  100;
-- 4. Exiba o nome , email , id do endereço , endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer
SELECT
  c.first_name,
  c.email,
  c.address_id,
  a.address,
  a.district
FROM
  sakila.customer AS c
  INNER JOIN sakila.address AS a ON c.address_id = a.address_id
WHERE
  a.district = 'California'
  AND c.first_name LIKE '%rene%';
-- 5. Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer .
SELECT
  c.first_name,
  COUNT(a.address_id) AS addresses_number
FROM
  sakila.customer AS c
  INNER JOIN sakila.address AS a ON c.address_id = a.address_id
WHERE
  c.active = 1
GROUP BY
  c.first_name
ORDER BY
  c.first_name DESC;
-- 6. Monte uma query que exiba o nome , sobrenome e a média de valor ( amount ) paga aos funcionários no ano de 2006. Use as tabelas payment e staff . Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT
  s.first_name,
  s.last_name,
  AVG(p.amount)
FROM
  sakila.staff AS s
  INNER JOIN sakila.payment AS p ON s.staff_id = p.staff_id
WHERE
  YEAR(p.payment_date) = 2006
GROUP BY
  s.first_name,
  s.last_name;
-- 7. Monte uma query que exiba o id do ator , nome , id do filme e título do filme , usando as tabelas actor , film_actor e film . Dica: você precisará fazer mais de um JOIN na mesma query .
SELECT
  a.actor_id,
  a.first_name,
  a.last_name,
  f_a.film_id,
  f.title
FROM
  sakila.actor AS a
  INNER JOIN sakila.film_actor AS f_a ON a.actor_id = f_a.actor_id
  INNER JOIN sakila.film AS f ON f_a.film_id = f.film_id;
--   CONTINUAR A PARTIR DE LEFT JOIN 21.2
SELECT
  CONCAT(Employee.FIRST_NAME + " " + Employee.LAST_NAME) AS Colaboradores,
  CONCAT(Manager.FIRST_NAME + " " + Manager.LAST_NAME) AS Managers
FROM
  hr.employees AS Employee
  INNER JOIN hr.employee AS Manager ON Employee.EMPLOYEE_ID = Manager.MANAGER_ID;
--   Para fixar esses conceitos, tente encontrar as seguintes informações:
  -- Queremos saber o Nome das pessoas colaboradoras e suas respectivas gerências ( manager ) cujos departamentos ( department ) são diferentes.
SELECT
  DISTINCT CONCAT(Employee.FIRST_NAME, " ", Employee.LAST_NAME) AS "Nome da Pessoa Colaboradora",
  CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome Gerente"
FROM
  employees AS Employee
  INNER JOIN employees AS Manager ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID
WHERE
  Employee.DEPARTMENT_ID <> Manager.MANAGER_ID;
-- Exercício 2
  -- Exiba o Nome e a quantidade de pessoas lideradas de cada pessoa gerente.
SELECT
  DISTINCT CONCAT(Manager.FIRST_NAME, ' ', Manager.LAST_NAME) AS Nome,
  COUNT(*) AS qntd_colaboradores
FROM
  employees AS Manager
  INNER JOIN employees AS Employee ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID
GROUP BY
  Manager.EMPLOYEE_ID;