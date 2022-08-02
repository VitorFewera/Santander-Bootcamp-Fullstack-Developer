// Sets

    //Sets são estruturas que armazenam apenas valores únicos
    const myArray = [1,2,3,4,5,6,7,8,9];

    const mySet= new Set(myArray);


// Métodos do Set

    mySet.add(1); // Adiciona o numero 1 ao set

    mySet.has(1); // Consulta se tem ou nao o numero 1 no set

    mySet.delete(5); // Apaga o numero 5 do set

// Set vs Array

    //Possui valores únicos;
    //Em vez da propriedade length, consulta-se o número de registro pela propriedade size;
    //Não Possui os metodos map, filter, reduce etc