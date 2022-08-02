// FOR

//loop dentro de elementos iteráveis(arrays, strings);

    function multiplicaPorDois(arr){
        let multiplos = [];

        for(let i = 0; i<arr.length; i++){
            multiplos.push(arr[i] * 2);
        }
        return multiplos;
    }

    const meusNumeros = [2, 33, 456,356, 40];

    console.log(multiplicaPorDois(meusNumeros));


// FOR ... IN
    //loop entre propriedades enumeraveis de um objeto
    
    function forInExemplo(obj){
        for(prop in obj){
            console.log(prop);
        }
    }

    const meuObjeto = {
        nome: "joao",
        idade: "20",
        cidade: "salvador"
    }

console.log(forInExemplo(meuObjeto));


// FOR ... of
    //loop entre estruturas iteráveis (Arrays, strings)

    //usando string
    function logLetras(palavras){      //resultado:
        for(letra of palavra){          //a
            console.log(letra)          //b
        }                               //a
    }                                   //c
                                        //a
    const palavra = "abacaxi";          //x
                                        //i
    console.log(logLetras(palavra));

    //Com array de numeros
    function logNumeros(nums){          //resultado:
        for(num of nums){               //30
            console.log(num);           //20
        }                               //233
    }                                   //2
    const nums = [30, 20,233,2];        

    console.log(logNumeros(nums));


    //WHILE 

        //Executa instruções até que a condição se torne falsa

    function exemploWhile(){
        let num = 0;

        while(num <= 5){
            console.log(num);
            num++;
        }
    }

console.log(exemploWhile());

//Do..While
    //Executa instruções até que a condição se torne false
    //Porém a PRIMEIRA EXECUÇÃO SEMPRE OCORRE

    function exemploDoWhile(){
        let num = 0;

        do{
            console.log(num);
            num++;
        } while(num<=5)
    }

    console.log(exemploDoWhile());