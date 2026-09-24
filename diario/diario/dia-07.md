dia 24/09/2026
etapa-6 React dentro do Next.js: a tela de catálogo

Aprendi nessa aula criar um projeto Next.js e rodar o servidor de desenvolvimento http://localhost:3000/:
Escrever componentes com props e state, reagir a eventos e renderizar listas. Construir a tela de catálogo com busca,filtro,ordenação e favoritar.

1. O que acontece quando chamas setBusca(...)? Por que a lista redesenha?Quando chamas setBusca(...), estás a alterar o valor guardado na variável de estado busca.   O React deteta imediatamente que houve uma alteração num state e, por causa disso, re-renderiza (executa novamente) o componente Catalog.   Como o código é executado de novo, o filtro (skins.filter(...)) é recalculado com o novo termo de pesquisa, fazendo com que a lista de skins seja atualizada e redesenhada no ecrã quase instantaneamente. 

  2. Por que a key é obrigatória no .map de componentes?A key serve como um identificador único para cada elemento gerado numa lista.   O React utiliza a key para otimizar a renderização: quando algo muda na lista (como filtrar ou favoritar), o React sabe exatamente qual o item específico que foi alterado, adicionado ou removido, em vez de ter de destruir e recriar todos os elementos da lista do zero.
  
  3. Por que o Catalog.tsx precisa de "use client" e o SkinCard.tsx não precisa?O Catalog.tsx utiliza hooks de estado (useState) e gere interações dinâmicas do utilizador (como a barra de pesquisa, os filtros e os favoritos). No Next.js App Router, qualquer componente que utilize estados ou interações do browser precisa obrigatoriamente da diretiva "use client" no topo.   O SkinCard.tsx é um componente puramente visual que se limita a receber dados através de props e a exibi-los no ecrã.  
  
   4. O que é uma prop e o que é um state? Dê um exemplo de cada neste código.
   prop (Propriedade): São dados passados de um componente pai para um componente filho. Funcionam como argumentos de leitura; o filho recebe-os, mas não os pode alterar diretamente.

   Exemplo no código: Em Catalog.tsx, quando passamos dados para o componente filho através de skin={skin} ou favorito={favoritos.includes(skin.id)}.   state (Estado): São dados geridos internamente por um componente que podem mudar ao longo do tempo devido a ações do utilizador. Quando o state muda, o componente atualiza-se e redesenha-se automaticamente.

   Exemplo no código: const [busca, setBusca] = useState("") ou const [favoritos, setFavoritos] = useState<number[]>([]) criados no Catalog.tsx.   




1. Por que razão favoritos é um state e skins não é?

favoritos é um state (useState): Porque é um dado que muda ao longo do tempo com a interação do utilizador. Quando clicas num botão para favoritar ou desfavoritar uma skin, a aplicação precisa de se lembrar dessa alteração e re-renderizar o ecrã imediatamente para mostrar a estrela preenchida ou vazia. O state serve exatamente para guardar dados dinâmicos e reativos.

skins NÃO é um state: Porque a lista de skins vem de uma fonte estática (o ficheiro skins.ts) e não muda através de ações na interface do utilizador. Ela funciona apenas como uma lista de dados fixos ou constantes que a aplicação lê para exibir no catálogo. Não precisamos de re-renderizar o componente por causa de alterações nas skins em si, pois elas são sempre as mesmas.

2. Por que razão o FilterBar não pode ter o seu próprio useState de busca?

Elevating State (Elevação de Estado): No nosso catálogo, o valor da busca não serve apenas para o input mostrar o texto que o utilizador escreve; ele é necessário no componente Catalog para conseguir filtrar a matriz skins antes de passá-la para o componente SkinCard.  
 Se o FilterBar guardasse o busca num useState interno dele próprio, o Catalog (que está acima dele na hierarquia) ficaria sem saber o que foi escrito e não conseguiria filtrar a lista de produtos. 
   Ao mantermos o state no Catalog e passá-lo por props, garantimos que o componente pai tem acesso ao valor da pesquisa para realizar a filtragem correta, enquanto o FilterBar serve apenas como um componente controlado que exibe e recolhe essa informação.   