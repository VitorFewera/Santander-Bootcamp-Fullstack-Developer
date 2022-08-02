function getAdmins(map){
    let admins = [];    
   for([key, value] of map){
    if(value === 'Admin'){
        admins.push(key);
    }
   } 
   return admins;
}

const usuario = new Map();

usuario.set('luiza', 'Admin');
usuario.set('Stephany','Admin');
usuario.set('Jorge','User');
usuario.set('Natália','Admin');
usuario.set('Vitor','Admin');

console.log(getAdmins(usuario));



/////////////////////////////////////////////////////////////////////////

const meuArray = [30,30,40,5,223,2049,3024,5];

function valoresUnicos(array){
    const mySet = new Set(array)

    return[...mySet];
}

console.log(valoresUnicos(meuArray));