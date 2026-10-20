Dia 20/10/2026
Etapa-07 - Rotas no Next.js: listagem e detalhe

Nessa aula aprendi criar rotas com pastas , entender oque roda no servidor e o que roda no navegador (Sever vs Client Components). Tratar os estados de carregamento e "não encontrado".

CHECKPOINT-

 1. Por que é que o ItemsPage pode ser async e o Catalog não pode?
  O ItemsPage é um Server Component (corre no servidor por padrão no App Router), o que permite que a função seja assíncrona (async) para buscar dados diretamente antes de enviar o HTML pronto para o navegador. Já o Catalog é um Client Component (utiliza "use client" para gerir estados interativos como useState), e os componentes do cliente no React não podem ser assíncronos porque a renderização no browser precisa de ser síncrona. 
  
  2.  O que é que o params contém em /items/7? Por que é que ele é uma Promise?
   O params contém um objeto com os parâmetros dinâmicos da rota, especificamente { id: "7" }. Ele é uma Promise nas versões mais recentes do Next.js para permitir que o sistema resolva os parâmetros de forma assíncrona no servidor, exigindo a utilização de await params para aceder aos seus valores. 
   
   3.   Se precisasses de um botão "Favoritar" na página de detalhe, o que teria de mudar?
    Como a página de detalhe (ItemPage) é um Server Component (que não suporta estados nem eventos de clique como onClick), teríamos de extrair a lógica interativa para um componente separado do tipo Client Component (marcado com "use client", como um FavoriteButton) e importá-lo dentro da página de detalhe.