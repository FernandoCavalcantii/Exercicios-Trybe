-- Exercício 1
SELECT
  IF(15 MOD 2 = 1, 'ímpar', 'par') AS 'Par ou ímpar';
-- Exercício 2
SELECT
  220 DIV 12;
-- Exercício 3
SELECT
  220 - (220 DIV 12 * 12);
-- resposta correta ex.3
SELECT
  IF(
    220 MOD 12 = 0,
    'NÃO',
    CONCAT('SIM, ', 220 MOD 12)
  );