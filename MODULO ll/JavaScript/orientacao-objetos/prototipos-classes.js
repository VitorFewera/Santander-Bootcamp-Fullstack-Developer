//Protótipos 

// Todos os objetos javacripts herdam propriedades e métodos de um prototype
//O objet Object.prototype esta no topo desta cadeia    

    //Todos os metodos vem de um prototype


//Classes 

    // Classes no JavaScript nao existe nativamente - Todas as classes são objetos e a herança se dá por protótipos
    //Syntatic sugar: uma sintaxe feita para facilitar a escrita
    

class Animal{
    constructor(type = 'animal'){
        this.type = type
    }// Vai construir a classe, seria uma informação primaria, nesse caso, o type esta recendo animal, se nao for passado outro tipo
     // Vai continuar sendo do tipo animal

    get type(){
       return this._type;
    }
    set type(val){
        this._type = val.toUpperCase();
    }
    /* get e set = Utilizados para ter acesso aos parametros da classe, get pegar o valor, e o set atribui um outro valor a informação
        pegada pelo get*/

    makeSoud(){
        console.log('Making animal sound');
    }
}

let a = new Animal();
console.log(a._type)// ANIMAL

class Cat extends Animal{
    
    constructor(){
        super('cat') //Metodo super - manda para a função pai, os parametros que estiverem na sendo informados
    }

    makeSoud(){
        super.makeSoud()
        console.log('Meow!')
    } // É possivel sobre escrever um metodo ja definido na classe pai
}

let b = new Cat();
console.log(b.type) //CAT