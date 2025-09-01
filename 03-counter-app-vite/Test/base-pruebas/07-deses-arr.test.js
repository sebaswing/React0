import {retornaArreglo} from '../../src/base-pruebas/07-deses-arr';

describe('pruebas en 07-deses-arr', () => {

    test('debe de retornar un string y un número ', () => {
        
        const [letters,numbers] = retornaArreglo();
        expect(typeof letters).toBe('string');
        expect(letters).toBe('ABC');
        expect(typeof numbers).toBe('number');
        expect(numbers).toBe(123);

        
        
    });

});

