
const api_key = 'b3M71Hlp9wAfvBnjLkfU7bFsbhx0Is4X';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);


peticion
    .then(resp =>resp.json())
    .then(({data}) => {
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
// peticion.then(
//     (resp)=>{
//     //     console.log(resp)
//     resp.json().then( data => {
//         console.log(data)    
//     })
// })
.catch(console.warn);