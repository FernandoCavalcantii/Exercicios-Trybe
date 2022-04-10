-- Exercício 8
UPDATE
  Pixar.BoxOffice
SET
  rating = 9
WHERE
  domestic_sales > 400000000;
-- Exercício 9
UPDATE
  Pixar.BoxOffice
SET
  rating = 6.0
WHERE
  domestic_sales < 300000000
  AND international_sales > 200000000;
-- Exercício 10
DELETE FROM
  Pixar.BoxOffice
WHERE
  movie_id IN (1, 6, 7, 8, 9);
DELETE FROM
  Pixar.Movies
WHERE
  length_minutes < 100;