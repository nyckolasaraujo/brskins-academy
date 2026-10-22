dia 22/10/2026
etapa-08/csharp C# básico: o dominio de pedidos

Nessa aula aprendemos a criar e rodar um projeto console em C# , Usar classes, records, List<t>, LINQ e exceções.
Modelar as regras de um pedido em código.

CHECKPOINT - RESPOSTAS!

1. Por que Item é um record e Order é uma class?
Item é um record porque representa um objeto de valor imutável (Value Object/DTO) — ele apenas carrega dados do produto e seus valores não mudam após ser criado. Os records no C# já vêm prontos com imutabilidade por padrão e comparação baseada no valor dos seus campos.

 Order é uma class porque representa uma entidade com comportamento e ciclo de vida dinâmico. O pedido muda de estado ao longo do tempo (itens são adicionados/removidos, o total é recalculado) e precisa encapsular regras de negócio internas através de métodos.

 2. O que IReadOnlyList<OrderItem> protege? Por que não expor a List diretamente?
 
Protege o encapsulamento e a integridade das regras de negócio do pedido. 
  Se expuséssemos a List<OrderItem> diretamente como pública, qualquer código de fora da classe poderia fazer um pedido.Items.Add(...) ou pedido.Items.Clear() burlando as regras de validação que criamos no método AddItem (como a verificação de disponibilidade e a trava de itens duplicados). 
    Usando IReadOnlyList, garantimos que quem está de fora apenas consulte a lista, sendo obrigado a usar os métodos públicos (AddItem, RemoveItem) para alterar os dados. 

3. Por que Price é decimal e não double?

    Porque o tipo decimal foi projetado especificamente para valores financeiros e monetários. Ele utiliza representação de ponto fixo na base 10, garantindo precisão exata sem erros de arredondamento. 
    
  O tipo double utiliza representação de ponto flutuante binário (base 2), o que pode ocasionar dízimas e imprecisões em somas de centavos (exemplo: 0.1 + 0.2 virar 0.30000000000000004).

  4. Compare itens.Where(...) com skins.filter(...): o que é igual e o que é diferente?  
  
   Resposta:O que é igual: Ambos têm o mesmo propósito funcional — filtrar os elementos de uma coleção com base em um critério booleano (predicado) retornado por uma função/expressão lambda.

   O que é diferente:
   
   Linguagem/Ecossistema: Where faz parte da biblioteca LINQ no C#, enquanto filter é um método nativo de Array no JavaScript/TypeScript.
   
   Execução (Lazy evaluation): O Where do C# é executado de forma "preguiçosa" (deferred execution) — ele não cria uma nova lista imediatamente até que você force a iteração (ex: chamando .ToList()). Já o .filter() do JavaScript/TypeScript é executado imediatamente e gera uma nova array na hora.

