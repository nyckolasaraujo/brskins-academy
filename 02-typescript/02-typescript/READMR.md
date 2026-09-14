AS funções utilizam os metodos de array do JavaScript/ TypeScript:

1- function availableItems()

// Utiliza o Método .filter() que percorre o array original e retorna um novo array contendo apenas os elementos que passam na condição booleana informada (s.available).

2- function findByName()
 
// Utiliza o método .find(), que percorre o array e retorna o primeiro elemento que satisfaça a condição de busca (includes). Caso nenhum item corresponda, ele retorna undefined. 

3- function priceRange() 

//utiliza o método .filter(), selecionando e agrupando em um novo array todos os itens cujos preços atendem simultaneamente à condição de limite mínimo e máximo.

4- function applyDiscount()

//Utiliza o método .map(), que cria um novo array transformando cada elemento do array original (neste caso, recalculando o valor da propriedade price de cada skin sem modificar a original).

5- function averagePrice()

//Utiliza o método .reduce(), que serve para acumular ou reduzir os múltiplos valores de um array em um único resultado final ( acumulando a soma total dos preços para em seguida calcular a média).

6- function sortByPrice()

//Utiliza o método .sort(), que reordena os elementos do array com base em uma função de comparação matemática (a.price - b.price).

*Problemas:
tive um problema com meu código que não conseguia achar o valor exato , constava apenas "undefined"   por erro de digitação de espaço no codigo!.