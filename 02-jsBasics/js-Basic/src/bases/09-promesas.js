import { getHeroById } from './bases/08-imp-exp-ort.js';

// const promesa = new Promise((resolve, reject) => {
//      setTimeout (() => {
//         // resolve();
//         // console.log("2 segundos después");
//         const heroe = getHeroById(2);
//         resolve(heroe);
//         // reject('No se pudo encontrar el héroe');
//         // console.log(heroe);
//      },2000)
// });

// promesa.then((heroe) => {
//     console.log("heroe: ",heroe);
// })
// .catch(err=>console.warn(err))



const getHeroByIdAsync = (id) => {
     return new Promise((resolve, reject) => {
        setTimeout (() => {
            const heroe = getHeroById(id);
            // console.log( heroe)
            heroe// si heroe es un objeto, se resuelve la promesa
            ?resolve(heroe)
            :reject('No se pudo encontrar el héroe');
        },2000)
    });
}

getHeroByIdAsync(1)
.then(console.log)
// .then(heroe=>console.log("heroe: ",heroe))
.catch(err=>console.warn(err));
// .finally(() => console.log("Finally"))