import { getImagen } from "../../src/base-pruebas/11-async-await";

describe ('Pruebas en 11-async-await', () => {

    // test('getImagen debe retornar un URL de la imagen ',async()=>{

    //     const url = await getImagen();
    //     console.log(url);

    //     expect( typeof url ).toBe('string');
    // });
    test('getImagen debe retornar un error si no hay APIKEY',async()=>{
        const url = await getImagen();
        expect( url ).toBe('No se encontró la imagen');
    });

});