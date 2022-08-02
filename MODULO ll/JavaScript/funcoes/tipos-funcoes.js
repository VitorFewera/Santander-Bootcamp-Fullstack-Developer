//Função Comum
function nome(paramentros){
    //instruções
    // declarou variavel aqui dentro, mexe so aqui dentro

    return //valor de retorno - ele simplesmente para a funçao e retorna o valor calculado até o momento
}

//Função Anônima 

//Uma variavel que armazena uma função
const soma = function (a,b){ //Ela não possui um nome(anonima), como na função acima
    return a + b;
}

console.log(soma(1, 2)); //3
console.log(soma(3, 2)); //5



//Função Autoinvocável IIFE(immediately Invokd Function Expression)

//Uma função anônima entre parentese, seguida por outro par de parênteses, que representa sua chamada
//Pode ser anonima ou nao
(
    function(){
        let name = "Digital Innovation One";
        return name;
    }
)();
// O ponto dessa função, é que ela é executada, assim que o arquivo for executado, nao precisando de um ponto de partida

//Ainda sobre Função autoinvocavel
    //Pode ser usada tambem com parametros ou armazenada em uma variavel

    (
        function (a,b){
            return a + b;
        }
    )(1,2);//3

    const soma3 = (
        function (a,b){
            return a + b;
        }
    )(1,2);
    console.log(soma3);



    //Função Callbacks
    //Função passada como argumento para outra função
    const calc = function(operacao, num1, num2){
        return operacao(num1, num2);
    }
    const somar = function(num1, num2){
        return num1 + num2;
    }
    const sub = function(num1, num2){
        return num1 - num2;
    }

    const resultSoma = calc(soma,1,2); //3
    const resultSub = calc(sub, 1, 2); //-1

    console.log(`função callback de soma = ${resultSoma}`);
    console.log(`função callback de subs = ${resultSub}`);