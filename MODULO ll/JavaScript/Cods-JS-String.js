/*
Ferramentas de Codigos:

let var e const - Declaração de variaveis
let - bloco, reatribuição, qualquer variavel, mais utilizada.
var - globlal, reatribuição, qualquer variavel, menos utilizada 
const - BLOCO, CONSTANTE, GERALMENTE USADA COM UPPERCASE
*/

let variavel = 'usar variavel';

// USOS PARA STRINGS 

typeof; - // usado para se saber o tipo da variavel, usado no console.
variavel.concat;  - //Usando para realizar uma concatenização
    let nome = "vitor";
    let sobrenome = "hugo";
    console.log(nome.concat(sobrenome));
    // Retorna vitorhugo - sem espaço no meio

nome.length // Retorna o tamanho da variavel   
    let nome = "vitor"
    console.log(nome.length);
    //retorna 5 - 5 letras em vitor

variavel[nº] // quando colocamos um numero dentro do [], retorna a posição da string, referente ao index
    let nome = "vitor";
    console.log(nome[1]);
    //Retorna "i" - lembrando que em array, as sequencias começam em 0 - 0,1,2,3 etc...

\n // Usando para dar a quebra de linha, quando precisar retornar uma frase. Cada \n pula uma linha. Logo \n \n - pulas 2 linhas.
    let frase = "Chico Xavier, \n a primeira impressora wireless."    
    console.log(frase);
    /*Retorna = Chico Xavier,
               a primeira impressora wireless. */

`${}` //usando para concatenar informações
    let nome = 'vitor';
    let sobrenome = 'hugo';
    console.log(`${nome} ${sobrenome}`);
    // Retorna vitor hugo 
    // para pular linha, basta pular linha no concatenado
    /* console.log(`${nome}
     ${sobrenome}`);*/
     /*Retorna vitor
                hugo*/

variavel.split(""); // Comando usado para separar informações, e transformar em array
        let frase = 'O problema não é se as máquinas pensam, mas se os homens fazem.';
    console.log(frase.split("")); // importante resaltar que apenas aspas, separa todas as letras que são strings
                         // se colocamos espaço, separa todos os espaços, e mostra quantas palavras.

variavel.includes("expresssão"); // Usado para saber se na variavel-string, contem determinada palavra/expressao
        var frase = 'O problema não é se as máquinas pensam, mas se os homens fazem.';
        console.log(frase.includes("problema"));
            // Retorna true, pois tem a palavra pesquisada. 

variavel.startsWith(''); // Usado para saber se uma strings começa com determinada informação.
        var frase = 'O problema não é se as máquinas pensam, mas se os homens fazem.';
        console.log(frase.startsWith('O'));
            //Retorna true - pois a string começa com O
// da mesma forma, temos 
variavel.endsWith(""); // Usado para informar se a string termina com a expressão desejada.
    

variavel.replace("expressão que tem na string", "Expressão que sera colocada no lugar");
    let frase = "O problema não é se as máquinas pensam, mas se os homens fazem."
    console.log(frase.replace("pensam", "trabalham"));
    /* O replace troca um item por outro, usado para formata de datas e horas, e muitos outros,
       é possivel tambem pegar uma informação, alterar com o replace, e coloca-la em uma outra variavel*/








