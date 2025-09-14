import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {
    test('Debe hacer match con el snapchot', () => { 
        
        const  title = 'hola, Soy Gokú';
        render(<FirstApp title = {title}/>)

     });
});