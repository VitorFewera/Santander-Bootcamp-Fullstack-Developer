const input = document.getElementById('input') as HTMLInputElement;
                                    //Colocando essa info, mostra ao TS que esse elemento
                                    //se trata de um input do HTML - tipagem
input.addEventListener('input', (event) => {
    //console.log(event.currentTarget)
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
});

