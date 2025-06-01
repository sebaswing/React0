

//desestructuración 

const persona = {   
    nombre: 'Tony Stark',
    edad: 30,
    ciudad: 'New York',
    rango: 'Teniente',
    clave: 'Ironman',
}

const { nombre, edad, ciudad } = persona; // desestructuración de objeto
console.log(nombre); //Tony Stark

console.log("------------------------");

console.log(persona.nombre); // Tony Stark
console.log(persona.edad); // 30    
console.log(persona.ciudad); // New York

// const retornaPersona = (usuario) => {
//     console.log(nombre); // Tony Stark
//     console.log(edad); // 30    
//     console.log(ciudad); // New York
// }
console.log("------------------------"); 
const usarContexto = ({ clave,edad,nombre,ciudad,rango="Capitán" }) => {
    // console.log(nombre, edad, ciudad,rango); // Tony Stark 30 New York
    return{ 
        nombreClave: clave,
        años: edad,
        lartlng:{
            lat: 40.7128,
            lng: -74.0060
        }
    }
}
const {nombreClave,años,lartlng:{lat,lng}} = usarContexto(persona); // { nombreClave: 'Tony Stark', años: 30 }

console.log(nombreClave,años); // { nombreClave: 'Tony Stark', años: 30 }
console.log(lat,lng); // { lat: 40.7128, lng: -74.0060 }