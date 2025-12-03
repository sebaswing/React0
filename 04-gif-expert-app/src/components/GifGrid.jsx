import { getGifs } from "../helpers/getGifs";
import { useState,useEffect } from "react";
import { GifItem } from "./GifItem";

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
      <div className="card-grid">
        {
          // images.map( (img) => //es una forma de hacerlo 
          // <li key= {img.id}>
          //   {img.title}
          // </li>
          images.map( ( image ) => (
            <GifItem 
              key={image.id}
              {...image}
            />
          )
        )}
        
      </div>
   </>
  )
}