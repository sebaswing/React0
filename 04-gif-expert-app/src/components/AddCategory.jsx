import { useState } from "react"
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategory}) => {

    const[inputValue,setInputValue]=useState ('One ');

    const onInputChange = ({target}) => {
        // console.log(target.value);
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        // console.log(event);
        event.preventDefault();
        if(inputValue.trim().length <=1) return;
        // console.log(inputValue);
        // setCategories( cat => [inputValue, ...cat]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (

        <form onSubmit={(event)=>onSubmit(event)}>
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