DROP SCHEMA IF EXISTS Albuns;
CREATE DATABASE Albuns;
USE Albuns;
CREATE TABLE Album(
  album_id INT PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(50) NOT NULL,
  preco DECIMAL(10, 2) NOT NULL,
  estilo_id INT NOT NULL,
  artista_id INT NOT NULL,
  FOREIGN KEY (estilo_id) REFERENCES Estilo_Musical(estilo_id),
  FOREIGN KEY (artista_id) REFERENCES Artista(artista_id)
) ENGINE = InnoDB;
CREATE TABLE Artista(
  artista_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL
) ENGINE = InnoDB;
CREATE TABLE Estilo_Musical(
  estilo_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL
) ENGINE = InnoDB;
CREATE TABLE Cancao(
  cancao_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL,
  album_id INT NOT NULL,
  FOREIGN KEY (album_id) REFERENCES Album(album_id)
) ENGINE = InnoDB;
INSERT INTO
  Artista (nome)
VALUES
  ('Justin'),
  ('Akon');
INSERT INTO
  Estilo_Musical (nome)
VALUES
  ('Pop'),
  ('Rap');
INSERT INTO
  Album (titulo, preco, estilo_id, artista_id)
VALUES('Justin Never Say Never', 250.00, 1, 1),
  ('Akon City', 500.50, 2, 2);
INSERT INTO
  Cancao (nome, album_id)
VALUES
  ('Never Say Never', 1),
  ("Don't Matter ", 2);
-- Execicio 3 fixação abaixo
  DROP DATABASE IF EXISTS normalization;
CREATE DATABASE normalization;
CREATE TABLE normalization.Funcionario_info (
    Info_id INT PRIMARY KEY AUTO_INCREMENT,
    Email varchar(300) NOT NULL,
    Contato varchar(300) NOT NULL
  ) ENGINE = InnoDB;
INSERT INTO
  normalization.Funcionario_info (Email, Contato)
VALUES
  ('jo@gmail.com', '(35)998552-1445'),
  (
    'andre1990@gmail.com',
    '(47)99522-4996'
  ),
  (
    'cindy@outlook.com',
    '(33)99855-4669'
  ),
  (
    'fernandamendes@yahoo.com',
    '(33)99200-1556'
  );
CREATE TABLE normalization.Funcionario (
    Funcionario_id INT PRIMARY KEY AUTO_INCREMENT,
    Nome varchar(300) NOT NULL,
    Sobrenome varchar(300) NOT NULL,
    Info_id INT NOT NULL,
    DataCadastro DATETIME NOT NULL,
    FOREIGN KEY (Info_id) REFERENCES Funcionario_info(Info_id)
  ) ENGINE = InnoDB;
INSERT INTO
  normalization.Funcionario (
    Funcionario_id,
    Nome,
    Sobrenome,
    Info_id,
    DataCadastro
  )
VALUES
  (
    12,
    'Joseph',
    'Rodrigues',
    1,
    '2020-05-05 08:50:25'
  ),
  (
    13,
    'André',
    'Freeman',
    2,
    -- Atenção aqui, tirei a hora, vamos ver se funciona ao criar a tabela.
    '2020-02-05' -- Funcionou! Como a coluna é DATETIME, a hh:mm:ss ficou: "2020-02-05 00:00:00".
  ),
  (
    14,
    'Cíntia',
    'Duval',
    3,
    '2020-05-05 10:55:35'
  ),
  (
    15,
    'Fernanda',
    'Mendes',
    4,
    '2020-05-05 11:45:40'
  );
CREATE TABLE normalization.Setor (
    Setor_id INT PRIMARY KEY AUTO_INCREMENT,
    Setor varchar(300) NOT NULL
  ) ENGINE = InnoDB;
INSERT INTO
  normalization.Setor (Setor)
VALUES
  ('Administração'),
  ('Vendas'),
  ('Operacional'),
  ('Estratégico'),
  ('Marketing');
CREATE TABLE normalization.Funcionario_setor (
    Funcionario_id INT NOT NULL,
    Setor_id INT NOT NULL,
    FOREIGN KEY (Funcionario_id) REFERENCES Funcionario(Funcionario_id),
    FOREIGN KEY (Setor_id) REFERENCES Setor(Setor_id),
    CONSTRAINT PRIMARY KEY(Funcionario_id, Setor_id)
  );
INSERT INTO
  normalization.Funcionario_setor (Funcionario_id, Setor_id)
VALUES
  (12, 1),
  (12, 2),
  (13, 3),
  (14, 2),
  (14, 4);