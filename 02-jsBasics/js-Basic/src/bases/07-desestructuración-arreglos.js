

const personajes = [ 'Goku', 'Vegeta', 'Trunks'];
//console.table(personajes);
const[ ,,p3 ]=personajes;
console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras,numeros] = retornaArreglo();

console.log(letras, numeros);

//tarea
//1. El primer valor del arr se llamará nombre
//2. El segundo valor del arr se llamará setNombre
const useState = (valor)=> {
    return [valor, ()=>{console.log('Hola Mundo')}];
}

//linea de abajo desabilita el eslint para que no marque error en la consola
// eslint-disable-next-line
const arr = useState( 'Goku' );
console.log(arr);

arr[1](); 
// eslint-disable-next-line
const [nombre, setNombre] = useState('Goku');
console.log(nombre);
setNombre();
