SELECT 
  regiao AS 'Regiao',
  SUM(populacao) AS Total
FROM estados
GROUP BY regiao
ORDER BY Total DESC;

SELECT 
  SUM(populacao) AS Total
FROM estados;

SELECT
  AVG(populacao) AS Media
FROM estados;