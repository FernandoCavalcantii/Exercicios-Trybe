UPDATE
  sakila.film
SET
  rental_rate = (
    CASE
      WHEN length BETWEEN 0
      AND 100 THEN 10
      WHEN length > 100 THEN 20
    END
  )