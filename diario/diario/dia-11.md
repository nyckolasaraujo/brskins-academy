data 28/10/2026
etapa-10-Persistindo no PostgreSQL com EF CORE

Nessa etapa aprendi a conectar a API ao PostgresSQL usando Entity Framework Core. Criamos uma migration e aplicá-la no banco e por fim trocamos a lista em memória por consultas reais, mantendo os Dtos.

CHECKPOINT

1. O que uma migration é e por que ela está versionada no Git junto com o código?

O que é: Uma migration é um arquivo de histórico gerado pelo Entity Framework Core que descreve passo a passo as alterações estruturais feitas no banco de dados (como criar tabelas, adicionar colunas ou alterar tipos de dados).

Por que está no Git: Para garantir que toda a equipe de desenvolvimento e os ambientes de homologação/produção compartilhem exatamente a mesma evolução do esquema do banco de dados. Assim, qualquer pessoa pode clonar o repositório, rodar dotnet ef database update e ter o banco sincronizado com o código que está a executar.

2. Por que o service converte Item (entidade) para ItemDto em vez de devolver a entidade?

Desacoplamento e Segurança: Evita expor diretamente a estrutura interna da base de dados para o cliente da API.

Controle: Permite ocultar propriedades sensíveis ou campos internos de auditoria, controlar exatamente quais dados são retornados e prevenir problemas de rastreamento de estado ou referências circulares do Entity Framework.

3. Por que o DbContext é Scoped e não Singleton?

Isolamento de Estado: O DbContext mantém um rastreamento interno (change tracking) das entidades consultadas ou modificadas.

Concorrência e Ciclo de Vida: Se fosse Singleton, a mesma instância seria compartilhada por todas as requisições simultâneas da aplicação, causando conflitos de concorrência, corrupção de dados e fugas de memória (memory leaks). Como Scoped, ele é criado no início de cada requisição HTTP e destruído logo após a resposta, garantindo um ciclo de vida seguro e isolado.

4. Onde a connection string de produção deveria ficar? O que acontece se alguém commitar uma senha real?

Onde deve ficar: Em ambientes de produção, dados sensíveis como a connection string e credenciais devem ser armazenados em Variáveis de Ambiente, serviços de gestão de segredos (como Azure Key Vault, AWS Secrets Manager) ou nas configurações seguras do servidor de hospedagem, nunca hardcoded nem expostos em arquivos de configuração versionados.

O que acontece se commitar uma senha real: As credenciais ficam expostas no histórico do Git. Mesmo que o commit seja revertido ou apagado depois, a senha continua gravada no histórico do repositório, permitindo que invasores ou qualquer pessoa com acesso ao código acedam diretamente ao banco de dados em produção, comprometendo totalmente a segurança do sistema (exigindo a revogação e troca imediata da senha).