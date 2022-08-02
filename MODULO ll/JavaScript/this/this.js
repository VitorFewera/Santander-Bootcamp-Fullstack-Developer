//THIS

    // A palavra reservada THIS é uma referencia de cotnexto
    //no exemplo, this refere-se ao objeto pessoa

const pessoa = {
    firstName: "Vitor",
    lastName: "Ferreira",
    id: 1,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    },
    getId: function(){
        return this.id;
    }
}

console.log(pessoa.fullName(), pessoa.getId());

//This: o que é ? 
/* Seu valor ode mudar de acordo com o lugar no código onde foi chamada.
    CONTEXTO                                REFERENCIA

Em um objeto(método)                      Próprio objeto dono do método
sozinha                                   Objeto global(em navegadores, window)
função                                    Objeto global
Evento                                    Elemento que recebeu o evento
*/

//Metodo Call - Pode se informar o object ao qual o this daquele cod se refira. Ex:

    const NomePessoa = {
        nome: 'Vitor',
    };

    const nomeAnimal = {
        nome:'Thor',
    };

    function getTesteCall(){
        return this.nome;
    }

    console.log(getTesteCall.call(NomePessoa));

//Ainda sobre call - É possivel passar parâmetros para essa funçã separando-os por vírgulas.

const myObj = {
    num1: 2,
    num2: 4,
};

function soma(a,b){
    return this.num1 + this.num2 + a + b;
}

console.log(soma.call(myObj, 1, 5)); //12



// APPLY - Semelhante ao call 

const NomePessoaApply = {
    nome: 'Vitor',
};

const nomeAnimalApply = {
    nome:'Thor',
};

function getTesteCall(){
    return this.nome;
}

console.log(getTesteCall.apply(NomePessoaApply));

// A diferença do APPLY vai se quando for necessario passar argumentos, pois eles serão passados dentro de um array

const myObjApply = {
    num1: 2,
    num2: 4,
};

function soma(a,b){
    return this.num1 + this.num2 + a + b;
}

console.log(soma.apply(myObjApply, [1, 5])); //12 - aqui a diferença


//BIND 

    //Clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro

const retornaNomes = function (){
    return this.nome;
};
let vitor = retornaNomes.bind({nome:'Vitor'}); //clonou a função de cima 
console.log(vitor()); // Nesse console, chamei vitor(), pois a variavel esta recebendo o clone de uma função


