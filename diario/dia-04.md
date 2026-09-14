dia 14/09/2026
Etapa 3 - Arrays, objetos e funções: o catálogo de skins 

Aprendi a criar uma função com um tipo de lista de produtos e valores, Nela consegui consultar os nomes , valores , descontos e disponibilidade do produto.



1-qual a diferença entre filter e find? E entre o map e forEach?

filter(): Cria e retorna um novo array contendo todos os elementos do array original que passam no teste implementado pela função de condição (retornam true).
find(): Percorre o array original e retorna o primeiro elemento que satisfaz a condição informada, ele retorna (undefined).

 o .map() transforma cada item e retorna um novo array do mesmo tamanho, o .forEach() apenas percorre os dados existentes sem gerar nenhuma estrutura de saída.

2-Porque applyDiscount deve devolver uma lista nova em vez de alterar a original? Pense no que aconteceria numa tela de catálogo.

é crucial para evitar bugs de lógica e garantir que a interface de um sistema funcione de forma previsível.
Descontos acumulados por engano,Falhas de atualização na interface (UI)


3-O que o ?. faz em findByName(...)?.price?
Se a função encontrar a skin, ele lê a propriedade .price normalmente.
Se a função não encontrar nada (retornando undefined), o operador interrompe a leitura na mesma hora e devolve undefined como resultado final, sem travar ou derrubar a aplicação.

4- O que significa export na frente do tipo e das funções?
export serve para tornar um tipo, constante ou função público, permitindo que outros arquivos do seu projeto possam importá-lo e utilizá-lo.