import {getGifs} from "../helpers/getGifs";
import { useState } from "react";

export const GifGrid = ({category}) => {

  const [counter, setCounter] = useState(10);
  // getGifs(category);
  console.log(getGifs(category));

  return (
   <>
       <h3>{category}</h3>
      <h5>{counter}</h5>
      <button onClick={ () => setCounter(counter + 1)}>+1</button>
   </>
  )
}
