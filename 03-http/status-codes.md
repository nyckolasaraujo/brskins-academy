200 OK!
(a)A solicitação foi bem-sucedida. O significado do resultado de "sucesso" depende do método HTTP:
(b)ex: uma compra de uma skin aprovada na BRSKINS!


201 Created !
(a)A requisição foi bem sucedida e um novo recurso foi criado como resultado.
(b)ex: Um cadastro feito no site para poder fazer uma compra!


400 Bad Request!
(a)O servidor não pode ou não irá processar a solicitação devido a algo que é percebido como um erro do cliente .
(b)ex:  Receber essa resposta se na hora do meu cadastro no site da BRSKINS eu digitar as informaçoes erradas.
(c)correção frontend

401 Unauthorized!
(a)Embora o padrão HTTP especifique "unauthorized", semanticamente, essa resposta significa "unauthenticated". Ou seja, o cliente deve se autenticar para obter a resposta solicitada.
(b)ex:   se eu tentasse comprar um produto na BRSKINS  sem fazer o cadastro que pedem.
(c)correção frontend

404 Not Found!
(a)O servidor não pode encontrar o recurso solicitado. No navegador, isso significa que o URL não é reconhecido.
(b)EX:Se eu fizesse um pedido errado que não existe no site .
(c)correção frontend

500 Internal Server Error
(a)O servidor encontrou uma situação com a qual não sabe lidar.
(b)ex: Queda no banco de dados durante o pagamento.
(c)correção no backend!