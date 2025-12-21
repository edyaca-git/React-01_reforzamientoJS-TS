import type { GiphyRandomResponse } from "../data/giphy.RandResp";



const API_KEY = 'Osx2MSPyCD7wRLXSjl4EFKu3VypqezMp';

const myRequest = fetch(
`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);

myRequest
    .then(( resp ) => {
        console.log({ resp });
    })
    .catch( error => {
        console.error({ error });
    });


const createImageIsideDOM = (url:string) =>{
        const imgElement = document.createElement('img');
        imgElement.src = url;
        document.body.append( imgElement );    
}

myRequest
    .then( resp => resp.json() )
    .then( ( { data }: GiphyRandomResponse ) => {
        console.log( data );
        const imageUrl = data.images.original.url;
        createImageIsideDOM( imageUrl );


    })
    .catch( error => {
        console.error(error);
    });

// myRequest
//     .then( resp => resp.json() )
//     .then( ({ data }) => {
//         const { id, title, images } = data;
//         console.log({ id, title, images });
//     })
//     .catch( error => {
//         console.error({ error });
//     });
