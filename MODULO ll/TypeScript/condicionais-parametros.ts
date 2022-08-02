interface Iusuario{
    id: string;
    email: string;
}
interface Iadm extends  Iusuario{
    cargo:'Gerente'| 'coordenador' | 'supervisor';
}

function redirecione(usuario: Iusuario | Iadm){
   //Nesse caso, TS nao reconhece valor cargo, por conta do |
    //Se na função, eu jogar usuario: Iadm, seria reconhecido.
    //Para driblar esse problema, é possivel fazer uma verificação com o TS
/*    if(usuario.cargo){}*/
    if('cargo' in usuario ){
        //codificação se caso o valor cargo, estiver presente em usuario
        //Nessa questão ele vai estar presente
    }else {
        //Usar o else se por acaso nao estiver
    }
}