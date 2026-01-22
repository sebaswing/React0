import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';


describe('Pruebas en <GifExpertApp />', () => {

    test('Debería mostrar el título correctamente', () => {
        
        render( <GifExpertApp /> );//Renderiza el componente GifExpertApp

        const h1Content = screen.getByRole('heading',{level:1});
        // screen.debug();//Muestra el HTML renderizado en la prueba
        expect(h1Content.textContent).toBe('GifExpertApp');

    });

    test('Debería mostrar al menos una categoría por default', () => {
        
        render( <GifExpertApp /> );//Renderiza el componente GifExpertApp
        screen.debug();//Muestra el HTML renderizado en la prueba
        const h3Element = screen.getByRole('heading',{level:3});
        expect(h3Element.textContent).toBe('One Punch');
    });

    test("Debería mostrar el input para agregar una nueva categoría", () => {
        render(<GifExpertApp />);
        const inputValue = screen.getByRole('textbox');
        expect(inputValue.value).toBe('');
        expect( inputValue.placeholder ).toBe('Buscar gifs');
    });


});