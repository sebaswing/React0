import { render,screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('pruebas para CounterApp',()=>{


    //TODO hacer match con el snapshot
    
    test('debe probar que el snapshot sea igual', () => {  
        const { container } = render( <CounterApp value={100} /> );
        expect( container ).toMatchSnapshot();

    });

    //TODO debe mostrar el valor inicial de 100 <CounterApp value={100} />
    test('debe probar que el valor inicial sea 100', () => { 
        render( 
        <CounterApp value={100} /> 

        );
        expect(screen.getByText(100)).toBeTruthy();
        // expect(screen.getByRole('heading',{level:2}).innerHTML).toContain('100');

     });

});