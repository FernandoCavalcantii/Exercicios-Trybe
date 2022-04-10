DELETE FROM
  Pixar.BoxOffice
WHERE
  movie_id IN (2, 10);
--
DELETE FROM
  Pixar.Movies
WHERE
  director = 'Andrew Staton';