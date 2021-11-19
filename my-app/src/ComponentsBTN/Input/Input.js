import React from "react";
import './input.scss';

function Input({filteredByInput}){

    return(
        <input className='inputData' placeholder='Поиск задач' onChange={(e) => filteredByInput(e.target.value)}></input>
    )
}

export default Input;