
describe('Pruebas en <DemoComponent/>', () =>{

    test('esta prueba no puede fallar', () => {
        // 1. inicialización
        const message1 = 'Hola Mundo';
        //2. estimulo
        const message2 = message1.trim();
        //3. observar el comportamiento...esperado (?)
        expect(message1).toBe(message2);

    });
});