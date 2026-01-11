import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { getKey } from "../configu/getKey";

export const useFetchGifs = (category) => {
   
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() =>{ //forma 2
        const newImages = await getGifs(category,getKey());
        setImages(newImages);
        setIsLoading(false);
      }
    
      useEffect(() => {
        getImages();
      }, []);
    
      // useEffect(()=>{ //forma 1
      //     getGifs(category)
      //       .then( newImages => setImages(newImages));
      //     // console.log(getGifs(category));
      // },[])

    return{
        images,
        isLoading,
    }

}
