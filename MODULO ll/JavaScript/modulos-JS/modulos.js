//Modulos JS

    //São arquivos JS que tem a capacidade de exportar e importar informações de outros arquivos do mesmo tipo 

    //Vantagens:   
        /* - Organização do código;
           - Compartilhamento de variáveis em escopos diferentes;
           - Explicita as dependencias dos arquivo. */

    
    // Exportar Modulos

    //Named exports
    export function mostraIdade(pessoa){
        return `A idade de ${pessoa} é ${pessoa.idade}`; 
    }

    export function mostraCidade(pessoa){
        return `a idade de ${pessoa.nome} é ${pessoa.cidade}`;
    }

    export function mostraHobby(pessoa){
        return `A idade de ${pessoa.nome} é ${pessoa.hobby}`;
    } 

    //Dessa forma, se torna equivalente a de cima 
    function mostraIdade(pessoa){
        return `A idade de ${pessoa} é ${pessoa.idade}`; 
    }

    function mostraCidade(pessoa){
        return `a idade de ${pessoa.nome} é ${pessoa.cidade}`;
    }

    function mostraHobby(pessoa){
        return `A idade de ${pessoa.nome} é ${pessoa.hobby}`;
    }

    export{
        mostraCidade,
        mostraHobby,
        mostraIdade
    }


    //Default exports

        // Só pode haver um por arquivo;
        // Será o retorno padrão do seu arquivo;

    function mostraIdade(pessoa){
        return `A idade de ${pessoa} é ${pessoa.idade}`; 
    }

    function mostraCidade(pessoa){
        return `a idade de ${pessoa.nome} é ${pessoa.cidade}`;
    }

    function mostraHobby(pessoa){
        return `A idade de ${pessoa.nome} é ${pessoa.hobby}`;
    }

    export{
        mostraCidade,
        mostraIdade
    }
    export default mostraHobby;



//Importar modulos 

    //Named imports 
        import{funcao, variavel, classe} from './modulos.js';
        
    //Default Exports    
        import valorDefault from './modulos.js';
           //Sem chaves no valor importado


    //Importando e colocando um apelido ao arquivo/função/valor importado
        import {arquivo as apelido} from './modulos.js';

        apelido.metodo();

    //Importar tudo de um arquivo
        import * as INFOS from './modulos.js';

        INFOS.metodoA();

        console.log(INFOS.variavel);

    // Vinculando os modulos no HTML 
        
        <script type="module" src = "./modulos.js"></script>
            //no type tem que ser informado "module", para mostrar a pg que esta usando os modulos


    // Mais informações sobre os modulos

        /* - Módulos sempre estão em "strict mode"; 
           - Podem ser utilizadas as extensões .js e .mjs
           - Para testes locais, é necessário utilizar um servidor;
           - Ao importar, sempre lembre da extensão(.js, .mjs);
           - Ao importar, sempre utilize "./" como ponto de partida; */
