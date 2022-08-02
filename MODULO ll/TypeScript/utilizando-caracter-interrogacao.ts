interface Iusuario{
    id: string;
    email: string;
    cargo?:'funcionario'|'Gerente'| 'coordenador' | 'supervisor';
} //Colocando o ?, vai que ele vire um dado Opcional;

function redirecione(usuario: Iusuario){
    if(usuario.cargo){//Com isso, ja faz com que o sistema compreenda que o usuario pode ou nao estar definido
        //redicionar(usuario.cargo)
    }
    else {
        //redirecionar para a area do usuario
    }
    }