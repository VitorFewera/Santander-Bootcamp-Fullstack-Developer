// arrow fuction 
    //Um dos pontos do arrow function é diminuir o tamanho do codigo, ex:

    const helloWorld = function(){
        return "Hello World";
    }

    // Com o Arrow Function, podemos diminuir um pouco mais esse cod

    const helloWorld2 = () =>{
        return "hello World";
    }

    // Da para reduzir mais ainda 

    const helloWorld3 = () => "hello World"; // Nesse caso, como a função é pequena, nao precisa do return


    //Caso Exista apenas uma linha, pode dispensar a chaves e o return.
    // Caso exsita apenas um parametro, pode dispensar os parenteses.

    const somaAF = (a,b) => a + b;
    const somaA = a => a;

    console.log(somaAF(5,5));

    //ArrowFunction nao faz hoisting - Chamar uma variavel antes de ser declarada
/*
    somaH(2,5);

    const somaH = (a,b) => a+b;
    console.log(somaH); // da erro 

*/

//Outras restrições para Arrow Function
    //"this" sempre será o objejto global. Métodos para modificar seu valor não irão funcionar;
    //Não existe o objeto "arguments".
    // - O construtur(ex: new MeuObjeto()) tambem não pode ser utilizado.