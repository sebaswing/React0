
const getImage = async()=> {

    try{
        const api_key = 'b3M71Hlp9wAfvBnjLkfU7bFsbhx0Is4X';
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);
        const {data} =  await respuesta.json();
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    }catch (error) {
        console.warn(error);
    }
    
    // console.log(url);
}

// console.log(getImage());
getImage();




// peticion
//     .then(resp =>resp.json())
//     .then(({data}) => {
//         const {url} = data.images.original;
//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append(img);
//     })
// .catch(console.warn);