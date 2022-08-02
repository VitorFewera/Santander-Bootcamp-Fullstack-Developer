// Definição assincronicidade
    
    // Assícrono - Que não ocorre ou não se efetiva ao mesmo tempo
    // O javascript roda de maneira síncrona

    //Promises - Promessa - Se faz ou não 
        //Objecto de processamento assincrono
            //Inicialmente, seu valor é desconhecido. Ela pode, então, ser resolvida ou rejeitada

    //Promise tem 3 estados:
        // Peding - Pendente;     Fulfilled - Realizado;     Rejected - Rejeitado;


    //Estrutura

const myPromisse = new Promise((resolve, reject) =>{ // Seto a promisse, passando dois metodos de ação, resolve - resolvida e reject - rejeitda
    window.setTimeout(() =>{//Metodo do JS, para indicar que a janela(window) realizara certa ação dps de um determinado tempo(setTimeout);
        resolve(console.log('Resolvida')); //Quando passar esse tempo, dar um log 
    }, 2000);//Tempo q deve ser percorrido para que a função seja executada - 2000 milisegundo - 2 segundos
});
//Então até, criamos a promise, agora é necessario manipula-la com: await


//Manipulação

    await myPromisse //Aqui ele pega o pormise - myPromisse, e manipula para trazer as seguintes informações
                .then((result) => result + " passando pelo then")
                .then((result) => result + " e agora acabou")
                .catch((err) => console.log(err.message));

//Após 2 segundos, retornará o valor 
    //"Resolvida passando pelo then e agora acabou!"



 //Async/await
    //Funções assíncronas precisam dessas duas palavras chave   
    async function resolvePromise(){
    const myPromisse = new Promise((resolve, reject) =>{ 
        window.setTimeout(() =>{
            resolve(console.log('Resolvida'));
        }, 3000);
    });
    const resolved = await myPromisse 
    .then((result) => result + " passando pelo then")
    .then((result) => result + " e agora acabou")
    .catch((err) => console.log(err.message));

    return resolved;
}
//await - criado especificadamente para trabalhar com as funções assincronas, 
    //Ele para o codigo, e espera a promise se resolver, resolvido ?, ele faz continuar o codigo
    //Ele é usado pq o JS é Sincrono - vai e vai sem para

    // Com a função await - é possivel uma promise, retornar outra promise

    // Possivel usar o try..catch para manipular os codigos