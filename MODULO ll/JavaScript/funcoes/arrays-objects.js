//Arrays 

//Spread: Uma forma de lidar separadamente com elementos do arrays
function sum(x, y, z) {
    return x + y + z;
}
const numbers = [1, 2, 3];

console.log(sum(...numbers));// colocando esse ... antes do array, pegamos os itens do array, separamos eles em itens separados
// e aplicamos a função, lembrando que nesse caso so somou os tres, pq a função recebia 3 variaveis
// e tinhamos 3 numeros do array;


//Rest: Combina os argumentos em um array 
//Ou seja o que era um elemento solto, se torna integrante de um array

function confereTamanho(...args) {
    console.log(args.length);
}
confereTamanho()// numero de itens do array 0 
confereTamanho(1, 2)// numero de itens do array 2
confereTamanho(1, 2, 3, 4)// numero de itens do array 4




//Objects

//Object Destructuring
//Entre chaves {}, podemos filtrar apenas os dados que nos interessam em um objeto.

const user = {
    id: 42,
    displayName: 'Jdoes',
    fullName: {
        firstName: 'Jonh',
        lastName: 'Does'
    }
};

function userId({ id }) { //Aqui basicamente estou criando uma função que recebe um  item de um object, no caso, {id}
    return id;            //Quando for declarada a função para uso, se o object que for informado, tiver um atributo {id}
}                         //Sera retornado o id dessa object - userId(user) - function(Object);

function getFullName({ fullName: { firstName: first, lastName: last } }) {
    return `${first} ${last}`;
}

console.log(userId(user)); // 42

console.log(getFullName(user));// Jonh Does
