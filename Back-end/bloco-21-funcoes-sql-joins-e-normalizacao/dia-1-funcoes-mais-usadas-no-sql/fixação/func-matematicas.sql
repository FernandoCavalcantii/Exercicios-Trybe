-- 1. Monte uma query que gere um valor entre 15 e 20 . Solução:
SELECT
  15 + RAND() * 5;
-- Resp trybe:
SELECT
  FLOOR(15 + (RAND() * 5));
-- 2. Monte uma query que exiba o valor arredondado de 15.75 com uma precisão de 5 casas decimais. Solução:
SELECT
  ROUND(15.75, 5);
-- Resp. Trybe
SELECT
  ROUND(15.7515971, 5);
-- 3. Estamos com uma média de 39.494 de vendas de camisas por mês. Qual é o valor aproximado para baixo dessa média?
SELECT
  FLOOR(39.494);
-- 4. Temos uma taxa de inscrição de 85.234% no curso de fotografia para iniciantes. Qual é o valor aproximado para cima dessa média?
SELECT
  CEIL(85.234);