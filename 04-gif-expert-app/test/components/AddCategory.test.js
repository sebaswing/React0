import { fireEvent, getByRole, render,screen } from "@testing-library/react";
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
        const onNewCategory = jest.fn(); //simula la funcion para ver si se llama

        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, {target: {value: inputValue}});//cambia el valor del input
        fireEvent.submit (form);
        // screen.debug();

        expect(input.value).toBe(''); //verifica que el input se haya limpiado
        
        // expect(onNewCategory).toHaveBeenCalled(); //verifica que se haya llamado la funcion
        // expect(onNewCategory).toHaveBeenCalledTimes(1); //verifica que se haya llamado 1 vez
        expect(onNewCategory).toHaveBeenCalledWith(inputValue); //verifica que se haya llamado con el valor correcto
    
    })
    test('no debe llamar onNewCategory si el input esta vacio', () => { // prueba el submit

        const inputValue = '';
        const onNewCategory = jest.fn()
        render(<AddCategory onNewCategory={onNewCategory} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        
    })

});