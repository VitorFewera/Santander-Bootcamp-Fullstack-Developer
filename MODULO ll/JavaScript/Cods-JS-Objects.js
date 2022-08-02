// Objetos 

//Estrutura Chave e Valor
let person = {
//  key:  values
    name: 'Jonh',
    Age: 20
}; 

//Adicionar itens no object 
let objADD = {};
objADD.name = 'vitor';
objADD.age = '24';
console.log(objADD);
//Retornara {name: 'vitor', age: '24'}


//Ver os valores que o object possui de informação adicionada - Values
console.log(Object.values(objADD)); //sintaxe object.values(Object que sera mostrado);
//retorna (2) ['vitor', '24']


//Ver os valores que o object possui de chaves - keys
console.log(Object.keys(objADD));//sintaxe object.keys(Object que sera mostrado);
//Retorna ['name', 'age']


//Retornar valores objetivos de um object
console.log(objADD.name );
console.log(objADD["age"]);


//Adicionar informação simplesmente em um object
objADD.variavelNova = "nova;"
console.log(objADD);
//Retorna: {ame: 'vitor', age: '24', variavelNova: 'nova;'}

//Adiconar uma variavel que ja tenha uma informação 
let variavelComInformacao = 'informação';
objADD[variavelComInformacao] = "informação adicionada";
//Retorna: {name: 'vitor', age: '24', informação: 'informação adicionada'}









