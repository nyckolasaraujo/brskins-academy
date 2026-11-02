data 02/11/2026

Etapa 11 - O frontend conversa com a API

Nessa etapa de aprendizado conseguir fazer o Next.js buscar os itens na sua API em vez do arquivo mockado, configurar CORS e variável de ambiente.E por fim criar um item pela tela e vê-lo aparecer no banco.

CHECKPOINT :

1. Explique o erro de CORS: quem bloqueia, por que, e como a API resolve.

Quem bloqueia: O navegador (browser) do cliente.

Porquê: Por questões de segurança (política de mesma origem / Same-Origin Policy), o navegador impede que um site hospedado num domínio/porta (por exemplo, http://localhost:3000 do Next.js) faça requisições AJAX para um servidor de outro domínio/porta diferente (http://localhost:5064 da API .NET), a menos que o servidor dê permissão explícita.

Como a API resolve: Através da configuração de políticas de CORS (Cross-Origin Resource Sharing) na API .NET (no Program.cs), onde permitimos explicitamente que origens confiáveis (como o frontend em localhost:3000) possam aceder aos endpoints.

2. Quando você abre /items, quem faz a requisição para a API: o navegador ou o servidor do Next? E quando você clica em "Criar item"?

Ao abrir /items (Server Component): É o servidor do Next.js que faz a requisição diretamente à API .NET no lado do servidor durante a renderização da página.

Ao clicar em "Criar item" (NewItemForm / Client Component): É o navegador (browser) do utilizador que faz a requisição HTTP POST diretamente para a API através do cliente JavaScript.

3. Por que a URL da API não está escrita direto no código?

Porque utilizamos variáveis de ambiente (como o ficheiro .env.local). Isto permite que a aplicação seja flexível e adaptável a diferentes ambientes (desenvolvimento, homologação ou produção), onde os endereços e portas dos servidores mudam, evitando ter de alterar código manualmente de cada vez que o projeto muda de servidor.

4. Se a listagem mostra 500, onde você olha primeiro? E se mostra 404?

Se mostra 500 (Erro Interno do Servidor): Devo olhar primeiro para o terminal da API .NET para ler o log da exceção e stack trace do C#/Entity Framework (por exemplo, falha de conexão com a base de dados ou tabela inexistente).

Se mostra 404 (Não Encontrado): Devo verificar primeiro a URL/endpoint que está a ser chamada no api.ts e se a rota correspondente está corretamente mapeada no Controller da API.