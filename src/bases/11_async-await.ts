import type { GiphyRandomResponse } from "../data/giphy.RandResp";

const API_KEY = 'Osx2MSPyCD7wRLXSjl4EFKu3VypqezMp';


const createImageIsideDOM = (url:string) =>{
        const imgElement = document.createElement('img');
        imgElement.src = url;
        document.body.append( imgElement );    
}

const getRandomGifUrl = async () => {
    const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    );

    const { data }:GiphyRandomResponse = await response.json()  ;
    return data.images.original.url;
}

getRandomGifUrl().then( url => createImageIsideDOM( url )  );
 
 