// Codificação para Array 

let array = [];

// Adicionar itens no array (final da lista)
variavelArray.push('o que vai ser adicionado');

//Remover o ultimo item do array
variavelArray.pop();
    let arrayPop = [2,3,4,5];
    arrayPop.pop();
    console.log(arrayPop); // remove o 5

//Removendo o primeiro item do Array
variavelArray.shift();
    let arrayShift = [0,1,2,3];
    arrayShift.shift();
    console.log(arrayShift); //remove o 0

//Adiciona um item no começo da lista
variavelArray.unshift();
    let arrayUnshift = [1,2,3];
    arrayUnshift.unshift(0);
    console.log(arrayUnshift); // retorna [0,1,2,3]

//Array com for
let arrayFor = [0,1,2,3];
for(let i =0; i < arrayFor.length; i++){
    console.log(arrayFor[i])
}

//Ver se tem um item no Array
array.includes('item');
let arrayIncluides = [0,1,2,3];
console.log(arrayIncluides.includes(4));//retorna false

//Verificar se todos os itens, são algum numero
array.every('item que vai ser verificado');
    let arrayEvery = [0,1,2,3]
    console.log(arrayEvery.every(item => item === 5));//retorna false
    //Para esse item, foi necessario usar o arrow => não especificado, se é um item importante.

//Verificar se algum dos item do array, tem o item perguntado
array.some('item que vai ser verificado');
    let arraySome = [0,1,2,3]
    console.log(arrayEvery.some(item => item === 3));//retorna true
    //Para esse item, foi necessario usar o arrow => não especificado, se é um item importante.
   
// Reverter a ordem do array
array.reverse();
    let arrayReverse = [0,1,2,3];
    console.log(arrayReverse.reverse());
    //Retorna [3,2,1,0]    - exsitem posibilidade de ordena-lo de outras formas
    