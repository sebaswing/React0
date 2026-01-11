import { fireEvent, render,screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";



describe('Purebas en <AddCategory/>', () => { 

    test('debe cambiar el valor de la caja de texto', () => {  //prueba el input value
        render(<AddCategory onNewCategory={() => {}} />);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target: {value: 'Gokú'}});
        expect(input.value).toBe('Gokú');
        // screen.debug();
    }); 

    test('debe llamar onNewCategory si el input tiene un valor', () => { // prueba el submit 
        
        const inputValue = 'Gokú';
        //TODO
        render(<AddCategory onNewCategory={() => {}} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit (form);
        screen.debug();

        expect(input.value).toBe(''); //verifica que el input se haya limpiado
     })

});