//VERIFICAR SE UMA STRING E UM PALINDROMO

//Solução 1
function verificaPalindromo(string){
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
//Pego a string, separo por silaba e formo um array(.split(""));
//pego esse array e o deixo reverso, ao contrario(.reverse());
//Junto esse array em uma nova string (.join(""))
}

//console.log(verificaPalindromo(''));


//solucao 2
function verificaPalindromo2(string){
    if(!string) return "string inexistente";

    for(let i = 0; i < string.length; i++){
        if (string[i] !== string[string.length - 1 - i]){
            return false;
        }
    }

    return true;
}
console.log(verificaPalindromo2('gati'));