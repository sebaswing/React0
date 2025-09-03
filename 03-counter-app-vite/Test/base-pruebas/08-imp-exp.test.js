import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('probando 08-imp-exp',()=>{

    test('getHeroeById debe retornar un heroe por ID',()=>{
        const id=1;

        const heroe= getHeroeById(id);

        expect(heroe).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        }) 
    });

    test('getHeroeById debe retornar undefined si no existe el ID',()=>{
        const id=100;

        const heroe= getHeroeById(id);

        expect(heroe).toBeFalsy(); 
    });

    //Tareas
    // Debe retornar un arreglo con los héroes de DC
    //lenght ===3
    //toEqual al arreglo filtrado


    //debe de retornar un arreglo con los héroes de Marvel
    // length === 2

    test('getHeroesByOwner debe devolver todos los heroes de owner',()=>{
            const DC = 'DC';
            const marvel='Marvel';
            const heroesDC = getHeroesByOwner(DC);
            const heroesMarvel = getHeroesByOwner(marvel);

            expect(heroesDC.length).toBe(3);
            expect (heroesDC[1]).toEqual({
                id: 3,
                name: 'Superman',
                owner: 'DC',
            });

            expect(heroesMarvel.length).toBe(2);
            expect (heroesMarvel[0]).toEqual({
                id: 2,
                name: 'Spiderman',
                owner: 'Marvel',
            });
        });

    });
