const array = [1,2,3,4,5,6,7,8,9,10];

function returnPar(arr){
    return arr.filter((arr) => arr % 2 === 0);
}

console.log(returnPar(array));