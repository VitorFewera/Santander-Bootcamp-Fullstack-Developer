let array = [1,2,3];

let novoArray = array.map((array) => array * 2);
console.log(novoArray);

// Esse map sem this que eu fiz, agr com function 

function mapArray(array){
    return array.map(function(item){
        return item * 2;
    })
}

console.log(mapArray(array));

//Utilizando o argumento this com map

const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}



function mapComThis(arr, thisArg){ //passa o arr passa o array e o thisArg o object
    return arr.map(function(item){ // Retorna o array utilizando o metodo map, e criando uma nova function (que recebe o array )
       return item * this.value; // retorno o que o map tem que fazer
    }, thisArg); // Por fim, retorno novamente o object, para mostrar o object que o this marca
}


const num = [ 1,2];
console.log(mapComThis(num, maca));

console.log(mapComThis(num, laranja));