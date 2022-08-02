//DOM 

    //Document Object Model

    //O DOM HTML é um padrão de como acessar e modificar os elementos HTML de uma pagina
    //Literalmente um documento que mostra todos os elementos e atributos


//BOM

    //Browser Object Model
    //Tudo o que está dentro do objeto window
        //Basicamente, seria o view
            //outras infos - document, history, location, screen, navigator

//Manipulando elementos no DOM 

    document.createElement(element); // Cria um novo elemento HTML
    document.removeChild(element); // Remove um elemento
    document.appendChild(element); // Adiciona um elemento
    document.replaceChild(newElemtent, oldElement); //Substitui um elemento


//Trabalhando com estilos

    <div id="meu-elemento" class="classe">
        
    </div>

const meuElemento = document.getElementById("meu-elemento");

meuElemento.classList.add("novo estilo");
//adiciona a classe "meu estilo"

meuElemento.classList.remove("classe");
//Remove a classe "classe"

meuElemento.classList.toggle("dark-mode");
//Adiciona a classe "dark-mode" caso ela não faça parte da lista e remove ela caso faça
//se tem tira, se nao tem adiciona 

document.getElementsByTagName("p").style.color = "blue";
//Acessa diretament o css de um elemento


//EVENTOS - DOM 

    //Qualquer tipo de ação que um usuario faça, ou interação que o mesmo tem com aquela pagina


//Eventos de mouse
    //mouserover, mouseout - passou o mouse em cima do elemento, aciona o mouseover, 
                        // - Passou o mouse para fora do elemento, aciona o mouseout

//Evento de clique
    //click - para usar em eventos de click 
    //dbclick - para usar em eventos de duplo click


//Eventos de atualização
    //change, load - no momento que carrega a paginas

// Acionando esse eventos

    //Diretamente no javascript, cria um evento que vai ser acionado no momento em que o usuario realizar determinada ação

const botao = document.getElementById("meuBotao");

botao.addEventListener("click", outraFuncao);
//addEventListener = função do js para executar um evento("tipo de evento", a função que for ativar);


// Adicionando o evento de click, a partir de um html
//Para adionar um evento que sera usado no html, se coloca on + o evento, ex: onclick, onremove etc
<html>
<h1 onclick = "mudaTexto(this)">Clique aqui! </h1>


<script>
    function mudaTexto(id) {
        id.innerHTML = "Mudei!"
    }
</script>

</html>