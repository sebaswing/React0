

//funciona en JS

const saludar = function(nombre) {
    return `Hola ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}
//simplifiacdo  
const saludar3 = (nombre) => `Hola ${nombre}`;
const saludar4 = () => `Hola mundo`;



console.log(saludar);
console.log(saludar('Goku'));
console.log(saludar2);
console.log(saludar2('Vegeta'));
console.log(saludar3);
console.log(saludar3('Gohan'));
console.log(saludar4);
console.log(saludar4());
console.log('-----------------');

const getuser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
})

const user = getuser();
console.log(user);

// tarea
// 1. Transformar a una función de flecha
// 2. Retornar un objeto implícito
// 3. Pruebas
function getUsuarioActivo(nombre) {
    return {
        uid: 'ABC567',
        username: nombre
    }
}

const getUsuarioActivo1 = (nombre) => ({
    uid: 'ABC567',
    username: nombre
})


const usuarioActivo = getUsuarioActivo('Juan');
console.log(usuarioActivo);
console.log(getUsuarioActivo1('Juan'));
