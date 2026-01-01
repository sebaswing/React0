import { getGifs } from "../../src/helpers/getGifs";
import { getKey } from "../../src/configu/getKey";
describe('pruebas en getGifs()', () => {
  test('imprime los gifs', async () => {
    const gifs = await getGifs('One Punch',getKey());
    // console.log(gifs);// .log para ver los gifs
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id:expect.any(String),
      title:expect.any(String),
      url:expect.any(String),
    })
  });
});
