DIA 15/09/2026
Etapa-4 HTTP,APS E JSON

Nessa aula  eu aprendi a enviar requisições GET e POST para uma API e ler a resposta .Tambem conheci os principais  status codes 200,201,400,401,404 e 500 e seus significados!


1- O que muda entre um GET e em POST , além do nome? onde vão os dados em cada um ?

O método GET solicita a representação de um recurso específico. Requisições utilizando o método GET devem retornar apenas dados.

O método POST é utilizado para submeter uma entidade a um recurso específico, frequentemente causando uma mudança no estado do recurso ou efeitos colaterais no servidor.

GET (Na URL): Os dados são anexados diretamente na URL da requisição.

POST (No Corpo da Requisição): Os dados são enviados dentro do corpo (body) da requisição HTTP, separados da URL. Eles ficam ocultos da barra de endereços.

2- O que await está esperando em await fetch(...)? Porque a função precisa ser async?

Quando você faz um fetch(), ele não traz os dados instantaneamente (o servidor está em outro lugar, precisa processar). -await: Ele diz para a execução do código: "Pare aqui e espere essa Promessa ser resolvida

Marcar uma função como async automaticamente faz com que ela retorne uma Promise

3- Se o navegador monstra 404, o problema pode está no front end? Dê um exemplo: 

Se ele encontra, devolve o código 200 OK junto com o conteúdo.

Se ele não encontra, ele retorna o código 404 Not Found.

O ponto importante é: o servidor respondeu com sucesso, mas o conteúdo pedido não existe lá.


4-O que é Content-type e poruqe o Post precisa dele?

O cabeçalho Content-Type é utilizado para indicar o tipo de arquivo do recurso.Em respostas, o Content-Type diz para o client qual é o tipo de conteúdo que a resposta, de fato, tem.
/ O método POST envia dados dentro do corpo (body) da requisição Como esses dados não têm um formato fixo, o Content-Type funciona como um "rótulo" ou "manual de instruções" para o servidor saber exatamente como ler o que você mandou.
