import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch','Dragon Ball']);
 
  const onAddCategory = (newCategory) => {
    // setCategories([...categories, 'Valorant']);
    // setCategories( cat => [...cat, 'Valorant']);
    setCategories([ newCategory, ...categories]);
  }

  return (
    <>
    {/*titulo  */}
      <h1>GifExpertApp</h1>

      {/*input */} 

      <AddCategory 
        // setCategories={setCategories}
        onNewCategory= {value => onAddCategory(value)}
      /> 

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
