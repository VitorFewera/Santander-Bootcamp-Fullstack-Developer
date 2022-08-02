function atividade (num1, num2){
    const igual = num1 === num2;
    const diferente = num1 !== num2;
    var soma = num1 + num2;
    var menor10 = soma < 10;
    var menor20 = soma < 20;
    var maior10 = soma > 10;
    var maior20 = soma > 20; 
    
    if(igual && menor10 && menor20){
        return console.log("Os números" + num1 + " e " + num2 + " são iguais. Sua soma é " + soma+ ", que é menor que 10 e menor que 20.");
    }
    else if(igual && maior10 && menor20){
        return console.log("Os números" + num1 + " e " + num2 + " são iguais. Sua soma é " + soma+ ", que é maior que 10 e menor que 20.");
    }
    else if(igual && maior10 && maior20){
        return console.log("Os números" + num1 + " e " + num2 + " são iguais. Sua soma é " + soma+ ", que é maior que 10 e maior que 20.");
    }
    else if(diferente && menor10 && menor20){
        return console.log("Os números " + num1 + " e " + num2 + " não são iguais. Sua soma é " + soma+ ", que é menor que 10 e menor que 20.");
    }
    else if(diferente && maior10 && menor20){
        return console.log("Os números " + num1 + " e " + num2 + " não são iguais. Sua soma é " + soma+ ", que é maior que 10 e menor que 20.");
    } 
    else if(diferente && maior10 && maior20){
        return console.log("Os números " + num1 + " e " + num2 + " não são iguais. Sua soma é " + soma+ ", que é maior que 10 e maior que 20.");
    }else{
        return console.log("erro");
    }   
}

console.log(atividade(5,5));

/* Jeito certo 
function comparaNumeros(num1, num2) {
	const primeiraFrase = criaPrimeiraFrase(num1, num2);
	const segundaFrase = criaSegundaFrase(num1, num2);

	return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
	let primeiraFrase = `Os números ${num1} e ${num2}`;
	let simNao = 'não';

	if (num1 === num2) {
		simNao = '';
	}

	return `${primeiraFrase} ${simNao} são iguais.`;
}

function criaSegundaFrase(num1, num2) {
	const soma = num1 + num2;
	let comparaDez = 'menor';
	let comparaVinte = 'menor';

	if (soma > 10) {
		comparaDez = 'maior';
	}

	if (soma > 20) {
		comparaVinte = 'maior';
	}

	return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
}

console.log(comparaNumeros(10, 10));*/
