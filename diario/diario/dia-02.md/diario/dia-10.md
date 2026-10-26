data : 26/10/2026

etapa-09/webapi

Nesse projeto aprendi a criar uma API que responde JSON em http://localhost:.../api/items. , separar Controller(receber HTTP) de Service(regra) e usar DTOs.
Devolver 200,201,400 e 404 nos casos certos e testar tudo com REST Client.


CHECKPOINT

1. Por que a regra de negócio não deve ficar no controller? O que acontece quando a mesma regra precisa valer para dois endpoints?

O problema no Controller: O controller deve preocupar-se apenas com a camada de transporte (receber o pedido HTTP, chamar o serviço e devolver a resposta). Se colocarmos a lógica de negócio nele, o código fica difícil de testar de forma isolada e acoplado à web.

Múltiplos endpoints: Se precisarmos da mesma validação ou regra noutro endpoint (por exemplo, ao criar e ao atualizar um item), teríamos de duplicar o código. Ao colocá-la no Service, ambos os endpoints chamam o mesmo método, garantindo que a regra é centralizada e reutilizada sem duplicação.

2. O que o CreatedAtAction devolve além do JSON? 

Além de devolver o objeto criado no corpo da resposta (o JSON), o CreatedAtAction adiciona um cabeçalho HTTP essencial chamado Location.

Este cabeçalho indica o endereço exato (URL) onde o novo recurso pode ser acedido (por exemplo, /api/items/3), seguindo as boas práticas das APIs REST.

3. O que aconteceria se você registrasse o ItemService como AddTransient em vez de AddSingleton, com os dados em memória?

O problema do Transient com listas em memória: Como o serviço guarda os dados numa lista interna (_items = new()), o tempo de vida do objeto importa muito.

Se usarmos AddTransient, uma nova instância do serviço é criada sempre que é injetada. Ou seja, cada pedido HTTP (um GET, um POST, etc.) criaria uma instância nova do serviço com uma lista nova em folha, fazendo com que perdesses todos os dados guardados de um pedido para o outro. O Singleton garante que a mesma instância (e a mesma lista) é mantida enquanto a aplicação estiver a correr.

4. Qual a diferença entre ItemDto e CreateItemDto? Por que não usar um só?

CreateItemDto: É usado apenas para a entrada (input) quando o cliente vai criar um item novo. Ele não tem o ID, porque quem define o ID é o servidor/serviço automaticamente.

ItemDto: É o objeto de saída (output) que já inclui o Id gerado, o nome, o preço e o estado de disponibilidade para ser devolvido ao cliente.

Por que separar? Usar DTOs separados protege o domínio de receber dados indesejados (como um cliente tentar enviar um ID forçado ao criar um registo) e garante contratos claros e seguros para cada operação da API.