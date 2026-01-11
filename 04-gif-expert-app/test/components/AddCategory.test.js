import { fireEvent, render,screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";



describe('Purebas en <AddCategory/>', () => { 

    test('debe cambiar el valor de la caja de texto', () => {  
        render(<AddCategory onNewCategory={() => {}} />);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target: {value: 'Gokú'}});
        expect(input.value).toBe('Gokú');
        // screen.debug();
    }); 

});