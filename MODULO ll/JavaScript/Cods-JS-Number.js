//Inteiros ou decimais

//Usando modulos %
var num = 100;
console.log(num % 2);
    // Retornara 0, pois 100/2 = 50 e não tem resto, se fosse por ex por 3, retornaria 1.


//MAth    
Math.valor /* Usado para pegar um valor de uma expressão matematetica, é uma biblioteca*/
let numPI = Math.PI;
console.log(numPI); // Retorna o numero 3,1415... - Resultado da divisão de PI 

//Usando o math para arrendondar numeros
Math.floor('variavel'); 

let resultado = 5 / 3; // que daria 1,666666
console.log(Math.floor(resultado));// retorna 1 

Math.ceil('variavel'); //Arredonda para cima

console.log(Math.ceil(resultado)); // retorna 2 


//Converter number para string
let num = 10; //aqui ele é do tipo number
num.toString(); // aqui ele é convertido para string, porém ainda sera exibido 10

