// Generic Types

function adicionaApendiceALista(array, valor){
    return array.map(item => item + valor);
}

adicionaApendiceALista([1,2,3], 1); // Isso em JS

//Tipando funções em TypeScript
function adicionaApendiceAListaTS<T>(array: T[], valor: T){ //Quando nao sabermos o que uma função vai receber
    return array.map(() =>  valor);                         //Geralmente, no diamante, colocamos a letra T
}      //Aqui, tem o mesmo resultado que a function em JS

adicionaApendiceAListaTS(["a","b","c"], "a");
        //O T, tem valor de any, porem aqui ele é tratado como numero
        // Por todos os itens serem numeros - Se alterarmos para Strings, o tipo dele
        // se torna uma string.