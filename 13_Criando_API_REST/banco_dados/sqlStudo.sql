/* 
   ============================================================
   1. ESTRUTURA DA TABELA (DDL - Data Definition Language)
   ============================================================
*/

-- [DEFINIÇÃO]: Criação da tabela principal de produtos.
-- [DETALHE]: 'id' é automático, 'price' aceita decimais e 'category' tem valor padrão 'general'.
CREATE TABLE products (
  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  price REAL NOT NULL,
  category TEXT NULL DEFAULT 'general'
);

-- [DEFINIÇÃO]: Adicionar uma nova coluna após a tabela já existir.
-- [DETALHE]: O comando ALTER TABLE permite modificar a estrutura sem apagar os dados.
-- ALTER TABLE products ADD COLUMN quantity INTEGER NOT NULL;

-- [DEFINIÇÃO]: Remover uma coluna da tabela.
-- [DETALHE]: Nem todos os bancos de dados (como versões antigas do SQLite) suportam o DROP COLUMN diretamente.
-- ALTER TABLE products DROP COLUMN quantity;

-- [DEFINIÇÃO]: Renomear colunas existentes.
-- [DETALHE]: Útil para corrigir erros de digitação ou mudar a semântica (ex: de 'name' para 'description').
-- ALTER TABLE products RENAME COLUMN name TO description;
-- ALTER TABLE products RENAME COLUMN description TO name;

-- [DEFINIÇÃO]: Renomear a tabela inteira.
-- [DETALHE]: Altera o nome de 'products' para 'itens' e vice-versa.
-- ALTER TABLE products RENAME TO itens;
-- ALTER TABLE itens RENAME TO products;

-- [DEFINIÇÃO]: Excluir a tabela permanentemente.
-- [DETALHE]: CUIDADO! Este comando apaga a estrutura e todos os dados salvos nela.
-- DROP TABLE products;


/* 
   ============================================================
   2. MANIPULAÇÃO DE DADOS (DML - Data Manipulation Language)
   ============================================================
*/

-- [DEFINIÇÃO]: Inserir novos registros na tabela.
-- [DETALHE]: No primeiro comando, 'category' assumirá o padrão 'general'. No segundo, é definido como 'acessorio'.
-- INSERT INTO products (name, price) VALUES ('Fone', 50);
-- INSERT INTO products (name, price, category) VALUES ('Teclado', 550, 'acessorio');

-- [DEFINIÇÃO]: Atualizar dados de um registro já existente.
-- [DETALHE]: O uso do 'WHERE id = 1' é obrigatório para evitar que todos os produtos do banco sejam alterados.
-- UPDATE products SET name = 'Monitor', price = 1281 WHERE id = 1;

-- [DEFINIÇÃO]: Excluir um registro específico.
-- [DETALHE]: O 'WHERE id = 3' garante que apenas o produto com esse ID seja removido.
-- DELETE FROM products WHERE id = 3;


/* 
   ============================================================
   3. CONSULTAS E FILTROS (DQL - Data Query Language)
   ============================================================
*/

-- [DEFINIÇÃO]: Seleção básica de dados.
-- [DETALHE]: '*' traz todas as colunas; especificar 'name' traz apenas os nomes.
-- SELECT * FROM products;
-- SELECT name FROM products;

-- [DEFINIÇÃO]: Filtro de desigualdade (<>).
-- [DETALHE]: Busca todos os produtos cujo preço não seja exatamente 50.
SELECT * FROM products WHERE price <> 50;

-- [DEFINIÇÃO]: Filtros de comparação (Maior ou igual / Menor ou igual).
-- [DETALHE]: Filtra produtos baseando-se em um teto ou piso de preço.
SELECT * FROM products WHERE price >= 550;
SELECT * FROM products WHERE price <= 550;

-- [DEFINIÇÃO]: Filtro com operador lógico AND (E).
-- [DETALHE]: Retorna registros que atendem às DUAS condições ao mesmo tempo (entre 50 e 1000).
SELECT * FROM products WHERE price > 50 AND price < 1000;

-- [DEFINIÇÃO]: Filtro com operador lógico OR (OU).
-- [DETALHE]: Retorna registros que atendam a PELO MENOS UMA das condições.
SELECT * FROM products WHERE price > 50 OR price < 1000;

-- [DEFINIÇÃO]: Filtro com operador BETWEEN (ENTRE).
-- [DETALHE]: Uma forma mais limpa de escrever o intervalo de preços (inclui os valores 400 e 1200).
SELECT * FROM products WHERE price BETWEEN 400 AND 1200;

-- [DEFINIÇÃO]: Filtros complexos combinando AND e OR.
-- [DETALHE]: O SQL processa o AND primeiro. Neste caso, busca (entre 600 e 1000) OU qualquer 'acessorio'.
SELECT * FROM products WHERE price > 600 AND price < 1000 OR category = 'acessorio';

-- [DEFINIÇÃO]: Filtros com prioridade usando parênteses.
-- [DETALHE]: Os parênteses forçam o banco a validar os blocos isoladamente, garantindo maior precisão na lógica.
SELECT * FROM products WHERE (price > 100 AND price < 1000) AND (category = 'acessorio');

/* 
   ============================================================
   4. FILTROS AVANÇADOS (Operador IN)
   ============================================================
*/

-- [DEFINIÇÃO]: Filtra registros que correspondam a uma lista de valores específicos.
-- [DETALHE]: O 'IN' funciona como vários 'OR' combinados, facilitando a busca por múltiplos IDs ou nomes.
SELECT * FROM products WHERE price IN (180, 650);
SELECT * FROM products WHERE category IN ('acessorio');


/* 
   ============================================================
   5. ORDENAÇÃO E LIMITES (ORDER BY e LIMIT)
   ============================================================
*/

-- [DEFINIÇÃO]: Ordena os resultados de forma Decrescente (DESC) ou Crescente (ASC).
-- [DETALHE]: Útil para ver do mais caro para o mais barato ou em ordem alfabética.
SELECT * FROM products WHERE category IN ('acessorio') ORDER BY price DESC;
SELECT * FROM products WHERE category IN ('acessorio') ORDER BY price ASC;

-- [DEFINIÇÃO]: Limita a quantidade de linhas retornadas pela consulta.
-- [DETALHE]: O 'LIMIT 3' combinado com 'ORDER BY' permite criar rankings (ex: os 3 produtos mais caros).
SELECT * FROM products WHERE category IN ('acessorio') ORDER BY price DESC LIMIT 3;


/* 
   ============================================================
   6. FUNÇÕES DE AGREGAÇÃO (Matemática no Banco)
   ============================================================
*/

-- [DEFINIÇÃO]: Conta o número total de registros.
-- [DETALHE]: Pode ser usado puro ou com filtros (WHERE) para saber quantos itens atendem a um critério.
SELECT COUNT(*) FROM products;
SELECT COUNT(*) FROM products WHERE price >= 200;

-- [DEFINIÇÃO]: Soma os valores de uma coluna específica.
-- [DETALHE]: Calcula o valor total de estoque ou o somatório de preços de uma categoria.
SELECT SUM(price) FROM products WHERE price >= 200;

-- [DEFINIÇÃO]: Calcula a média aritmética dos valores.
-- [DETALHE]: Soma todos os preços e divide pela quantidade de itens encontrados.
SELECT AVG(price) FROM products WHERE price >= 200;


/* 
   ============================================================
   7. APELIDOS E AGRUPAMENTOS (AS e GROUP BY)
   ============================================================
*/

-- [DEFINIÇÃO]: Renomeia o título de uma coluna no resultado da consulta usando 'AS'.
-- [DETALHE]: Deixa o relatório mais legível para o usuário final (ex: muda 'COUNT(*)' para 'Valor Total').
SELECT COUNT(*) AS 'Valor Total' FROM products;

-- [DEFINIÇÃO]: Agrupa os dados por uma coluna específica e executa cálculos para cada grupo.
-- [DETALHE]: Neste exemplo, ele conta quantos produtos existem em CADA categoria e ordena do menor para o maior.
-- Observação: Ao usar GROUP BY, o ideal é selecionar a coluna agrupada (category) junto com a contagem.
SELECT category, COUNT(*) as 'Valor Total' 
  FROM products 
  GROUP BY category 
  ORDER BY 'Valor Total' ASC;