// Definição API
    //O que são APIs - Application Programming Interface

        //Uma API é uma forma de intermediar os resultados do back-end com o que é apresentado no front-end.
        //você consegue acessá-la por meio de URLs.

    //JSON - JavaScript Object Notation 
        

    //Metodo fetch
        fetch(url, options)
            .then(response => response.json())
            .then(json => console.log(json))
        //Retorna uma promise
    
        //Com o fetch - é possivel fazer operações no banco (post, get, put, delete, etc)

        fetch(('https://edereco-ap.com/', {
            method: 'GET',
            cache: 'no-cache',
        })
                .then(response => response.json())
                .then(json => console.log(json))
                //retorna uma promise
        )