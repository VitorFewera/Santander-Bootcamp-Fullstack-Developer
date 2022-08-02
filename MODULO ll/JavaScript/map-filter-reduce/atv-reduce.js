//atividade 1 
function somaNumeros(arr){
    return arr.reduce(function(prev, corrent){
        console.log(prev);
        console.log('--'+ corrent);
        return prev + corrent;
    })
}

const array = [1,2,3,4,5];

console.log(somaNumeros(array))


// atividade 2 

const lista = [
    {
        name: "sabao",
        preco: 10
    },
    {
        name: "cereal",
        preco: 10
    },
    {
        name: "toalha",
        preco: 10
    }
]
const saldoDisponivel = 100;

function calculeSaldo(saldoDisponivel, lista){
    return lista.reduce(function (prev, corrent){
        console.log({prev});
        console.log({corrent});
        return prev - corrent.preco;
    }, saldoDisponivel);
}

console.log(calculeSaldo(saldoDisponivel,lista));