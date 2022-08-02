interface cachorro{
    readonly nome:string; // readonly quer dizer que é um valor somente de leitura
    idade: number;
    parqueFavorito?: string; //opcional
}

class meuCachorro implements cachorro{
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
const cao = new meuCachorro('thor', 5);

