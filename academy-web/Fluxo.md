# Fluxo de Criação de Item

## Diagrama de Execução

Navegador 
  ↓ (O utilizador preenche o formulário e clica em "Criar item" no browser)
NewItemForm 
  ↓ (O componente executa a função de submissão no lado do cliente)
api.ts 
  ↓ (Envia um pedido HTTP POST via fetch para o endpoint da API)
HTTP POST 
  ↓ (O protocolo transfere os dados via rede para a porta onde a API .NET escuta)
ItemsController 
  ↓ (O controlador ASP.NET Core recebe a rota e valida os dados de entrada DTO)
ItemService 
  ↓ (A camada de serviço processa a lógica de negócio associada)
DbContext 
  ↓ (O Entity Framework Core traduz o objeto C# para uma operação de base de dados)
SQL 
  ↓ (Gera e executa a instrução INSERT em linguagem SQL)
PostgreSQL 
  ↓ (O motor da base de dados persiste o registo fisicamente nas tabelas)
Resposta 201 (Created) 
  ↓ (A API devolve o sucesso e os dados criados de volta ao cliente)
router.refresh() 
  ↓ (O Next.js invalida a cache e força a revalidação dos dados no servidor)
ItemsPage 
  ↓ (O Server Component volta a executar o ciclo de renderização no servidor)
GET 
  ↓ (Faz um novo pedido para ir buscar a lista atualizada de itens à base de dados)
Lista Atualizada
  ↓ (O ecrã renderiza os itens atualizados no navegador do utilizador)