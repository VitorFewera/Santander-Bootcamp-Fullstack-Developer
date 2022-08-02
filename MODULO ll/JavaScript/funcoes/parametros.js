//arguments

//Argunments é um array com todos os parâmtreos passados quando a função foi invocadas

function findMax(){//função para ver o maior valor dentre os arguments
    let max = -Infinity; //crio uma variavel que recebe -infinito

    for(let i=0; i < arguments.length; i++){ // Se o i for menos que a quantidade de argumentos(array)
        if(arguments[i] > max){ //Aqui ele confere se o argumento dentro desse index, é maior que a variavel max
            max = arguments[i]; //caso true, o argumento(numero) daquele index[i], sera o valor max e sera retornado 
        }
    }
    return max;
}
console.log(findMax(1,50,30));


//outro exemplo
function showArgs(){
    return arguments;
}
console.log(showArgs(10,20,[1,2,3], "string para ver o arguments"));
//Nesse segundo caso ele pega todos os argumentos presentes na função e os lista em um array