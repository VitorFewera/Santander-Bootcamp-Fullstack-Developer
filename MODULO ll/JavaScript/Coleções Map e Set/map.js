//Uma coleção de arrays no formato[chave, valor];

//pode ser iterado por um loop for ...of

//para criar um map
const myMap = new Map();

myMap.set('apple', 'fruit'); //adiciona chave e valor
//Map(1){"apple => fruit"};

myMap.get("apple"); //verifica o valor
//"fruit"

myMap.delete("apple"); //apaga a chave
//true

myMap.get("apple"); //retornando o valor depois de ser deletado
//undefined

//Diferença de Maps vs Object 

//-- Maps podem tem chaves de qualquer tipo
// maps possuem a propriedade lenght
// maps são mais faceis de iterar
// utilizado quando o valor das chaves é desconhecido
// os valores tem o mesmo tipo
