dia 20/09/2026
ETAPA-5 SQL com PostgreSQL 

Hoje eu aprendi sobre Consultas Avançadas e Junções: Pratiquei a utilização de JOIN e LEFT JOIN para cruzar dados entre múltiplas tabelas. Funções de Agregação e Relatórios: Utilizar SUM, COUNT, AVG e ROUND para calcular totais por pedido, itens mais vendidos e itens nunca comprados.

 Integridade Referencial e Restrições: Compreendi o papel essencial das chaves estrangeiras (Foreign Keys) na proteção contra dados órfãos, validando-as na prática ao tentar apagar um utilizador com pedidos ativos.

Controle de Transações: Apliquei blocos de transação (BEGIN e COMMIT) para garantir operações atómicas e seguras na base de dados.


1- O que uma chave estrangeira protege? O que aconteceu quando você tentou apagar o usuário 1?
chave estrangeira (Foreign Key) protege a integridade referencial da base de dados.
Quando tentaste apagar o utilizador 1, o PostgreSQL bloqueou a operação e deu erro, porque a Ana tem pedidos associados a ela na tabela

2- Qual a diferença entre JOIN e LEFT JOIN? Em qual consulta isso fez diferença?
O JOIN (ou INNER JOIN) traz apenas os registos que têm correspondência exata em ambas as tabelas.
O LEFT JOIN traz todos os registos da tabela da esquerda (a principal), mesmo que não tenham correspondência na tabela da direita (nestes casos, preenche com NULL).
Fez diferença na consulta para listar todos os utilizadores e a respetiva contagem de pedidos

3- Por que unit_price é gravado em order_items se o preço já está em items? (Pense: e se o preço do item mudar amanhã?)
Serve para histórico e consistência financeira. Se o preço de uma skin mudar no catálogo amanhã, os pedidos antigos que os clientes já fizeram precisam de manter o preço exato que foi pago no momento da compra, e não o preço atualizado.

4- O que aconteceria se, no bônus, o INSERT do pedido funcionasse e o INSERT do item falhasse sem transação?
Ficaria um registo inconsistente na base de dados: um pedido criado na tabela orders sem nenhum item associado na tabela order_items (um pedido vazio ou "órfão"). A transação (BEGIN/COMMIT) serve exatamente para evitar isto, garantindo que ou tudo é executado com sucesso, ou nada é gravado.

