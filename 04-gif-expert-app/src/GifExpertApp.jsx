import { useState } from "react";
import { AddCategory } from "./components"; //con import { AddCategory } from "./components/index"; tambien funciona
import { GifGrid } from "./components"; //con import { GifGrid } from "./components/index"; tambien funciona

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);
 
  const onAddCategory = (newCategory) => {

    if( categories.includes(newCategory) ) return;
    // setCategories([...categories, 'Valorant']);
    // setCategories( cat => [...cat, 'Valorant']);
    setCategories([ newCategory, ...categories]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory 
        
        onNewCategory= {value => onAddCategory(value)}
      /> 

      {
        categories.map( (category) => 
            (
            <GifGrid 
              key={category} 
              category={category}
            />
          ))
      }


    </>
  )
}
