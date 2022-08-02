//Se tivermos duas interfaces iguais, ele soma as duas em uma só
    interface estudante{
        serie: string;
        nome: string;
        codEstudante: number;
}
    interface estudante{
        sala: number;
        sexo: string;
    }

    const estudanteTI : estudante={
    // dando um ctrl + tab - traz todos os itens das duas interfaces juntas.
        nome: 'vitor',
        serie:'3º B',
        sala: 150,
        sexo:'Masculino',
        codEstudante:15032
}

    interface Pessoa{
    nome: string;
    idade: number;
    nacionalidade: string;
    }

    interface Brasileiro extends Omit<Pessoa,'nacionalidade'>{
    //Quando utilizo o item, Omit<>, ele permite omitir um item da interface,
    // não precisando declara-lo no codigo.
    }

    const brasileiro: Brasileiro = {
        nome:'Vitor',
        idade: 24
    }
