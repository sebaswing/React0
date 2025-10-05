import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch','Dragon Ball']);
 
  const onAddCategory = () => {
    // setCategories([...categories, 'Valorant']);
    // setCategories( cat => [...cat, 'Valorant']);
    setCategories(['Valorant', ...categories]);
  }

  return (
    <>
    {/*titulo  */}
      <h1>GifExpertApp</h1>

      {/*input */} 

      <AddCategory setCategories={setCategories} /> 

      {/*listado de gifs */} 
      <ol>
        {
          categories.map( category => {
            return <li key={category}>{category}</li>
          })
        }
      </ol>
       {/*gif item */}

    </>
  )
}
