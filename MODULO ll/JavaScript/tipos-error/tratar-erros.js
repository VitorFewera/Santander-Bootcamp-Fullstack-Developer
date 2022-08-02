//Antes de mais nada - DIFERENÇA DE Return e throw

//Return
function verificaPalindromo(string){
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}
/* Rodando esse cod, sera retorando, quando invalido, "string inexistente", 
Da forma que foi solicitado*/ 


//Throw
function verificaPalindromo(string){
    if(!string) throw "string inexistente";

    throw string.split("").reverse().join("") === string;
}
/*Agr nesse ex, usando o Throw, ele vai retornar a informação "string inexistente",
porém, será retornado um erro no console, com algumas outras informações*/



// Try...catch
    //É utilizado para tratar erros, se pega um cod, aplica-os e verirfica o retorno

    function verificaPalindromo(string){
        if(!string) throw "string inexistente";
    
        throw string.split("").reverse().join("") === string;
    }

    function tryCatchExemplo(string){
        try{ //Executa a function
            verificaPalindromo(string)
        }
        catch(e){ //Aqui que se manipula o erro
            throw(e);
        }
    }

    tryCatchExemplo('');

//Finally
    // É utilizado junto com try...catch, ele vem no final, e sempre executara o cod que for colocado nele
    function verificaPalindromo(string){
        if(!string) throw "string inexistente";
    
        throw string.split("").reverse().join("") === string;
    }

    function tryCatchExemplo(string){
        try{ //Executa a function
            verificaPalindromo(string)
        }
        catch(e){ //Aqui que se manipula o erro
            throw(e);
        }
        finally{ // Então indepentende se o cod esta correto ou não, esse comado sempre ira ser executado
            console.log('A string enviada foi: '+string);
        }
    }

    tryCatchExemplo('');

