//MAP 

    // Quando um conjunto/array, passa por uma operação diferente, se torna outro conjunto
    // O map é a função utilizada para transformar um array em outro
        // - Cria um novo array
        // - Não modifica o original
        // - Ele realiza as operações em ordem


// Sintaxe 
    let array = [];
    array.map(callback, thisArg); //Callback: função a ser executada em cada elemento do Array
                                  //thisArg(opcional): valor de 'this' dentro da função de callback 
    
    callback(item, index, array);

    // MAP vs ForEach
    
    //map
    const arrayMap = [1,2,3,4,5];
    arrayMap.map((item) => item * 2); // Retornaria [2,4,6,8,10]
    //instancio o map, nos () coloco o item de callback, e depois a condição que o map trabalhara, para criar outro array


    //forEach
    const arrayForEach = [1,2,3,4,5];
    arrayForEach.forEach((item) => item * 2); // Retornaria undefined - Nesse caso, o array retornaria se fosse colocado uma const junto
    const arrayForEachCerto =  arrayForEach.forEach((item) => item * 2);
    //instancio o map, nos () coloco o item de callback, e depois a condição que o map trabalhara, para criar outro array


