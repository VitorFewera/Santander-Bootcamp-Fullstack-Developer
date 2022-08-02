function soma(a: number,b: number){
    return a + b;
}
// O typescript ajuda com a questão da typagem, onde quando definido uma variavel
    //temos que apresentar seu tipo

//types - Define toda uma estrutura de dados, para parametros, classes, funções e tudo mais

// interfaces - contratos para imprementar as suas classes, pode ser entendidas como objects

interface  Ianimal {
    nome: string;
    tipo: 'terreste' | 'aquatico';
    domestico: boolean; //quando criamos uma variavel, em uma interface, todos que tem sua herança, tem que herdala
}

interface IFelino extends Ianimal{
    visaoNoturna: boolean;
}

interface  ICanino extends Ianimal{
    porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelino | ICanino;

const animal: Ianimal =  {
    nome: 'Elefante',
    tipo: 'terreste',
    domestico: true,
}

const felino: IFelino = {
    tipo: 'terreste',
    nome: 'Leão',
    visaoNoturna: true,
    domestico: false
}

//Trazendo funções, herança e constantes com o typeScript, altamente tipada.


//interface, usado para definir contratos, porém o type -
// type, é usado para juntar diferente interfaces, definir uma variavel como interface etc
// Usando função type
type animalType = {
    nome: string,
    tipo: 'terreste' | 'aquatico'
}

interface IFelino extends Ianimal{
    visaoNoturna: boolean,

}

//Interface usa para definir contrato de estruturas de dados
//Type usado para fazer junções e merges

