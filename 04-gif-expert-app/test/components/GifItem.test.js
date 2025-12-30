import { render,screen} from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('GifItem Component', () => {

    const title = 'Goku';
    const url = 'https://gokukakaroto.com/goku.jpg';

    test('must made a match with snapshot', () => {
        const {container} =  render(<GifItem title={title} url={url}/>);
        expect (container).toMatchSnapshot();
    });  
    
    test('must show the image with the URL and ALT indicated', () => {
        render(<GifItem title={title} url={url}/>);
        // screen.debug(); // con esto se puede ver el html generado en la prueba
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);puede ser más corto desestructurando
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('must show the title in the component', () => {
        render(<GifItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
    });

});