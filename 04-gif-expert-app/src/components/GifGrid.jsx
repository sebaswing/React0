import { getGifs } from "../helpers/getGifs";
import { useState,useEffect } from "react";

export const GifGrid = ({category}) => {

  const [images, setImages] = useState([]);

  useEffect(()=>{
      getGifs(category)
        .then( newImages => setImages(newImages));
      // console.log(getGifs(category));
  },[])



  return (
   <>
      <h3>{category}</h3>
      <ol>
        {
          // images.map( (img) => //es una forma de hacerlo 
          // <li key= {img.id}>
          //   {img.title}
          // </li>
          images.map( ({id,title}) => (
            <li key= {id}>
              {title}
            </li>
          )
        )}
        
      </ol>
   </>
  )
}
