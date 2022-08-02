//Switch/case
    
//Equivale a uma comparação de tipo e valor (===)
//Sempre precisa de uma valor default
//Ideal para quando se precisa comparar muitos valores 

function getAnimal(id){
    switch(id){
        case 1: 
            return "cão";
        case 2: 
            return "gato";
        case 3:
            return "Pássaro";
        default:
            return "peixe";
    }
}