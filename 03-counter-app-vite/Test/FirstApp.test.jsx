import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {

    // test('Debe hacer match con el snapshot', () => { 
        
    //     const  title = 'hola, Soy Gokú';
    //     const {container} = render(<FirstApp title = {title}/>);

    //     expect( container ).toMatchSnapshot();

    //  });

     test('Debe hacer match con el h1', () => { 
        
        const  title = 'hola, Soy Gokú';
        const {container,getByText,getByTestId} = render(<FirstApp title = {title}/>);

        expect( getByText(title) ).toBeTruthy;

        // const h1 = container.querySelector('h1');
        // // console.log(h1.innerHTML);
        // expect( h1.innerHTML ).toContain(title);

        expect( getByTestId('test-title').innerHTML).toBe(title);
     });

     test('Debe mostrar el subtítulo enviado por props', () => { 
        
        const  title = 'hola, Soy Gokú';
        const  subtitle = 'Soy un subtítulo';
        const {getAllByText} = render(
            <FirstApp 
                title = {title}
                subtitle = {subtitle}
            />
        );

        expect( getAllByText(subtitle).length ).toBe(2);
    });
});