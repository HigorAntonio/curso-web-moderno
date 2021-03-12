ALTER TABLE empresas MODIFY cnpj VARCHAR(14);

INSERT INTO empresas
  (nome, cnpj)
VALUES 
  ('Bradesco', 99765224000151),
  ('Vale', 65567065000169),
  ('Cielo', 62406881000100);

DESC empresas;

INSERT INTO empresas_unidades
  (empresa_id, cidade_id, sede)
VALUES
  (1, 1, 1),
  (1, 2, 0),
  (2, 1, 0),
  (2, 2, 1);