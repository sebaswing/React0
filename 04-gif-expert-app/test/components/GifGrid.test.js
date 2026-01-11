import { render } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

describe('Pruebas en el <GifGrid/>', () => { 

    const category = 'One Punch';
    test('debe de mostrar el loading inicialmente', () => {
        render(<GifGrid/>);
    });
    
 });