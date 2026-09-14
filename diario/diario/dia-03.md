Dia 09/09/2026
Etapa 2 - Primeiro programa em TypeScript 
-Hoje eu aprendi a criar um projeto Node/typescript, rodando um arquivo (.ts) pelo terminal.
- Nesse exercicio consegui contruir uma calculadora de preço, e nela usei FUNCTION , VARIAVEIS , ARRAY[], executei  no terminal o comando (npx tsx price-calculator.ts).
-Ainda estou tendo dificuldades em fazer uma estrutura completa com funções e variaveis .Nesse prjeto tive problema em trocar de pasta para fazer o commit então usei o comando no terminal (cd ..)
*/O conceito principal do dia foi entender a linguagem JavaScrit com o Node.js.O TypeScript com tipos: ele avisa erros e mostra antes de rodar. Entender tambem sobre o (npm) que é um gerenciador de pacotes, instala bibliotecas na pasta node_modules e anota tudo no package.jon. Usei tipos básicos: number, string, boolean e arrays. função: recebe entradas , faz algo e devolve um resultado (return).
---
---
1.O que o try/catch está fazendo no caso 5? O que aconteceria sem ele?
ele pega o valor lançado pela função quando é passado o valor invalido , o  catch pega a menssagem de erro e exibe no console de forma controlada. // Sem ele  o erro não seria tratado e a execução de todo o programa seria interrompida imediatamente!
--
--
2.Por que cupom?: string tem um ? O que acontece se você chamar calcularTotal([10]) sem passar cupom?
-
A interrogação indica que o parâmetro é opcional. Isso significa que o tipo da variável passa a ser string | undefined .
-
A função aplicarCupom vai verificar se undefined === "BRS10", a condição dará falsa, e ela retornará o valor normal sem aplicar nenhum desconto.
--
3.Para que serve o .gitignore e o que aconteceria se você commitasse o node_modules?
Serve para instruir o Git a ignorar arquivos e pastas específicos.
Se commitasse node_modules: O repositório ficaria extremamente pesado e lento para clonar/fazer push
--
4.Qual a diferença entre const e let?
const : Usado para declarar variáveis cujo valor não mudará ao longo da execução.
let: Usado para variáveis que precisam mudar de valor.