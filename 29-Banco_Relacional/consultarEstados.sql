SELECT * FROM estados;

SELECT nome, sigla FROM estados;
SELECT sigla, nome AS 'Nome do Estado' FROM estados;

SELECT nome, sigla FROM estados
WHERE regiao = 'SUL';

SELECT nome, regiao FROM estados
WHERE populacao >= 10
ORDER BY populacao DESC;