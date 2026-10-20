# Arquitetura dos Componentes e Páginas

Abaixo está o mapeamento de execução dos componentes e páginas criados no projeto, indicando se rodam no **Servidor** (Server Component) ou no **Navegador** (Client Component).

| Componente / Página | Onde roda? | Por quê? | Poderia ser o contrário? |
| :--- | :--- | :--- | :--- |
| **Catalog** | **Navegador** (*Client*) | Gerencia o estado dos filtros (busca, ordenação, apenas disponíveis) e lista de favoritos via `useState`. | Não idealmente, pois o servidor não consegue escutar eventos de clique e digitação do usuário em tempo real. |
| **SkinCard** | **Navegador** (*Client*) | Possui o evento de clique `onClick` no botão de favoritar e depende do callback `onFavoritar`. | Não, pois necessita de interatividade direta no navegador. |
| **FilterBar** | **Navegador** (*Client*) | Manipula eventos dos inputs (`onChange`) e altera os estados passados via props (`setBusca`, `setOrdem`). | Não, pois captura e reage a entradas do usuário diretamente na tela. |
| **ItemsPage** | **Servidor** (*Server*) | É uma rota estática no App Router que simula busca de dados assíncrona (`async/await`) sem precisar de interatividade. | Pode virar Client Component se adicionarmos `"use client"`, mas perderíamos as vantagens do Server Component (como carregar dados no servidor e menor envio de JS para o cliente). |
| **ItemPage** | **Servidor** (*Server*) | É uma rota dinâmica no App Router que busca a skin por ID e pode disparar a função `notFound()` no servidor antes de renderizar. | Sim, se virasse Client Component via `"use client"`, mas o tratamento de erro e carregamento de dados teriam que ser ajustados para rodar no cliente. |
| **Loading** | **Servidor** / **Navegador** (*Ambos*) | É o componente padrão do Next.js exibido enquanto a página assíncrona resolve sua promessa. Por padrão é um Server Component simples. | Pode ser Client Component se contiver animações complexas ou estados do cliente. |

---

## Perguntas de Reflexão

### 1. Por que Server Components são a escolha padrão no App Router?
Eles reduzem o tamanho do JavaScript enviado ao navegador, melhoram o desempenho inicial de carregamento e permitem ler fontes de dados (ou bancos de dados) com segurança diretamente no servidor.

### 2. Quando devemos usar `"use client"`?
Devemos adicionar `"use client"` apenas no topo dos arquivos que necessitam de:
* Hooks do React (`useState`, `useEffect`, `useContext`).
* Listeners de eventos DOM (`onClick`, `onChange`, etc.).
* APIs exclusivas do navegador (como `localStorage`).