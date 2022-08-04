-- 01
DELETE FROM
  sakila.actor
WHERE
  first_name = 'KARL';
-- 03
DELETE FROM
  sakila.film_text
WHERE
  description LIKE '%saga%';
-- 04
  TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;
-- 05