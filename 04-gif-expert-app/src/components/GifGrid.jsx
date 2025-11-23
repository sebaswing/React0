import {getGifs} from "../helpers/getGifs";

export const GifGrid = ({category}) => {

  // getGifs(category);
  console.log(getGifs(category));

  return (
   <>
       <h3>{category}</h3>
        
   </>
  )
}
