//Filter

    //Literalmente um filtro, quando utilizado, ele cria um novo array, com os itens que estiverem de acordo com a condição
    //que será imposta. 
            // - Cria um novo array
            //não modifica o array original

const array = [];
array.filter("argumento de filtro, callback", "elemento this, thisArg");
        //callback: função a ser executada em cada elemento, geralmente uma comparação
        //thisArg(opcional): valor de "this" dentro da função de callback
        
const frutas = ['maçã fuji', 'maçã verde', 'laranja', 'abacaxi'];
      console.log(frutas.filter((frutas) => frutas.includes('maçã')));

//Retorna um novo array = ['maçã fuji', 'maçã verde'];
