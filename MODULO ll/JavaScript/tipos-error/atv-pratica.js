let array = [1];
let num;

function validar(array, num) {
    try {
        if (!array && !num) {
            throw new ReferenceError('Envie os parametros');
        }
        if (typeof array !== 'object') {
            throw new TypeError('Array precisa ser do tipo object');

        }
        if (typeof array !== 'number') {
            throw new TypeError('Array precisa ser do tipo number');
        }
        if (array.lenght !== num) {
            throw new RangeError('Tamanho Inválido!');
        } else {
            return array;
        }
    }

    catch (e) { //Aqui que se manipula o erro
        if (e instanceof ReferenceError) {
            console.log('Este erro é um ReferenceError!');
            console.log(e.message);
        } else if (e instanceof TypeError) {
            console.log('Este erro é um TypeError!');
            console.log(e.message);
        } else if (e instanceof RangeError) {
            console.log('Este erro é um RangeError!');
            console.log(e.message);
        } else {
            console.log('Tipo de erro não esperado: ' + e);
        }

    }
}

console.log(validar([1,5],1));




