import { useState } from "react"
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategory}) => {

    const[inputValue,setInputValue]=useState ('');//estado local del componente si se quiere poner un valor por defecto se pone entre los parentesis

    const onInputChange = ({target}) => {
        // console.log(target.value);
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        // console.log(event);
        // console.log('--->Submit hecho!!!');// ejemplo para saber si del test se llama el submit  
        event.preventDefault();
        if(inputValue.trim().length <=1) return;
        // console.log(inputValue);
        // setCategories( cat => [inputValue, ...cat]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (

        <form onSubmit={(event)=>onSubmit(event)} aria-label="form">
            <input 
                type="text" 
                placeholder="Buscar gifs" 
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

AddCategory.prototype = {
    onNewCategory: PropTypes.func.isRequired,

}